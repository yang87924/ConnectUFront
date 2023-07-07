<template>
    <div class="search-container">
      <input
        type="text"
        v-model="query"
        @input="onInput"
        placeholder="Search..."
        class="search-input"
      />
      <div v-if="results.length" class="results-container animate__animated animate__fadeIn">
        <div
          v-for="result in results"
          :key="result"
          class="result-item"
        >
          {{ result }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  
  export default {
    setup() {
      const query = ref('');
      const results = ref([]);
  
      const onInput = () => {
        // 模拟搜索结果
        results.value = query.value ? [query.value, query.value + ' result'] : [];
      };
  
      return { query, results, onInput };
    },
  };
  </script>
  
<style scoped>
.search-container {
  position: relative;
  width: 300px; /* 调整宽度 */
  margin: 50px auto; /* 调整上下位置 */
}

.search-input {
  width: 100%;
  padding: 12px 40px 12px 12px; /* 调整内边距 */
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.064.072.098.112l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.096zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>');
  background-position: right 12px center; /* 放大镜位置 */
  background-repeat: no-repeat;
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
}

.result-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.result-item:last-child {
  border-bottom: none;
}
</style>