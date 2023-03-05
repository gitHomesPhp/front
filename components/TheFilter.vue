<template>
  <div class="filter">
    <div class="filter-wrapper">
      <span :class="['query-label', param.type]" v-for="param in params">
        {{param.value}}
      </span>
      <input type="text" @keydown.enter="add" @keydown.delete="backspace" v-model="currenParam">
    </div>
    <div class="button-wrapper">
      <button @click="search">Найти</button>
    </div>
  </div>

</template>

<script setup>
const brands = ref([])
const devices = ref([]);
const params = ref([]);
const currenParam = ref('')
const add = () => {
  if (currenParam.value !== '') {
    let param = {
      type: 'q',
      value: currenParam.value
    }

    params.value.push(param)
    currenParam.value = ''
  }
}
const backspace = () => {
  if (currenParam.value === '') {
    currenParam.value = params.value.pop().value
  }
}

const search = () => {
  navigateTo('/hui')
}
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  align-items: center;
  min-height: 50px;
  .button-wrapper {
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      padding: .3rem .5rem;
      background-color: #4CAF50; /* Green */
      border: 1px;
      color: white;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      transition-duration: 0.4s;
      &:hover {
        color: #162136;
        background-color: white;
        border: 1px solid #4CAF50;
      }
      &:active {
        background-color: #4CAF50; /* Green */
        opacity: 1;
        transition: 0s
      }
    }
  }

  .filter-wrapper {
    border: 1px solid #7e9dd7;
    flex-grow: 1;
    padding: .3rem;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    &:focus-within {
      border: 2px solid #4765a1;
    }
  }
  input {
    flex-grow: 1;
  }
}
.query-label {
  padding: .3rem;
  border-radius: 5px;
  margin: .1rem;
  color: #dcdee3;
  &.q {
    //background-color: #194405;
    background-color: rgb(17, 125, 193);
  }
}

</style>