<script setup lang="ts">
const { t } = useI18n();
const { name, socialLinks } = useProfile();
const localePath = useLocalePath();
</script>

<template>
  <section class="relative min-h-[85vh] flex items-center overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern opacity-40" />
    <div
      class="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"
    />
    <div
      class="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse"
      style="animation-delay: 1.5s"
    />

    <div
      class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="opacity-0 animate-fade-in-up">
            <UBadge
              color="primary"
              variant="subtle"
              size="lg"
              class="font-mono"
            >
              <UIcon name="i-lucide-terminal" class="size-3.5 mr-1" />
              ~/portfolio
            </UBadge>
          </div>

          <div class="space-y-4 opacity-0 animate-fade-in-up stagger-1">
            <p class="text-muted text-lg font-medium">
              {{ t("home.hero.greeting") }}
            </p>
            <h1
              class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span class="text-highlighted">{{ name }}</span>
              <span class="text-gradient">.</span>
            </h1>
            <h2 class="text-2xl sm:text-3xl font-semibold text-toned font-mono">
              {{ t("home.hero.role") }}
            </h2>
          </div>

          <p
            class="text-muted text-lg max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-2"
          >
            {{ t("home.hero.description") }}
          </p>

          <div
            class="flex flex-wrap gap-4 opacity-0 animate-fade-in-up stagger-3"
          >
            <UButton
              :to="localePath('/projects')"
              :label="t('home.hero.cta_projects')"
              icon="i-lucide-code-2"
              size="lg"
              class="glow-primary-hover"
            />
            <UButton
              :to="localePath('/contact')"
              :label="t('home.hero.cta_contact')"
              color="neutral"
              variant="outline"
              size="lg"
              trailingIcon="i-lucide-arrow-right"
            />
          </div>

          <div
            class="flex items-center gap-4 pt-4 opacity-0 animate-fade-in-up stagger-4"
          >
            <UButton
              v-for="link in socialLinks.slice(0, 4)"
              :key="link.name"
              :icon="link.icon"
              :to="link.url"
              target="_blank"
              color="neutral"
              variant="ghost"
              size="md"
            />
          </div>
        </div>

        <div
          class="hidden lg:flex justify-center opacity-0 animate-fade-in stagger-3"
        >
          <div class="relative">
            <div
              class="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl"
            />
            <div
              class="relative bg-elevated border border-default rounded-2xl p-6 font-mono text-sm shadow-2xl"
            >
              <div
                class="flex items-center gap-2 mb-4 pb-4 border-b border-default"
              >
                <div class="w-3 h-3 rounded-full bg-error" />
                <div class="w-3 h-3 rounded-full bg-warning" />
                <div class="w-3 h-3 rounded-full bg-success" />
                <span class="ml-2 text-dimmed text-xs">developer.ts</span>
              </div>
              <div class="space-y-2 text-sm">
                <p>
                  <span class="text-violet-400">const</span>
                  <span class="text-primary">developer</span> = {
                </p>
                <p class="pl-4">
                  <span class="text-emerald-400">name</span>:
                  <span class="text-amber-300">"{{ name }}"</span>,
                </p>
                <p class="pl-4">
                  <span class="text-emerald-400">role</span>:
                  <span class="text-amber-300">"{{ t("home.hero.role") }}"</span
                  >,
                </p>
                <p class="pl-4">
                  <span class="text-emerald-400">passion</span>:
                  <span class="text-amber-300">"Building things"</span>,
                </p>
                <p class="pl-4">
                  <span class="text-emerald-400">coffee</span>:
                  <span class="text-violet-400">true</span>,
                </p>
                <p class="pl-4">
                  <span class="text-emerald-400">available</span>:
                  <span class="text-violet-400">true</span>
                </p>
                <p>};</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
