<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ msg?: string }>()
const msg = props.msg ?? '404 页面不存在'
</script>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
