<script setup lang="ts">
const { t } = useI18n()
const { featuredProjects } = useProfile()
const localePath = useLocalePath()
const { locale } = useI18n()

const projects = computed(() =>
  featuredProjects.map(p => ({
    ...p,
    localizedDescription: p.description[locale.value as 'en' | 'es'] || p.description.en
  }))
)
</script>

<template>
  <section class="py-24 relative">
    <div class="absolute inset-0 bg-dot-pattern opacity-30" />

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 space-y-4">
        <UBadge color="primary" variant="subtle" class="font-mono">
          <UIcon name="i-lucide-folder-open" class="size-3.5 mr-1" />
          {{ t('home.featured.title') }}
        </UBadge>
        <h2 class="text-3xl sm:text-4xl font-bold text-highlighted">{{ t('home.featured.title') }}</h2>
        <p class="text-muted text-lg max-w-2xl mx-auto">{{ t('home.featured.description') }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectsProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>

      <div class="text-center mt-12">
        <UButton
          :to="localePath('/projects')"
          :label="t('home.featured.view_all')"
          color="neutral"
          variant="outline"
          size="lg"
          trailingIcon="i-lucide-arrow-right"
        />
      </div>
    </div>
  </section>
</template>
