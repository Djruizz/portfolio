<script setup lang="ts">
const { t } = useI18n()
const { email, location, socialLinks } = useProfile()
</script>

<template>
  <div class="space-y-8">
    <div>
      <h3 class="text-xl font-semibold text-highlighted mb-3">{{ t('contact.info.title') }}</h3>
      <p class="text-muted leading-relaxed">{{ t('contact.info.description') }}</p>
    </div>

    <div class="space-y-4">
      <div class="flex items-center gap-4 p-4 bg-elevated/50 border border-default rounded-xl">
        <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <UIcon name="i-lucide-map-pin" class="size-5 text-primary" />
        </div>
        <div>
          <p class="text-sm text-muted">{{ t('contact.info.location') }}</p>
          <p class="font-medium text-highlighted">{{ location }}</p>
        </div>
      </div>

      <div class="flex items-center gap-4 p-4 bg-elevated/50 border border-default rounded-xl">
        <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <UIcon name="i-lucide-mail" class="size-5 text-primary" />
        </div>
        <div>
          <p class="text-sm text-muted">Email</p>
          <a :href="`mailto:${email}`" class="font-medium text-primary hover:underline">{{ email }}</a>
        </div>
      </div>

      <div class="flex items-center gap-4 p-4 bg-elevated/50 border border-default rounded-xl">
        <div class="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
          <UIcon name="i-lucide-check-circle" class="size-5 text-success" />
        </div>
        <div>
          <p class="text-sm text-muted">{{ t('contact.info.availability') }}</p>
          <p class="font-medium text-success">{{ t('contact.info.available') }}</p>
        </div>
      </div>
    </div>

    <div>
      <p class="text-sm text-muted mb-3">Follow me</p>
      <div class="flex gap-2">
        <UButton
          v-for="link in socialLinks"
          :key="link.name"
          :icon="link.icon"
          :to="link.url"
          target="_blank"
          color="neutral"
          variant="outline"
          size="md"
        />
      </div>
    </div>
  </div>
</template>
