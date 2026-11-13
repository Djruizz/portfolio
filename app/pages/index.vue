<script setup lang="ts">
import { useProfile } from "~/composables/useProfile";
import { useGSAP } from "~/composables/useGSAP";

const { gsap, ScrollTrigger } = useGSAP();
const { name, fullName, featuredProjects } = useProfile();
const { t, locale } = useI18n();
const localePath = useLocalePath();

const projects = computed(() =>
  featuredProjects.map((p) => ({
    ...p,
    localizedDescription:
      p.description[locale.value as "en" | "es"] || p.description.en,
  })),
);

const heroRef = ref<HTMLElement>();
const codeSlotRef = ref<HTMLElement>();
const codeCardRef = ref<HTMLElement>();
const contentStageRef = ref<HTMLElement>();
const codeTextRef = ref<HTMLElement>();
const projectsContainerRef = ref<HTMLElement>();
const projectsListRef = ref<HTMLElement>();

const activeTab = ref<"developer" | "projects">("developer");
const isReducedMotion = ref(false);

let mm: gsap.MatchMedia | undefined;
let activeScrollTrigger: { start: number; end: number } | undefined;

const getMobileStageHeights = () => {
  const codeText = codeTextRef.value;
  const projectsList = projectsListRef.value;
  if (!codeText || !projectsList) {
    return { devHeight: 180, projectsHeight: 240 };
  }

  const devHeight = codeText.scrollHeight;
  const maxMobileStageHeight = Math.round(window.innerHeight * 0.58);
  const projectsHeight = Math.min(
    projectsList.scrollHeight,
    Math.max(devHeight, maxMobileStageHeight),
  );

  return { devHeight, projectsHeight };
};

const applyTabVisibility = (tab: "developer" | "projects", duration = 0) => {
  if (!codeTextRef.value || !projectsContainerRef.value) return;
  const showProjects = tab === "projects";
  const isMobileViewport = window.innerWidth < 1024;

  if (isMobileViewport && contentStageRef.value) {
    const { devHeight, projectsHeight } = getMobileStageHeights();
    gsap.to(contentStageRef.value, {
      height: showProjects ? projectsHeight : devHeight,
      duration,
      ease: "power2.inOut",
      overwrite: "auto",
    });
  }

  gsap.to(codeTextRef.value, {
    autoAlpha: showProjects ? 0 : 1,
    y: showProjects ? -10 : 0,
    duration,
    overwrite: "auto",
  });
  gsap.to(projectsContainerRef.value, {
    autoAlpha: showProjects ? 1 : 0,
    y: showProjects ? 0 : 10,
    duration,
    overwrite: "auto",
  });

  if (showProjects) {
    gsap.set(".project-card-inner", {
      autoAlpha: 1,
      y: 0,
      scale: 1,
    });
  }
};

const selectTab = (tab: "developer" | "projects") => {
  if (isReducedMotion.value || !activeScrollTrigger) {
    activeTab.value = tab;
    applyTabVisibility(tab, isReducedMotion.value ? 0 : 0.25);
    return;
  }

  const { start, end } = activeScrollTrigger;
  const targetY = tab === "projects" ? start + (end - start) * 0.98 : start;

  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
};

