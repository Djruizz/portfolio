<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div>
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-30" />
      <div
        class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"
      />

      <div
        class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div class="space-y-6">
          <UBadge
            color="primary"
            variant="subtle"
            size="lg"
            class="font-mono opacity-0 animate-fade-in-up"
          >
            <UIcon name="i-lucide-send" class="size-3.5 mr-1" />
            {{ t("contact.title") }}
          </UBadge>
          <h1
            class="text-4xl sm:text-5xl font-bold text-highlighted opacity-0 animate-fade-in-up stagger-1"
          >
            {{ t("contact.title") }}
          </h1>
          <p
            class="text-muted text-lg max-w-2xl mx-auto opacity-0 animate-fade-in-up stagger-2"
          >
            {{ t("contact.description") }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-12">
          <div class="lg:col-span-3 opacity-0 animate-fade-in-up stagger-2">
            <ContactForm />
          </div>
          <div class="lg:col-span-2 opacity-0 animate-fade-in-up stagger-3">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
