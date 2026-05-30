<script setup lang="ts">
const { t, locale } = useI18n()
const { experiences } = useProfile()

const localizedExperiences = computed(() =>
  experiences.map(e => ({
    ...e,
    localizedDescription: e.description[locale.value as 'en' | 'es'] || e.description.en
  }))
)
</script>

<template>
  <section class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-10">
        <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <UIcon name="i-lucide-briefcase" class="size-5 text-primary" />
        </div>
        <h2 class="text-2xl font-bold text-highlighted">{{ t('about.experience_title') }}</h2>
      </div>

      <div class="relative">
        <div class="absolute left-[19px] top-0 bottom-0 w-px bg-default" />

        <div class="space-y-8">
          <div
            v-for="(exp, index) in localizedExperiences"
            :key="exp.id"
            class="relative pl-12 opacity-0 animate-fade-in-up"
            :class="`stagger-${index + 1}`"
          >
            <div class="absolute left-0 top-1.5 w-10 h-10 rounded-full bg-elevated border-2 border-primary flex items-center justify-center z-10">
              <UIcon name="i-lucide-building-2" class="size-4 text-primary" />
            </div>

            <UCard
              :ui="{
                root: 'bg-elevated/50 border-default hover:border-primary/30 transition-all duration-300',
                body: 'p-5'
              }"
            >
              <div class="space-y-3">
                <div class="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 class="text-lg font-semibold text-highlighted">{{ exp.role }}</h3>
                    <p class="text-primary font-medium">{{ exp.company }}</p>
                  </div>
                  <UBadge color="neutral" variant="subtle" class="font-mono text-xs">
                    {{ exp.period }}
                  </UBadge>
                </div>

                <p class="text-muted text-sm leading-relaxed">
                  {{ exp.localizedDescription }}
                </p>

                <div class="flex flex-wrap gap-1.5 pt-2">
                  <UBadge
                    v-for="tech in exp.technologies"
                    :key="tech"
                    color="primary"
                    variant="subtle"
                    size="xs"
                    class="font-mono"
                  >
                    {{ tech }}
                  </UBadge>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
