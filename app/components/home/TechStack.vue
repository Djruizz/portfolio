<script setup lang="ts">
const { t } = useI18n();
const { techStack } = useProfile();

const categories = [
  { key: "frontend", label: "Frontend", icon: "i-lucide-monitor" },
  { key: "backend", label: "Backend", icon: "i-lucide-server" },
  { key: "tools", label: "Tools", icon: "i-lucide-wrench" },
] as const;

const skillsByCategory = computed(() =>
  categories.map((cat) => ({
    ...cat,
    skills: techStack.filter((s) => s.category === cat.key),
  })),
);
</script>

<template>
  <section class="py-24 relative bg-elevated/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 space-y-4">
        <UBadge color="primary" variant="subtle" class="font-mono">
          <UIcon name="i-lucide-cpu" class="size-3.5 mr-1" />
          {{ t("home.stack.title") }}
        </UBadge>
        <h2 class="text-3xl sm:text-4xl font-bold text-highlighted">
          {{ t("home.stack.title") }}
        </h2>
        <p class="text-muted text-lg max-w-2xl mx-auto">
          {{ t("home.stack.description") }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <UCard
          v-for="category in skillsByCategory"
          :key="category.key"
          :ui="{
            root: 'bg-elevated/50 border-default hover:border-primary/30 transition-all duration-300',
            body: 'p-6',
          }"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
              >
                <UIcon :name="category.icon" class="size-5 text-primary" />
              </div>
              <h3 class="text-lg font-semibold text-highlighted">
                {{ category.label }}
              </h3>
            </div>
          </template>

          <div class="space-y-4">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="flex items-center gap-3"
            >
              <UIcon :name="skill.icon" class="size-5 text-toned shrink-0" />
              <span class="text-sm text-toned flex-1">{{ skill.name }}</span>
              <span
                v-if="skill.yearsOfExperience"
                class="text-xs text-muted font-mono"
              >
                {{ skill.yearsOfExperience }}{{ t("home.stack.years") }}
              </span>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>
