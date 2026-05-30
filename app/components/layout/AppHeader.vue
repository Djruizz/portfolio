<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { t } = useI18n();
const localePath = useLocalePath();
const { siteName } = useProfile();

const items = computed<NavigationMenuItem[]>(() => [
  { label: t("nav.home"), to: localePath("/") },
  { label: t("nav.projects"), to: localePath("/projects") },
  { label: t("nav.about"), to: localePath("/about") },
  { label: t("nav.contact"), to: localePath("/contact") },
]);
</script>

<template>
  <UHeader
    :ui="{
      root: 'bg-default/80 backdrop-blur-xl border-b border-default',
      container: 'max-w-7xl',
    }"
  >
    <template #title>
      <div class="flex items-center gap-2 group">
        <div class="relative">
          <div
            class="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center"
          >
            <span class="text-inverted font-bold text-sm">D</span>
          </div>
          <div
            class="absolute inset-0 rounded-lg bg-linear-to-br from-primary to-secondary opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300"
          />
        </div>
        <span
          class="font-mono font-bold text-highlighted text-lg tracking-tight"
          >{{ siteName.split('.')[0] }}<span class="text-primary">.{{ siteName.split('.')[1] }}</span></span
        >
      </div>
    </template>

    <UNavigationMenu
      :items="items"
      :ui="{
        link: 'font-medium text-sm tracking-wide',
      }"
    />

    <template #right>
      <LayoutLanguageSwitcher />
      <ClientOnly>
        <UColorModeButton color="neutral" variant="ghost" />
        <template #fallback>
          <div class="size-8" />
        </template>
      </ClientOnly>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
