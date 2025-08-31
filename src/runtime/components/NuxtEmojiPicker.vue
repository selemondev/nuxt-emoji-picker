<script setup lang='ts'>
import EmojiPicker from 'vue3-emoji-picker'

interface GroupNames {
  [key: string]: string
}

type ColorTheme = 'light' | 'dark' | 'auto'

const props = defineProps<{
  native?: boolean
  hideSearch?: boolean
  hideGroupIcons?: boolean
  hideGroupNames?: boolean
  disabledStickyGroupNames?: boolean
  disableSkinTones?: boolean
  disabledGroups?: string[]
  groupNames?: GroupNames
  staticTexts?: StaticTexts
  pickerType?: string
  mode?: string
  offset?: number
  additionalGroups?: GroupNames
  groupOrder?: string[]
  groupIcons?: GroupIcons
  displayRecent?: boolean
  theme?: ColorTheme
}>()

defineOptions({
  inheritAttrs: true,
})
</script>

<template>
  <EmojiPicker v-bind="props" />
</template>
