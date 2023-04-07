<template>
  <template v-if="post">
    <div class="text-lg font-bold text-center">{{ post.attributes.title }}</div>
    <div class="mt-10 text-left">{{ post.attributes.text }}</div>
  </template>
</template>

<script setup>
const route = useRoute()
const { findOne } = useStrapi()
const post = ref(null)

const response = await findOne('posts', route.params.id)
post.value = response.data
</script>
