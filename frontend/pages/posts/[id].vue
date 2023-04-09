<template>
  <template v-if="post">
    <div class="text-lg font-bold text-center">{{ post.attributes.title }}</div>
    <div class="mt-10 text-left">{{ post.attributes.text }}</div>
  </template>
</template>

<script setup>
const route = useRoute()
const post = ref(null)
const { findOne } = useStrapi()

const { data } = await findOne('posts', route.params.id)
post.value = data
</script>
