<script setup lang="ts">
const { t } = useI18n()
const { name } = useProfile()
</script>

<template>
  <section class="relative py-20 overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern opacity-30" />
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="space-y-6">
        <div class="opacity-0 animate-fade-in-up">
          <UBadge color="primary" variant="subtle" size="lg" class="font-mono">
            <UIcon name="i-lucide-user" class="size-3.5 mr-1" />
            {{ t('about.title') }}
          </UBadge>
        </div>

        <h1 class="text-4xl sm:text-5xl font-bold text-highlighted opacity-0 animate-fade-in-up stagger-1">
          {{ t('about.title') }}
        </h1>

        <p class="text-muted text-lg max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up stagger-2">
          {{ t('about.description') }}
        </p>
      </div>
    </div>
  </section>
</template>
