<template>
    <div>
        <div class="abs cover contaniner">
            <div class="abs cover pnl">
                <div class="top pnl-head" style="padding: 20px ; color: white;">
                    <div id="userName"> 用戶：张三<span style='float: right;color: green'>在線</span></div>
                    <div id="chatMes" style="text-align: center;color: #6fbdf3;font-family: 新宋体">
                        <!--正在和 <font face="楷体">张三</font> 聊天-->
                    </div>
                </div>
                <!--聊天区开始-->
                <div class="abs cover pnl-body" id="pnlBody">
                    <div class="abs cover pnl-left" id="initBackground" style="background-color: white; width: 100%">
                        <div class="abs cover pnl-left" id="chatArea" style="display: none">
                            <div class="abs cover pnl-msgs scroll" id="show">
                                <div class="pnl-list" id="hists"><!-- 历史消息 --></div>
                                <div class="pnl-list" id="msgs">

                                    <!-- 消息这展示区域 -->
                                    <div class="msg guest"><div class="msg-right"><div class="msg-host photo" style="background-image: url(https://seeiebucket.s3.ap-northeast-1.amazonaws.com/d515c3c1-73bb-497f-b529-f10e8da4df49.png)"></div><div class="msg-ball">你好</div></div></div>
                                     <div class="msg robot"><div class="msg-left" worker=""><div class="msg-host photo" style="background-image: url(https://seeiebucket.s3.ap-northeast-1.amazonaws.com/d515c3c1-73bb-497f-b529-f10e8da4df49.png)"></div><div class="msg-ball">你好</div></div></div>
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
            userName: "",
            userList: ["张三", "李四"]
        };
    },
    methods: {
        showChat(name) {
            this.toName = name;
            $("#chatArea").css("display", "inline");
            // $("#msgs").html("");
            $("#chatMes").html("正在和 <font face=\"楷体\">" + this.toName + "</font> 聊天");
            const chatData = sessionStorage.getItem(this.toName);
            if (chatData != null) {
                // $("#msgs").html(chatData);
            }
        },
        updateUserList(newUserList) {
            this.userList = newUserList;
        }


    },
    async mounted() {
        let userName;
        let toName;
        const self = this;

        await axios.get('users/getUserName')
            .then(res => {
                userName = res.data;
                console.log("success......." + userName);
                $("#userName").html(" 用户：" + res + "<span style='float: right;color: green'>在線</span>");
            })
            .catch(error => {
                console.error(error);
            });
        const ws = new WebSocket("ws://localhost:8080/chat");
        ws.onopen = function () {
            console.log("on open..." + userName);
            $("#userName").html(" 用户：" + userName + "<span style='float: right;color: green'>在線</span>");
        };

        ws.onmessage = function (evt) {

            console.log("on message...");
            const dataStr = evt.data;
            const res = JSON.parse(dataStr);
            console.log(res);
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
                let str = "<div class=\"msg robot\"><div class=\"msg-left\" worker=\"\"><div class=\"msg-host photo\" style=\"background-image: url(https://seeiebucket.s3.ap-northeast-1.amazonaws.com/d515c3c1-73bb-497f-b529-f10e8da4df49.png)\"></div><div class=\"msg-ball\">" + res.message + "</div></div></div>";
                if (toName === res.fromName) {
                    $("#msgs").append(str);
                }
                const chatData = sessionStorage.getItem(res.fromName);
                if (chatData != null) {
                    str = chatData + str;
                }
                sessionStorage.setItem(res.fromName, str);
            }
        };

        ws.onclose = function () {
            console.log("on close...");
            $("#userName").html(" 用户：" + userName + "<span style='float: right;color: red'>離線</span>");
        };

        $("#submit").click(function () {
            const data = $("#context_text").val();
            $("#context_text").val("");
            const json = {"toName": toName, "message": data};
            let str = "<div class=\"msg guest\"><div class=\"msg-right\"><div class=\"msg-host headDefault\"></div><div class=\"msg-ball\">" + data + "</div></div></div>";
            $("#msgs").append(str);
            const chatData = sessionStorage.getItem(toName);
            if (chatData != null) {
                str = chatData + str;
            }
            sessionStorage.setItem(toName, str);
            ws.send(JSON.stringify(json));
        });
    }
};
</script>

<style scoped lang="css">
@import "css/bootstrap.min.css";
@import "css/chat.css";
</style>