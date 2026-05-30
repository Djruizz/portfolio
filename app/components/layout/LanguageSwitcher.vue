<script setup lang="ts">
const { locale, setLocale } = useI18n()

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'es' : 'en')
}
</script>

<template>
  <ClientOnly>
    <UButton
      icon="i-lucide-globe"
      :label="locale.toUpperCase()"
      color="neutral"
      variant="ghost"
      size="xs"
      @click="toggleLocale"
      class="font-mono"
    />
    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