onMounted(() => {
  const hero = heroRef.value;
  const codeSlot = codeSlotRef.value;
  const codeCard = codeCardRef.value;
  const contentStage = contentStageRef.value;
  const codeText = codeTextRef.value;
  const projectsContainer = projectsContainerRef.value;

  if (
    !hero ||
    !codeSlot ||
    !codeCard ||
    !contentStage ||
    !codeText ||
    !projectsContainer
  ) {
    return;
  }

  mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)",
      reduceMotion: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      const { isDesktop, reduceMotion } = context.conditions as {
        isDesktop: boolean;
        isMobile: boolean;
        reduceMotion: boolean;
      };

      isReducedMotion.value = reduceMotion;
      activeScrollTrigger = undefined;

      if (reduceMotion) {
        gsap.set(codeCard, { x: 0, y: 0, scale: 1 });
        gsap.set(codeSlot, { clearProps: "minHeight" });
        gsap.set(".hero-text, .hero-badges", { autoAlpha: 1, y: 0 });
        applyTabVisibility(activeTab.value, 0);
        return;
      }

      gsap.set(codeText, { autoAlpha: 1, y: 0, scale: 1 });
      gsap.set(projectsContainer, { autoAlpha: 0, y: 10 });
      gsap.set(".project-card-inner", { autoAlpha: 0, y: 16, scale: 0.96 });

      if (isDesktop) {
        gsap.set(codeSlot, { clearProps: "minHeight" });
        gsap.set(contentStage, { clearProps: "height" });

        const getDesktopTarget = () => {
          const heroRect = hero.getBoundingClientRect();
          const slotRect = codeSlot.getBoundingClientRect();
          const slotCenterX = slotRect.left + slotRect.width / 2;
          const slotCenterYInHero =
            slotRect.top - heroRect.top + slotRect.height / 2;

          const viewportCenterX = window.innerWidth / 2;
          const targetCenterY = window.innerHeight / 2 + 20;
          const maxScaleW = (window.innerWidth * 0.84) / codeSlot.offsetWidth;
          const maxScaleH =
            ((window.innerHeight - 96) * 0.82) / codeSlot.offsetHeight;

          return {
            x: viewportCenterX - slotCenterX,
            y: targetCenterY - slotCenterYInHero,
            scale: Math.min(1.85, maxScaleW, maxScaleH),
          };
        };

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "+=125%",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              activeTab.value = self.progress >= 0.42 ? "projects" : "developer";
            },
          },
        });

        activeScrollTrigger = tl.scrollTrigger;

        tl.to(".hero-text", {
          autoAlpha: 0,
          y: -40,
          duration: 0.25,
        })
          .to(
            ".hero-badges",
            {
              autoAlpha: 0,
              duration: 0.15,
            },
            "<",
          )
          .to(
            codeText,
            {
              autoAlpha: 0,
              y: -12,
              scale: 0.95,
              duration: 0.25,
            },
            "<0.05",
          )
          .to(
            codeCard,
            {
              x: () => getDesktopTarget().x,
              y: () => getDesktopTarget().y,
              scale: () => getDesktopTarget().scale,
              duration: 0.7,
            },
            "<0.05",
          )
          .to(
            projectsContainer,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
            },
            ">-0.35",
          )
          .to(
            ".project-card-inner",
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              stagger: 0.08,
              duration: 0.35,
              ease: "power2.out",
            },
            ">-0.2",
          );
      } else {
        const getMobileScale = () => {
          const available = Math.max(codeSlot.offsetWidth, window.innerWidth - 24);
          return Math.min(1.04, available / codeSlot.offsetWidth);
        };

        const chromeHeight = Math.max(
          0,
          codeCard.offsetHeight - contentStage.offsetHeight,
        );

        gsap.set(codeSlot, {
          minHeight: () =>
            chromeHeight +
            Math.max(
              getMobileStageHeights().devHeight,
              getMobileStageHeights().projectsHeight,
            ),
        });

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: codeSlot,
            start: "center center",
            end: "+=90%",
            pin: codeSlot,
            pinSpacing: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              activeTab.value = self.progress >= 0.42 ? "projects" : "developer";
            },
          },
        });

        activeScrollTrigger = tl.scrollTrigger;

        tl.to(codeCard, {
          scale: () => getMobileScale(),
          duration: 0.45,
        })
          .fromTo(
            contentStage,
            {
              height: () => getMobileStageHeights().devHeight,
            },
            {
              height: () => getMobileStageHeights().projectsHeight,
              duration: 0.45,
            },
            "<",
          )
          .to(
            codeText,
            {
              autoAlpha: 0,
              y: -12,
              scale: 0.96,
              duration: 0.3,
            },
            "<",
          )
          .to(
            projectsContainer,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
            },
            ">-0.1",
          )
          .to(
            ".project-card-inner",
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              stagger: 0.08,
              duration: 0.35,
              ease: "power2.out",
            },
            ">-0.2",
          );
      }
    },
    hero,
  );
});

