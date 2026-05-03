<template>
  <div v-if="article" class="article-detail">

    <!-- Hero -->
    <section class="article-detail-hero section">
      <div class="container">
        <RouterLink to="/leadership" class="article-detail-hero__back">← 返回 Leadership</RouterLink>
        <div class="article-detail-hero__hashtags">
          <span v-for="tag in article.hashtags" :key="tag" class="article-detail-hero__hashtag">#{{ tag }}</span>
        </div>
        <h1 class="article-detail-hero__title">{{ article.title }}</h1>
        <p class="article-detail-hero__desc">{{ article.description }}</p>
        <p class="article-detail-hero__date">{{ article.date }}</p>
      </div>
    </section>

    <!-- Cover image -->
    <div class="article-detail-cover">
      <div class="container">
        <img :src="getImageUrl(article.cover)" :alt="article.title" class="article-detail-cover__img" />
      </div>
    </div>

    <!-- Content + Right Sidebar -->
    <section class="article-detail-content section">
      <div class="container article-detail-content__layout">

        <!-- Main content body (LEFT) -->
        <div class="article-detail-content__body" ref="contentRef" v-html="article.content"></div>

        <!-- Right sidebar: TOC + Contact -->
        <aside class="article-toc-sidebar">
          <!-- TOC -->
          <div class="article-toc-sidebar__toc">
            <p class="article-toc-sidebar__title">目錄</p>
            <ul class="article-toc-sidebar__list">
              <li
                v-for="item in toc"
                :key="item.id"
                class="article-toc-sidebar__item"
                :class="{ 'article-toc-sidebar__item--h3': item.level === 'H3' }"
              >
                <a
                  @click.prevent="scrollTo(item.id)"
                  href="#"
                  class="article-toc-sidebar__link"
                  :class="{ 'article-toc-sidebar__link--active': activeId === item.id }"
                >{{ item.text }}</a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="article-toc-sidebar__contact">
            <p class="article-toc-sidebar__contact-title">Contact</p>
            <div class="article-toc-sidebar__contact-links">
              <a href="mailto:nomis820710@gmail.com" class="article-toc-sidebar__contact-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                nomis820710@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/nomis-yang/" target="_blank" rel="noopener noreferrer" class="article-toc-sidebar__contact-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn ↗
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Mobile floating TOC -->
    <div class="article-toc-float" :class="{ 'article-toc-float--open': tocOpen }">
      <button class="article-toc-float__toggle" @click="tocOpen = !tocOpen" aria-label="目錄">
        <i class="fa-solid fa-list"></i>
      </button>
      <div class="article-toc-float__panel">
        <p class="article-toc-float__title">目錄</p>
        <ul class="article-toc-float__list">
          <li
            v-for="item in toc"
            :key="item.id"
            :class="{ 'article-toc-float__item--h3': item.level === 'H3' }"
          >
            <a @click.prevent="scrollTo(item.id); tocOpen = false" href="#">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom nav: back + prev / next -->
    <section class="article-detail-nav section">
      <div class="container">
        <div class="article-detail-nav__inner">
          <RouterLink to="/leadership" class="btn btn--secondary article-detail-nav__back">
            ← 查看所有文章
          </RouterLink>
          <div class="article-detail-nav__arrows">
            <RouterLink
              v-if="prevArticle"
              :to="`/leadership/${prevArticle.id}`"
              class="article-detail-nav__arrow"
            >
              <span class="article-detail-nav__arrow-dir">← 上一篇</span>
              <span class="article-detail-nav__arrow-title">{{ prevArticle.title }}</span>
            </RouterLink>
            <RouterLink
              v-if="nextArticle"
              :to="`/leadership/${nextArticle.id}`"
              class="article-detail-nav__arrow article-detail-nav__arrow--next"
            >
              <span class="article-detail-nav__arrow-dir">下一篇 →</span>
              <span class="article-detail-nav__arrow-title">{{ nextArticle.title }}</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

  </div>

  <div v-else class="article-detail-notfound section">
    <div class="container">
      <h1>找不到此文章</h1>
      <RouterLink to="/leadership" class="btn btn--primary">返回 Leadership</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { articles } from '@/data/articles.js'
import { getImageUrl } from '@/utils/image.js'

const route = useRoute()
const article = computed(() => articles.find((a) => a.id === route.params.id))

// Prev / Next
const currentIndex = computed(() => articles.findIndex((a) => a.id === route.params.id))
const prevArticle = computed(() => (currentIndex.value > 0 ? articles[currentIndex.value - 1] : null))
const nextArticle = computed(() => (currentIndex.value < articles.length - 1 ? articles[currentIndex.value + 1] : null))

// 目錄
const toc = ref([])
const activeId = ref('')
const contentRef = ref(null)
const tocOpen = ref(false)

const buildToc = () => {
  if (!contentRef.value) return
  const headings = contentRef.value.querySelectorAll('h2, h3')
  toc.value = Array.from(headings).map((h, i) => {
    const id = `article-heading-${i}`
    h.id = id
    return { id, text: h.textContent, level: h.tagName }
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

watch(article, () => {
  nextTick(() => buildToc())
})
</script>
