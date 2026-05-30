<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useProfile } from "~/composables/useProfile";
const { name, fullName } = useProfile();
if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const { t, locale } = useI18n();
const { featuredProjects } = useProfile();
const localePath = useLocalePath();

const projects = computed(() =>
  featuredProjects.map((p) => ({
    ...p,
    localizedDescription:
      p.description[locale.value as "en" | "es"] || p.description.en,
  })),
);

const heroRef = ref<HTMLElement>();
const codeCardRef = ref<HTMLElement>();
const codeTextRef = ref<HTMLElement>();
const projectsContainerRef = ref<HTMLElement>();
const fileNameRef = ref<HTMLElement>();

const isDesktop = ref(false);

onMounted(() => {
  isDesktop.value = window.innerWidth >= 1024;

  const handleResize = () => {
    isDesktop.value = window.innerWidth >= 1024;
  };

  window.addEventListener("resize", handleResize);

  const hero = heroRef.value;
  const codeCard = codeCardRef.value;
  const codeText = codeTextRef.value;
  const projectsContainer = projectsContainerRef.value;
  const fileName = fileNameRef.value;

  if (!hero || !codeCard || !codeText || !projectsContainer || !fileName)
    return;

  if (!isDesktop.value) return;

  const ctx = gsap.context(() => {
    const cardRect = codeCard.getBoundingClientRect();
    const viewportCenterX = window.innerWidth / 2;
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const offsetX = viewportCenterX - cardCenterX;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=125%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (self.progress < 0.15) {
            fileName.textContent = "developer.ts";
          } else {
            fileName.textContent = "featured_projects.md";
          }
        },
      },
    });

    tl.to(".hero-text", {
      opacity: 0,
      y: -50,
      duration: 0.2,
    })
      .to(
        ".hero-badges",
        {
          opacity: 0,
          duration: 0.15,
        },
        "<",
      )
      .to(
        codeText,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
        },
        "<",
      )
      .to(
        fileName,
        {
          opacity: 0,
          duration: 0.1,
        },
        ">-0.3",
      )
      .to(fileName, {
        opacity: 1,
        duration: 0.1,
      })
      .to(codeCard, {
        x: offsetX,
        scale: 2.2,
        duration: 0.8,
        ease: "power2.inOut",
      })

      .to(
        projectsContainer,
        {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.3,
        },
        ">-0.6",
      )
      .from(
        ".project-card-inner",
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
          stagger: 0.05,
          duration: 0.4,
        },
        ">-0.2",
      );
  }, hero);

  return () => {
    ctx.revert();
    window.removeEventListener("resize", handleResize);
  };
});
</script>

<template>
  <div>
    <section
      ref="heroRef"
      class="relative min-h-screen flex items-center overflow-hidden"
    >
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
          <div class="space-y-8 hero-text">
            <div class="hero-badges">
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

            <div class="space-y-4">
              <p class="text-muted text-lg font-medium">
                {{ t("home.hero.greeting") }}
              </p>
              <h1
                class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                <span class="text-highlighted">{{ name }}</span>
                <span class="text-gradient">.</span>
              </h1>
              <h2
                class="text-2xl sm:text-3xl font-semibold text-toned font-mono"
              >
                {{ t("home.hero.role") }}
              </h2>
            </div>

            <p class="text-muted text-lg max-w-xl leading-relaxed">
              {{ t("home.hero.description") }}
            </p>

            <div class="flex flex-wrap gap-4">
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
          </div>

          <div
            ref="codeCardRef"
            class="hidden lg:flex justify-center origin-center"
          >
            <div class="relative w-[420px] h-[320px]">
              <div
                class="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl"
              />

              <div
                class="relative bg-elevated border border-default rounded-2xl p-6 font-mono text-sm shadow-2xl h-full overflow-hidden"
              >
                <div
                  class="flex items-center gap-2 mb-4 pb-4 border-b border-default"
                >
                  <div class="w-3 h-3 rounded-full bg-error" />
                  <div class="w-3 h-3 rounded-full bg-warning" />
                  <div class="w-3 h-3 rounded-full bg-success" />
                  <span ref="fileNameRef" class="ml-2 text-dimmed text-xs"
                    >developer.ts</span
                  >
                </div>

                <div ref="codeTextRef" class="space-y-2 text-sm">
                  <p>
                    <span class="text-violet-400">const </span>
                    <span class="text-primary">developer</span> = {
                  </p>
                  <p class="pl-4">
                    <span class="text-emerald-400">name</span>:
                    <span class="text-amber-300">"{{ fullName }}"</span>,
                  </p>
                  <p class="pl-4">
                    <span class="text-emerald-400">role</span>:
                    <span class="text-amber-300"
                      >"{{ t("home.hero.role") }}"</span
                    >,
                  </p>
                  <p class="pl-4">
                    <span class="text-emerald-400">passion</span>:
                    <span class="text-amber-300"
                      >"{{ t("home.hero.passion") }}"</span
                    >,
                  </p>
                  <p class="pl-4">
                    <span class="text-emerald-400">active</span>:
                    <span class="text-violet-400">true</span>,
                  </p>
                  <p class="pl-4">
                    <span class="text-emerald-400">available</span>:
                    <span class="text-violet-400">true</span>
                  </p>
                  <p>};</p>
                </div>

                <div
                  ref="projectsContainerRef"
                  class="absolute inset-x-3 top-12 bottom-3 opacity-0 pointer-events-none flex flex-col"
                >
                  <div class="space-y-1.5 overflow-y-auto pe-4 scrollbar-hide">
                    <div
                      v-for="project in projects"
                      :key="project.id"
                      @click="navigateTo(`/projects/${project.id}`)"
                      class="project-card-inner bg-muted/50 border border-default rounded p-1.5 hover:border-primary/40 transition-colors cursor-pointer"
                    >
                      <div class="flex items-start justify-between gap-1.5">
                        <div class="flex-1 min-w-0">
                          <h4
                            class="font-semibold text-highlighted text-[10px] truncate font-sans"
                          >
                            {{ project.title }}
                          </h4>
                          <p class="text-muted text-[8px] mt-0.5 font-sans">
                            {{ project.localizedDescription }}
                          </p>
                        </div>
                        <div class="flex gap-0.5 shrink-0">
                          <UBadge
                            v-for="tech in project.technologies.slice(0, 2)"
                            :key="tech"
                            color="primary"
                            variant="subtle"
                            size="xs"
                            class="font-mono text-[8px] px-1"
                          >
                            {{ tech }}
                          </UBadge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ClientOnly>
      <HomeFeaturedProjects v-if="!isDesktop" />
    </ClientOnly>

    <HomeTechStack />
  </div>
</template>
