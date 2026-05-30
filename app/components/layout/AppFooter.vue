<script setup lang="ts">
const { t } = useI18n();
const { socialLinks } = useProfile();

const year = new Date().getFullYear();
</script>

<template>
  <UFooter
    :ui="{
      root: 'bg-elevated/50 border-t border-default',
      container: 'max-w-7xl',
    }"
  >
    <template #top>
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-6 py-8"
      >
        <div class="flex items-center gap-2">
          <div
            class="w-6 h-6 rounded-md bg-linear-to-br from-primary to-secondary flex items-center justify-center"
          >
            <span class="text-inverted font-bold text-xs">D</span>
          </div>
          <span class="font-mono font-semibold text-highlighted"
            >dario<span class="text-primary">.dev</span></span
          >
        </div>

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
      </div>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        &copy; {{ year }} dario.dev — {{ t("footer.rights") }}
      </p>
    </template>

    <template #right>
      <p class="text-muted text-sm flex items-center gap-1.5">
        {{ t("footer.built_with") }}
        <UIcon name="i-simple-icons-nuxtdotjs" class="size-4 text-primary" />
        <UIcon name="i-simple-icons-tailwindcss" class="size-4 text-primary" />
      </p>
    </template>
  </UFooter>
</template>
