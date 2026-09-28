<script setup>
import {reactive, ref} from "vue";

  let title = ref('My Mega Site')

  let persona = reactive({
    name: 'Vasja Pupkin',
    age: 30
  })

  const permanent = 'Константу не можна змінити'
  // permanent = 'На відміну від властивостей обєкту'
  persona.age = 50

  sayHelloFunc()

  const sayHello = function () {         // це переміння типу функція
    console.log(11111111111, 'Hello 1')
  }

  function sayHelloFunc() {              // це функція
    console.log(222222222222, 'Hello 2')
  }

  function changeTitle() {              // це функція
    title.value = 'HELLO,'
    persona.name = 'MY FRIEND'
  }

  sayHello()

</script>

<script>
// export default {
//   data() {
//     return {
//       title: 'SOME TITLE'
//     }
//   }
// }
</script>

<template>
  <div class="w-1/2 mx-auto p-4">
    <div>{{ title }}</div>
    <div>{{ persona.name }} : {{ persona.age }}</div>
    <div>{{ permanent }}</div>

    <div>
      <span @click="changeTitle">click me, please</span>
    </div>

  </div>
</template>

<style>
</style>
