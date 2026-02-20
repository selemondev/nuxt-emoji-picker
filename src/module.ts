import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'

export default defineNuxtModule<Record<string, never>>({
  meta: {
    name: 'nuxt-emoji-picker',
    configKey: 'emoji',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },

  defaults: {},
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const nuxtOptions = _nuxt.options

    nuxtOptions.css = nuxtOptions.css || []

    nuxtOptions.css.push('vue3-emoji-picker/css')

    addComponent({
      name: 'NuxtEmojiPicker',
      filePath: resolve('./runtime/components/NuxtEmojiPicker.vue'),
      mode: 'client',
    })
  },
})
