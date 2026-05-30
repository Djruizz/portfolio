<script setup lang="ts">
const { t } = useI18n();
const { techStack } = useProfile();
</script>

<template>
  <section class="py-16 bg-elevated/20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-10">
        <div
          class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
        >
          <UIcon name="i-lucide-zap" class="size-5 text-primary" />
        </div>
        <h2 class="text-2xl font-bold text-highlighted">
          {{ t("about.skills_title") }}
        </h2>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div
          v-for="(skill, index) in techStack"
          :key="skill.name"
          class="group relative bg-elevated/50 border border-default rounded-xl p-4 text-center hover:border-primary/40 transition-all duration-300 opacity-0 animate-fade-in-up"
          :class="`stagger-${Math.min(index + 1, 6)}`"
        >
          <div
            class="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div class="relative z-10 space-y-2">
            <UIcon :name="skill.icon" class="size-8 text-primary mx-auto" />
            <p class="text-sm font-medium text-highlighted">{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
