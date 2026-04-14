<template>
  <div v-if="article" class="article-detail">
    <!-- Hero -->
    <section class="article-detail-hero section">
      <div class="container">
        <RouterLink to="/leadership" class="article-detail-hero__back">
          ← 返回 Leadership
        </RouterLink>
        <div class="article-detail-hero__hashtags">
          <span v-for="tag in article.hashtags" :key="tag" class="article-detail-hero__hashtag">
            #{{ tag }}
          </span>
        </div>
        <h1 class="article-detail-hero__title">{{ article.title }}</h1>
        <p class="article-detail-hero__desc">{{ article.description }}</p>
        <p class="article-detail-hero__date">{{ article.date }}</p>
      </div>
    </section>

    <!-- 封面圖 -->
    <div class="article-detail-cover">
      <div class="container">
        <img :src="getImageUrl(article.cover)" :alt="article.title" class="article-detail-cover__img" />
      </div>
    </div>

    <!-- 內容 -->
    <section class="article-detail-content section">
      <div class="container article-detail-content__layout">

        <!-- 手機版浮動目錄 -->
        <div class="article-toc-float" :class="{ 'article-toc-float--open': tocOpen }">
          <button class="article-toc-float__toggle" @click="tocOpen = !tocOpen" aria-label="目錄">
            <i class="fa-solid fa-list"></i>
          </button>
          <div class="article-toc-float__panel">
            <p class="article-toc-float__title">目錄</p>
            <ul class="article-toc-float__list">
              <li v-for="item in toc" :key="item.id">
                <a @click.prevent="scrollTo(item.id); tocOpen = false" href="#">{{ item.text }}</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 桌機版側邊目錄 -->
        <aside class="article-toc-sidebar">
          <p class="article-toc-sidebar__title">目錄</p>
          <ul class="article-toc-sidebar__list">
            <li v-for="item in toc" :key="item.id">
              <a @click.prevent="scrollTo(item.id)" href="#" class="article-toc-sidebar__link" :class="{ 'article-toc-sidebar__link--active': activeId === item.id }">{{ item.text }}</a>
            </li>
          </ul>
        </aside>

        <div class="article-detail-content__body" ref="contentRef" v-html="article.content"></div>
      </div>
    </section>

    <!-- 返回 -->
    <section class="article-detail-nav section">
      <div class="container">
        <RouterLink to="/leadership" class="btn btn--secondary">
          ← 查看所有文章
        </RouterLink>
      </div>
    </section>
  </div>

  <!-- 找不到文章 -->
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
    if (h.getBoundingClientRect().top <= 120) {
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