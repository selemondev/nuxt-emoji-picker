import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-emoji-picker',
    configKey: 'emoji',
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
