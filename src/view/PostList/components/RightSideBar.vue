<template>
  <div class="search-container">
    <div class="search-wrapper">
      <input
        type="text"
        v-model="query"
        @keyup.enter="search"
        placeholder="請輸入關鍵字"
        class="search-input"
      />
      <button
        class="search-icon"
        @click="search"
      ></button>
    </div>
    <div class="hashtags-container">
      <div
        v-for="tag in hashtags"
        :key="tag"
        class="hashtag"
        @click="addTagToQuery(tag)"
      >
        {{ tag }}
      </div>
    </div>
    <!-- <div v-if="results.length" class="results-container animate__animated animate__fadeIn">
      <div
        v-for="result in results"
        :key="result"
        class="result-item"
      >
        {{ result.content }}
      </div>
    </div> -->
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  emits: ['update-items'],
  setup(_, { emit }) {
    const query = ref('');
    const results = ref([]);
    const hashtags = ref(['求職', '運動', '美食', '游戲', '音樂']); // 標籤列表

    const search = async () => {
      if (query.value) {
        try {
          const response = await axios.get('/dyThreads/search', {
            params: {
              keyword: query.value, // 將參數名稱從 'query' 改為 'keyword'
            },
          });
          if (response.data && response.data.data) {
            results.value = response.data.data;
          } else {
            results.value = [];
          }
          emit('update-items', results.value);
        } catch (error) {
          console.error(error);
          results.value = [];
          emit('update-items', []);
        }
      } else {
        results.value = [];
        emit('update-items', []);
      }
    };

    const addTagToQuery = (tag) => {
      query.value += `#${tag} `;
      // search(); // 執行搜尋
    };

    return { query, results, hashtags, search, addTagToQuery };
  },
};
</script>


<style scoped>
.search-container {
  position: relative;
  width: 300px;
  margin: 50px auto;
}

.search-wrapper {
  position: relative;
  display: flex;
}

.search-input {
  flex-grow: 1;
  padding: 12px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  background-color: #f1f1f1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.search-icon {
  width: 40px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.064.072.098.112l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.096zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>');
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.search-icon:hover {
  background-color: #f1f1f1;
}

.hashtags-container {
  margin-top: 10px;
}

.hashtag {
  display: inline-block;
  margin-right: 5px;
  padding: 5px 10px;
  background-color: #eee;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.hashtag:hover {
  background-color: #ddd;
}

.results-container {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 150px;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
}

.result-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  transition: all 0.3s ease-in-out;
}

.result-item:hover {
  background-color: #f5f5f5;
}

.result-item:last-child {
  border-bottom: none;
}
</style>
