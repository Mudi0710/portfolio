<template>
  <div v-if="project" class="project-detail">

    <!-- Hero -->
    <section class="project-detail-hero section">
      <div class="container">
        <RouterLink to="/projects" class="project-detail-hero__back">← 返回 Projects</RouterLink>
        <div class="project-detail-hero__hashtags">
          <span v-for="tag in project.hashtags" :key="tag" class="project-detail-hero__hashtag">#{{ tag }}</span>
        </div>
        <h1 class="project-detail-hero__title">{{ project.title }}</h1>
        <p class="project-detail-hero__desc">{{ project.description }}</p>
        <div class="project-detail-hero__tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </section>

    <!-- Cover image -->
    <div class="project-detail-cover">
      <div class="container">
        <img :src="getImageUrl(project.cover)" :alt="project.title" class="project-detail-cover__img" />
      </div>
    </div>

    <!-- Content + Right Sidebar -->
    <section class="project-detail-content section">
      <div class="container project-detail-content__layout">

        <!-- Main content body (LEFT) -->
        <div class="project-detail-content__body" ref="contentRef" v-html="project.content"></div>

        <!-- Right sidebar: TOC + Contact -->
        <aside class="toc-sidebar">
          <!-- TOC -->
          <div class="toc-sidebar__toc">
            <p class="toc-sidebar__title">目錄</p>
            <ul class="toc-sidebar__list">
              <li
                v-for="item in toc"
                :key="item.id"
                class="toc-sidebar__item"
                :class="{ 'toc-sidebar__item--h3': item.level === 'H3' }"
              >
                <a
                  @click.prevent="scrollTo(item.id)"
                  href="#"
                  class="toc-sidebar__link"
                  :class="{ 'toc-sidebar__link--active': activeId === item.id }"
                >{{ item.text }}</a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="toc-sidebar__contact">
            <p class="toc-sidebar__contact-title">Contact</p>
            <div class="toc-sidebar__contact-links">
              <a href="mailto:nomis820710@gmail.com" class="toc-sidebar__contact-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                nomis820710@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/nomis-yang/" target="_blank" rel="noopener noreferrer" class="toc-sidebar__contact-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn ↗
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Mobile floating TOC -->
    <div class="toc-float" :class="{ 'toc-float--open': tocOpen }">
      <button class="toc-float__toggle" @click="tocOpen = !tocOpen" aria-label="目錄">
        <i class="fa-solid fa-list"></i>
      </button>
      <div class="toc-float__panel">
        <p class="toc-float__title">目錄</p>
        <ul class="toc-float__list">
          <li
            v-for="item in toc"
            :key="item.id"
            :class="{ 'toc-float__item--h3': item.level === 'H3' }"
          >
            <a @click.prevent="scrollTo(item.id); tocOpen = false" href="#">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom nav: back + prev / next -->
    <section class="project-detail-nav section">
      <div class="container">
        <div class="project-detail-nav__inner">
          <RouterLink to="/projects" class="btn btn--secondary project-detail-nav__back">
            ← 查看所有專案
          </RouterLink>
          <div class="project-detail-nav__arrows">
            <RouterLink
              v-if="prevProject"
              :to="`/projects/${prevProject.id}`"
              class="project-detail-nav__arrow"
            >
              <span class="project-detail-nav__arrow-dir">← 上一篇</span>
              <span class="project-detail-nav__arrow-title">{{ prevProject.title }}</span>
            </RouterLink>
            <RouterLink
              v-if="nextProject"
              :to="`/projects/${nextProject.id}`"
              class="project-detail-nav__arrow project-detail-nav__arrow--next"
            >
              <span class="project-detail-nav__arrow-dir">下一篇 →</span>
              <span class="project-detail-nav__arrow-title">{{ nextProject.title }}</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

  </div>

  <div v-else class="project-detail-notfound section">
    <div class="container">
      <h1>找不到此專案</h1>
      <RouterLink to="/projects" class="btn btn--primary">返回 Projects</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects.js'
import { getImageUrl } from '@/utils/image.js'

const route = useRoute()
const project = computed(() => projects.find((p) => p.id === route.params.id))

// Prev / Next
const currentIndex = computed(() => projects.findIndex((p) => p.id === route.params.id))
const prevProject = computed(() => (currentIndex.value > 0 ? projects[currentIndex.value - 1] : null))
const nextProject = computed(() => (currentIndex.value < projects.length - 1 ? projects[currentIndex.value + 1] : null))

// 目錄
const toc = ref([])
const activeId = ref('')
const contentRef = ref(null)
const tocOpen = ref(false)

const buildToc = () => {
  if (!contentRef.value) return
  const headings = contentRef.value.querySelectorAll('h2, h3')
  toc.value = Array.from(headings).map((h, i) => {
    const id = `heading-${i}`
    h.id = id
    return { id, text: h.textContent, level: h.tagName }
  })
  fixPdInfoLastItem()
}

// Let the last visible pd-info item span both columns when it falls alone on its row.
// Pure CSS can't detect this reliably because display:none items still count in :nth-child.
const fixPdInfoLastItem = () => {
  if (!contentRef.value) return
  contentRef.value.querySelectorAll('.pd-info').forEach((table) => {
    const visibleItems = Array.from(
      table.querySelectorAll('.pd-info__item')
    ).filter((el) => getComputedStyle(el).display !== 'none')
    visibleItems.forEach((el) => el.classList.remove('pd-info__item--full'))
    if (visibleItems.length % 2 !== 0) {
      visibleItems[visibleItems.length - 1].classList.add('pd-info__item--full')
    }
  })
}

const onScroll = () => {
  if (!contentRef.value) return
  const headings = contentRef.value.querySelectorAll('h2, h3')
  let current = ''
  headings.forEach((h) => {
    if (h.getBoundingClientRect().top <= 350) {
      current = h.id
    }
  })
  activeId.value = current
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  nextTick(() => {
    buildToc()
    window.addEventListener('scroll', onScroll)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

watch(project, () => {
  nextTick(() => buildToc())
})
</script>
