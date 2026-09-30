<template>
  <div>
    <section class="bg-white p4">
      <header>
        CLIENT AREA
      </header>
    </section>
    <section class="flex">
      <article class="bg-gray-100 w-3/4 p-4">
        <slot />
      </article>
    </section>

  </div>
</template>

<script setup>
defineOptions({
  name: 'ClientLayout'
})
</script>

<style scoped>

</style>
