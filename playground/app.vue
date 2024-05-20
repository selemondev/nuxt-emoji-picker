<template>
  <NuxtEmojiPicker
    :hide-search="false"
    theme="light"
    @select="onSelectEmoji"
  />
</template>

<script setup>
import { ref } from 'vue'

const selectedEmoji = ref()
const onSelectEmoji = (emoji) => {
  selectedEmoji.value = emoji.i
}
</script>
