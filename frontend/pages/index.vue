<template>
  <div class="flex flex-col text-lg font-bold gap-4 underline text-center">
    <NuxtLink v-for="post of posts" :to="`/posts/${post.id}`">{{ post.attributes.title }}</NuxtLink>
  </div>
</template>

<script setup>
const posts = ref([])
const { find } = useStrapi()

const { data } = await find('posts')
posts.value = data
</script>
