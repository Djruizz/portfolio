<script setup lang="ts">
import type { Project } from "~/composables/useProfile";

const { t, locale } = useI18n();
const route = useRoute();
const { projects } = useProfile();

const projectId = route.params.id as string;
const project = computed(() => {
  const found = projects.find((p) => p.id === projectId);
  if (!found) return null;
  return {
    ...found,
    localizedDescription:
      found.description[locale.value as "en" | "es"] || found.description.en,
    localizedSubtitle:
      found.subtitle[locale.value as "en" | "es"] || found.subtitle.en,
    localizedCategory:
      found.category?.[locale.value as "en" | "es"] || found.category?.en,
    localizedContext:
      found.context?.[locale.value as "en" | "es"] || found.context?.en,
    localizedSolution:
      found.solution?.[locale.value as "en" | "es"] || found.solution?.en,
    localizedChallenge:
      found.challenge?.[locale.value as "en" | "es"] || found.challenge?.en,
    localizedRoles:
      found.roles?.[locale.value as "en" | "es"] || found.roles?.en || [],
  };
});

const galleryImages = computed(() => {
  if (project.value?.gallery && project.value.gallery.length > 0) {
    return project.value.gallery;
  }
  return project.value?.image ? [project.value.image] : [];
});

if (!project.value) {
  throw createError({
    statusCode: 404,
    message: "Project not found",
  });
}
</script>

<template>
  <div v-if="project" class="min-h-screen bg-default">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="mb-8">
        <UButton
          to="/projects"
          :label="t('projects.back_to_projects')"
          icon="i-lucide-arrow-left"
          color="neutral"
          variant="ghost"
          size="sm"
        />
      </div>

      <div class="mb-12">
        <div class="flex items-start justify-between gap-4 mb-4">
          <div class="flex-1">
            <h1 class="text-4xl sm:text-5xl font-bold text-highlighted mb-3">
              {{ project.title }}
            </h1>
            <p class="text-xl text-muted">
              {{ project.localizedSubtitle }}
            </p>
          </div>
          <div class="flex flex-col items-end gap-2">
            <UBadge color="primary" variant="solid" size="lg" class="font-mono">
              {{ project.year }}
            </UBadge>
            <UBadge
              v-if="project.localizedCategory"
              color="neutral"
              variant="subtle"
              size="sm"
            >
              {{ project.localizedCategory }}
            </UBadge>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-8 mb-12">
        <div class="lg:col-span-2 space-y-8">
          <UCard
            v-if="project.localizedContext"
            :ui="{ root: 'bg-elevated/50 border-default' }"
          >
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-target" class="size-6 text-primary" />
                <h2 class="text-2xl font-bold text-highlighted">
                  {{ t("projects.context_title") }}
                </h2>
              </div>
            </template>
            <p class="text-muted leading-relaxed">
              {{ project.localizedContext }}
            </p>
          </UCard>

          <UCard
            v-if="project.localizedSolution"
            :ui="{ root: 'bg-elevated/50 border-default' }"
          >
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-lightbulb" class="size-6 text-primary" />
                <h2 class="text-2xl font-bold text-highlighted">
                  {{ t("projects.solution_title") }}
                </h2>
              </div>
            </template>
            <p class="text-muted leading-relaxed">
              {{ project.localizedSolution }}
            </p>
          </UCard>

          <UCard
            v-if="project.localizedChallenge"
            :ui="{ root: 'bg-elevated/50 border-default' }"
          >
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-zap" class="size-6 text-primary" />
                <h2 class="text-2xl font-bold text-highlighted">
                  {{ t("projects.challenge_title") }}
                </h2>
              </div>
            </template>
            <p class="text-muted leading-relaxed">
              {{ project.localizedChallenge }}
            </p>
          </UCard>
        </div>

        <div class="space-y-6">
          <UCard :ui="{ root: 'bg-elevated/50 border-default' }">
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-cpu" class="size-6 text-primary" />
                <h2 class="text-xl font-bold text-highlighted">
                  {{ t("projects.tech_stack") }}
                </h2>
              </div>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tech in project.technologies"
                :key="tech"
                color="primary"
                variant="subtle"
                size="md"
                class="font-mono"
              >
                {{ tech }}
              </UBadge>
            </div>
          </UCard>

          <UCard :ui="{ root: 'bg-elevated/50 border-default' }">
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-link" class="size-6 text-primary" />
                <h2 class="text-xl font-bold text-highlighted">
                  {{ t("projects.quick_links") }}
                </h2>
              </div>
            </template>
            <div class="space-y-3">
              <UButton
                v-if="project.liveUrl"
                :to="project.liveUrl"
                target="_blank"
                :label="t('projects.live_demo')"
                icon="i-lucide-external-link"
                color="primary"
                variant="solid"
                block
              />
              <UButton
                v-if="project.repoUrl"
                :to="project.repoUrl"
                target="_blank"
                :label="t('projects.source_code')"
                icon="i-simple-icons-github"
                color="neutral"
                variant="outline"
                block
              />
            </div>
          </UCard>

          <UCard
            v-if="project.localizedRoles.length > 0"
            :ui="{ root: 'bg-elevated/50 border-default' }"
          >
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-user-check" class="size-6 text-primary" />
                <h2 class="text-xl font-bold text-highlighted">
                  {{ t("projects.roles_title") }}
                </h2>
              </div>
            </template>
            <ul class="space-y-2">
              <li
                v-for="(role, index) in project.localizedRoles"
                :key="index"
                class="flex items-start gap-2 text-muted"
              >
                <UIcon
                  name="i-lucide-check"
                  class="size-4 text-primary mt-1 shrink-0"
                />
                <span class="text-sm">{{ role }}</span>
              </li>
            </ul>
          </UCard>
        </div>
      </div>

      <div v-if="galleryImages.length > 0" class="mb-12">
        <h2 class="text-3xl font-bold text-highlighted mb-6">
          {{ t("projects.gallery_title") }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="(image, index) in galleryImages"
            :key="index"
            class="group relative overflow-hidden rounded-xl border border-default hover:border-primary/40 transition-all duration-300"
          >
            <img
              :src="image"
              :alt="`${project.title} - ${index + 1}`"
              class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
