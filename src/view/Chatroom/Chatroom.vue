<template>
    <div>
        <div class="cover contaniner">
            <div class="top pnl-head cover pnl" style="width:100%; padding: 10px ; color: white;">
                    <div id="userName"> 用戶：<span style='float: right;color: green'>在線</span></div>
                    <div id="chatMes" style="text-align: center;color: #6fbdf3;font-family: 新宋体">
                        <!--正在和 <font face="楷体">张三</font> 聊天-->
                </div>
                <!--聊天区开始-->
                <div class="abs cover pnl-body" id="pnlBody">
                    <div class="abs cover pnl-left" id="initBackground" style="background-color: white; width: 100%">
                        <div class="abs cover pnl-left" id="chatArea" style="display: none">
                            <div class="abs cover pnl-msgs scroll" id="show">
                                <div class="pnl-list" id="hists"><!-- 历史消息 --></div>
                                <div class="pnl-list" id="msgs" v-for="msg in messages">
                                    <!-- 消息这展示区域 -->
                                    <div v-if="msg.sender===this.userName" class="msg guest"><div class="msg-right"><div class="msg-host photo" :style="{ backgroundImage: 'url(' + myAvatar + ')' }"></div><div class="msg-ball">{{msg.content}}</div></div></div>
                                     <div v-if="msg.sender===this.toName" class="msg robot"><div class="msg-left"><div class="msg-host photo" :style="{ backgroundImage: 'url(' + toAvatar + ')' }"></div><div class="msg-ball">{{msg.content}}</div></div></div>
                                </div>
                            </div>

                            <div class="abs bottom pnl-text">
                                <div class="abs cover pnl-input">
                                    <textarea class="scroll" id="context_text" wrap="hard"
                                              placeholder="在此輸入訊息..."></textarea>
                                    <div class="abs atcom-pnl scroll hide" id="atcomPnl">
                                        <ul class="atcom" id="atcom"></ul>
                                    </div>
                                </div>

                                <div class="abs br pnl-btn" id="submit"
                                     style="background-color: rgb(32, 196, 202); color: rgb(255, 255, 255);">
                                    送出
                                </div>
                            </div>
                        </div>

                        <!--聊天区 结束-->

                        <div class="abs right pnl-right">
                            <div class="slider-container hide"></div>
                            <div class="pnl-right-content">
                                <div class="pnl-tabs">
                                    <div class="tab-btn active" id="hot-tab">好友列表</div>
                                </div>
                                <div class="pnl-hot">
                                    <ul class="rel-list unselect" id="userlist">
                                        <li class="rel-item" v-for="name in userList" :key="name">
                                            <a @click="showChat(name)">{{ name }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="pnl-right-content">
                                <div class="pnl-tabs">
                                    <div class="tab-btn active">系統</div>
                                </div>
                                <div class="pnl-hot">
                                    <ul class="rel-list unselect" id="broadcastList">
                                        <!--<li class="rel-item" style="color: #9d9d9d;font-family: 宋体">您的好友 张三 已上线</li>
                                        <li class="rel-item" style="color: #9d9d9d;font-family: 宋体">您的好友 李四 已上线</li>-->
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import axios from "axios";

export default {
    name: 'Chatroom',
    data() {
        return {
            toName: "",
            myAvatar: "",
            toAvatar: "",
            userName: "",
            userList: [],
            messages: [
                // {
                //     sender: "toName",
                //     content: "Hi, I'm guest"
                // },
                // {
                //     sender: "me",
                //     content: "Hi"
                // }
                ]
        };
    },
    methods: {
        showChat(name) {
            axios.get('users/getUserAvatar?userName='+ name)
                .then(res => {
                    this.toAvatar = res.data;
                })
                .catch(error => {
                    console.error(error);
                });
            this.toName = name;
            $("#chatArea").css("display", "inline");
            $("#chatMes").html("正在和 <font face=\"楷体\">" + this.toName + "</font> 聊天");
        },
        updateUserList(newUserList) {
            this.userList = newUserList;
        }


    },
    async mounted() {
        let userName;
        const self = this;

        await axios.get('users/getUser')
            .then(res => {
                self.userName = res.data.userName;
                userName = res.data.userName;
                self.myAvatar = res.data.avatar;
                $("#userName").html(" 用戶：" + userName + "<span style='float: right;color: green'>在線</span>");
            })
            .catch(error => {
                console.error(error);
            });
        // const ws = new WebSocket("ws://localhost:8080/chat");
        const ws = new WebSocket("wss://connectu.life:8080/chat");

        const keepAliveInterval = 20000; // 20 seconds
        let keepAliveTimer;

        ws.onopen = function () {
            keepAliveTimer = setInterval(() => {
                ws.send('ping');
            }, keepAliveInterval);
            $("#userName").html(" 用戶：" + userName + "<span style='float: right;color: green'>在線</span>");
        };

        ws.onmessage = function (evt) {

            const dataStr = evt.data;
            const res = JSON.parse(dataStr);
            if (res.system) {
                const names = res.message;
                let userList = [];
                let broadcastListStr = "";
                for (const name of names) {
                    if (name !== userName) {
                        userList.push(name);
                        broadcastListStr += "<li class=\"rel-item\" style=\"color: #9d9d9d;font-family: 宋体\">" + name + " 已上線</li>";
                    }
                }
                self.updateUserList(userList);
                $("#broadcastList").html(broadcastListStr);
            } else {
                const msg = {
                    sender: res.fromName,
                    content: res.message
                }
                self.messages.push(msg);
            }

        };

        ws.onclose = function () {
            clearInterval(keepAliveTimer);
            $("#userName").html(" 用户：" + userName + "<span style='float: right;color: red'>離線</span>");
        };

        $("#submit").click(function () {
            const data = $("#context_text").val();
            $("#context_text").val("");
            const json = {"toName": self.toName, "message": data};
            const msg = {
                sender: userName,
                content: data
            }
            self.messages.push(msg);
            ws.send(JSON.stringify(json));
        });
    }
};
</script>

<style scoped lang="css">
@import "css/bootstrap.min.css";
@import "css/chat.css";
</style>