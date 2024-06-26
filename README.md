<p align="center">
 <img align="center" src="https://raw.githubusercontent.com/selemondev/nuxt-emoji-picker/master/assets/nuxt-emoji-picker.png" />
 <h1 align="center">
 Nuxt Emoji Picker
 </h1>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/nuxt-emoji-picker">
    <img alt="npm-version-src" src="https://img.shields.io/npm/v/nuxt-emoji-picker/latest.svg?style=flat&colorA=020420&colorB=00DC82" />
  </a>
  <a href="https://npmjs.com/package/nuxt-emoji-picker">
    <img alt="npm-downloads-src" src="https://img.shields.io/npm/dm/nuxt-emoji-picker.svg?style=flat&colorA=020420&colorB=00DC82" />
  </a>
  <a href="https://nuxt.com">
    <img alt="nuxt-src" src="https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js" />
  </a>
</p>

## Demo

### Play with it on [Stackblitz](https://stackblitz.com/edit/nuxt-starter-qstqbs?file=app.vue)

### Watch video

https://github.com/selemondev/nuxt-emoji-picker/assets/106826371/32b3ab4f-13cd-4c7e-918b-f2b4daa00cde

## Features

- Add emojis to your Nuxt 3 application effortlessly.

## Quick Setup

1. Install the module in your Nuxt application with one command:

```bash
npx nuxi@latest module add nuxt-emoji-picker
```

That's it! You can now use nuxt-emoji-picker in your Nuxt application ✨

### Usage

You can use the `nuxt-emoji-picker` component as shown below:

```vue
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
```

You can check out all the available props and methods [here](https://github.com/delowardev/vue3-emoji-picker/?tab=readme-ov-file#options-props)


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

