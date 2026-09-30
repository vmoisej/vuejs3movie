<template>
  <div>
    <div>
      <AdminLayout v-if="isAdmin">
        <router-view></router-view>
      </AdminLayout>
      <ClientLayout v-else>
        <router-view></router-view>
      </ClientLayout>
    </div>
  </div>
</template>

<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";
import ClientLayout from "@/layouts/ClientLayout.vue";
import {onMounted, ref} from "vue"
import {useRoute, useRouter} from "vue-router";

defineOptions({
  name: 'App'
})

onMounted(() => {
  console.log(111, useRoute().name)    // видасть помилку: undefined
})

const router = useRouter()
const route = useRoute()
const isAdmin = ref(false)

router.isReady()
  .then(() => {
    // тут видасть помилку: Uncaught (in promis) TypeRoor: Cannor read properties of undefined (reading "name")
    // console.log(222, useRoute().name)
    // тому використовуємо перемінну route
    console.log(222, route.name)
    isAdmin.value = route.name.split('.')[0] === 'admin'
})
</script>

<style>

</style>

