<template>
  <div>
    <section class="bg-white p4">
      <header>
        ADMIN PANEL
      </header>
    </section>
    <section class="flex">
      <aside class="bg-gray-700 w-1/4 min-h-screen text-white">
        LEFT-SIDE BLOCK
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
