<script setup lang="ts">
const { t } = useI18n();
const { socialLinks, siteName } = useProfile();

const year = new Date().getFullYear();
</script>

<template>
  <UFooter
    :ui="{
      root: 'bg-elevated/50 border-t border-default',
      container: 'max-w-7xl',
      bottom: 'pt-0 lg:py-4',
    }"
  >
    <template #left>
      <div class="flex items-center gap-2">
        <div
          class="w-6 h-6 rounded-md bg-linear-to-br from-primary to-secondary flex items-center justify-center"
        >
          <span class="text-inverted font-bold text-xs">D</span>
        </div>
        <span class="font-mono font-semibold text-highlighted"
          >{{ siteName.split('.')[0] }}<span class="text-primary">.{{ siteName.split('.')[1] }}</span></span
        >
      </div>
    </template>
    <template #right>
      <div class="flex items-center gap-3">
        <UButton
          v-for="link in socialLinks"
          :key="link.name"
          :icon="link.icon"
          :to="link.url"
          target="_blank"
          color="neutral"
          variant="ghost"
          size="sm"
        />
      </div>
    </template>
    <template #bottom>
      <div class="flex flex-col items-center justify-center gap-3">
        <p class="text-muted text-sm flex items-center gap-1.5">
          {{ t("footer.built_with") }}
          <UIcon name="i-simple-icons-nuxtdotjs" class="size-4 text-primary" />
          <UIcon
            name="i-simple-icons-tailwindcss"
            class="size-4 text-primary"
          />
        </p>
        <p class="text-muted text-sm">
          &copy; {{ year }} {{ siteName }} — {{ t("footer.rights") }}
        </p>
      </div>
    </template>
  </UFooter>
</template>
