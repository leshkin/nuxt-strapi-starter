<template>
  <div class="flex flex-col text-lg font-bold gap-4 underline text-center">
    <NuxtLink v-for="post of posts" :to="`/posts/${post.id}`">{{ post.attributes.title }}</NuxtLink>
  </div>
</template>

<script setup>
const { find } = useStrapi()
const posts = ref([])

const response = await find('posts')
posts.value = response.data
</script>
