<template>
  <div>
    <section class="bg-white p4">
      <header>
        ADMIN PANEL
      </header>
    </section>
    <section class="flex">
      <aside class="bg-gray-700 w-1/4 min-h-screen text-white">
        <router-link :to="{name: 'admin.dashboard.index'}" class="block p-4 border-b border-gray-500 text-gray-200">DASHBOARD</router-link>
        <router-link :to="{name: 'admin.posts.index'}" class="block p-4 border-b border-gray-500 text-gray-200">POSTS</router-link>
      </aside>
      <article class="bg-gray-100 w-3/4 p-4">
        <slot />
      </article>
    </section>

  </div>
</template>

<script setup>
defineOptions({
  name: 'AdminLayout'
})
</script>

<style scoped>

</style>
