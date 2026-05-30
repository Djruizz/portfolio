<script setup lang="ts">
import type { Project } from "~/composables/useProfile";

const props = defineProps<{
  project: Project & { localizedDescription: string };
}>();

const { t } = useI18n();
</script>

<template>
  <UCard
    :ui="{
      root: 'group bg-elevated/50 border-default hover:border-primary/40 transition-all duration-300 overflow-hidden glow-primary-hover',
      body: 'p-0',
    }"
  >
    <div
      class="relative h-48 bg-linear-to-br from-primary/20 to-secondary/20 overflow-hidden"
    >
      <div class="absolute inset-0 bg-grid-pattern opacity-20" />
      <div class="absolute inset-0 flex items-center justify-center">
        <UIcon name="i-lucide-code-2" class="size-16 text-primary/40" />
      </div>
      <div class="absolute top-3 right-3">
        <UBadge color="primary" variant="solid" size="xs" class="font-mono">
          {{ project.year }}
        </UBadge>
      </div>
    </div>

    <div class="p-5 space-y-4">
      <div>
        <h3
          class="text-lg font-semibold text-highlighted group-hover:text-primary transition-colors"
        >
          {{ project.title }}
        </h3>
        <p class="text-muted text-sm mt-2 line-clamp-2">
          {{ project.localizedDescription }}
        </p>
      </div>

      <div class="flex flex-wrap gap-1.5">
        <UBadge
          v-for="tech in project.technologies.slice(0, 4)"
          :key="tech"
          color="neutral"
          variant="subtle"
          size="xs"
          class="font-mono"
        >
          {{ tech }}
        </UBadge>
        <UBadge
          v-if="project.technologies.length > 4"
          color="neutral"
          variant="soft"
          size="xs"
          class="font-mono"
        >
          +{{ project.technologies.length - 4 }}
        </UBadge>
      </div>

      <div class="flex items-center gap-2 pt-2 border-t border-default">
        <UButton
          v-if="project.liveUrl"
          :to="project.liveUrl"
          target="_blank"
          :label="t('projects.live_demo')"
          icon="i-lucide-external-link"
          color="primary"
          variant="ghost"
          size="xs"
        />
        <UButton
          v-if="project.repoUrl"
          :to="project.repoUrl"
          target="_blank"
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          size="xs"
        />
      </div>
    </div>
  </UCard>
</template>
