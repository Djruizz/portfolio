<script setup lang="ts">
import { en, es } from '@nuxt/ui/locale'

const uiLocales = { en, es } as Record<string, typeof en>

const { locale } = useI18n()

const currentLocale = computed(() => uiLocales[locale.value] ?? en)

useHead({
  htmlAttrs: {
    lang: computed(() => currentLocale.value.code),
    dir: computed(() => currentLocale.value.dir)
  }
})
</script>

<template>
  <UApp :locale="currentLocale">
    <div class="min-h-screen bg-default">
      <LayoutAppHeader />
      <UMain>
        <NuxtPage />
      </UMain>
      <LayoutAppFooter />
    </div>
  </UApp>
</template>
