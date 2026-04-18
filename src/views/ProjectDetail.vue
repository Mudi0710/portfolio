<template>
  <div v-if="project" class="project-detail">
    <section class="project-detail-hero section">
      <div class="container">
        <RouterLink to="/projects" class="project-detail-hero__back">← 返回 Projects</RouterLink>
        <div class="project-detail-hero__hashtags">
          <span v-for="tag in project.hashtags" :key="tag" class="project-detail-hero__hashtag">#{{ tag }}</span>
        </div>
        <h1 class="project-detail-hero__title">{{ project.title }}</h1>
        <p class="project-detail-hero__desc">{{ project.description }}</p>
        <div class="project-detail-hero__tags">
          <span v-for="tag in project.tags" :key="tag" class="project-detail-hero__tag">{{ tag }}</span>
        </div>
      </div>
    </section>

    <div class="project-detail-cover">
      <div class="container">
        <img :src="getImageUrl(project.cover)" :alt="project.title" class="project-detail-cover__img" />
      </div>
    </div>

    <section class="project-detail-content section">
      <div class="container project-detail-content__layout">

        <!-- 手機版浮動目錄按鈕 -->
        <div class="toc-float" :class="{ 'toc-float--open': tocOpen }">
          <button class="toc-float__toggle" @click="tocOpen = !tocOpen" aria-label="目錄">
            <i class="fa-solid fa-list"></i>
          </button>
          <div class="toc-float__panel">
            <p class="toc-float__title">目錄</p>
            <ul class="toc-float__list">
              <!-- 手機版浮動目錄 -->
              <li v-for="item in toc" :key="item.id">
                <a @click.prevent="scrollTo(item.id); tocOpen = false" href="#">{{ item.text }}</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 目錄列表 -->
        <aside class="toc-sidebar">
          <p class="toc-sidebar__title">目錄</p>
          <ul class="toc-sidebar__list">
            <!-- 側邊目錄 -->
            <li v-for="item in toc" :key="item.id" class="toc-sidebar__item">
              <a @click.prevent="scrollTo(item.id)" href="#" class="toc-sidebar__link" :class="{ 'toc-sidebar__link--active': activeId === item.id }">{{ item.text }}</a>
            </li>
          </ul>
        </aside>

        <div class="project-detail-content__body" ref="contentRef" v-html="project.content"></div>
      </div>
    </section>

    <section class="project-detail-nav section">
      <div class="container">
        <RouterLink to="/projects" class="btn btn--secondary">← 查看所有專案</RouterLink>
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
}

const onScroll = () => {
  if (!contentRef.value) return
  const headings = contentRef.value.querySelectorAll('h2, h3')
  let current = ''
  headings.forEach((h) => {
    if (h.getBoundingClientRect().top <= 300) {
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