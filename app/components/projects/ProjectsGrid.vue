<script setup lang="ts">
const { t, locale } = useI18n()
const { projects } = useProfile()

const projectList = computed(() =>
  projects.map(p => ({
    ...p,
    localizedDescription: p.description[locale.value as 'en' | 'es'] || p.description.en
  }))
)
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProjectsProjectCard
      v-for="project in projectList"
      :key="project.id"
      :project="project"
    />
  </div>
</template>