watch(locale, async () => {
  await nextTick();
  ScrollTrigger.refresh();
});

onUnmounted(() => {
  mm?.revert();
});
</script>

<template>
  <div>
    <section
      ref="heroRef"
      class="relative min-h-screen flex items-center overflow-x-clip"
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
        class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
      >
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
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

          <div ref="codeSlotRef" class="flex items-center justify-center w-full">
            <div
              ref="codeCardRef"
              class="relative w-full max-w-[420px] h-auto lg:h-[320px] origin-center will-change-transform"
            >
              <div
                class="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl"
              />

              <div
                class="relative bg-elevated border border-default rounded-2xl p-4 sm:p-5 lg:p-6 font-mono text-sm shadow-2xl lg:h-full overflow-hidden flex flex-col"
              >
                <div
                  class="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-default shrink-0"
                >
                  <div class="flex items-center gap-1.5 shrink-0">
                    <div class="w-3 h-3 rounded-full bg-error" />
                    <div class="w-3 h-3 rounded-full bg-warning" />
                    <div class="w-3 h-3 rounded-full bg-success" />
                  </div>

                  <div
                    role="tablist"
                    aria-label="Editor tabs"
                    class="flex items-center gap-1 overflow-x-auto scrollbar-hide"
                  >
                    <button
                      type="button"
                      role="tab"
                      :aria-selected="activeTab === 'developer'"
                      @click="selectTab('developer')"
                      class="px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors whitespace-nowrap cursor-pointer border"
                      :class="
                        activeTab === 'developer'
                          ? 'bg-primary/15 text-primary border-primary/30'
                          : 'bg-transparent text-dimmed border-transparent hover:text-muted hover:bg-muted/40'
                      "
                    >
                      developer.ts
                    </button>
                    <button
                      type="button"
                      role="tab"
                      :aria-selected="activeTab === 'projects'"
                      @click="selectTab('projects')"
                      class="px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors whitespace-nowrap cursor-pointer border"
                      :class="
                        activeTab === 'projects'
                          ? 'bg-primary/15 text-primary border-primary/30'
                          : 'bg-transparent text-dimmed border-transparent hover:text-muted hover:bg-muted/40'
                      "
                    >
                      featured_projects.md
                    </button>
                  </div>
                </div>

                <div ref="contentStageRef" class="relative lg:flex-1 lg:min-h-0">
                  <div
                    ref="codeTextRef"
                    class="space-y-2 text-xs sm:text-sm"
                  >
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
                    class="absolute inset-0 invisible opacity-0 flex flex-col"
                  >
                    <div
                      ref="projectsListRef"
                      class="space-y-2 lg:space-y-1.5 overflow-y-auto pr-1 scrollbar-hide"
                    >
                      <div
                        v-for="project in projects"
                        :key="project.id"
                        @click="navigateTo(localePath(`/projects/${project.id}`))"
                        class="project-card-inner bg-muted/50 border border-default rounded-lg lg:rounded p-2.5 lg:p-2 hover:border-primary/40 transition-colors cursor-pointer"
                      >
                        <div class="flex items-start justify-between gap-2">
                          <div class="flex-1 min-w-0">
                            <h4
                              class="font-semibold text-highlighted text-sm lg:text-[11px] truncate font-sans"
                            >
                              {{ project.title }}
                            </h4>
                            <p
                              class="text-muted text-xs lg:text-[9px] mt-1 lg:mt-0.5 line-clamp-2 font-sans leading-relaxed lg:leading-snug"
                            >
                              {{ project.localizedDescription }}
                            </p>
                          </div>
                          <div class="flex flex-wrap justify-end gap-1 shrink-0">
                            <UBadge
                              v-for="tech in project.technologies.slice(0, 2)"
                              :key="tech"
                              color="primary"
                              variant="subtle"
                              size="xs"
                              class="font-mono text-[10px] lg:text-[8px] px-1.5 lg:px-1"
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
      </div>
    </section>

    <HomeTechStack />
  </div>
</template>
