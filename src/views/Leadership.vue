<template>
  <div class="leadership-page">
    <section class="leadership-hero section">
      <div class="container">
        <p class="leadership-hero__label">My Thoughts</p>
        <h1 class="leadership-hero__title">Leadership</h1>
        <p class="leadership-hero__desc">
          記錄我在設計管理路上的觀察與學習，包含團隊管理心得、專案決策過程、帶人的方法論，以及個人成長反思。
        </p>
      </div>
    </section>

    <section class="leadership-list section">
      <div class="container">
        <!-- Filter Tags -->
        <div class="leadership-list__filters">
          <button v-for="filter in filters" :key="filter" class="leadership-list__filter" :class="{ 'leadership-list__filter--active': activeFilter === filter }" @click="activeFilter = filter">
            {{ filter }}
          </button>
        </div>

        <!-- 文章卡片 -->
        <div class="leadership-list__grid">
          <ArticleCard v-for="article in filteredArticles" :key="article.id" :article="article" />
        </div>

        <!-- 沒有結果 -->
        <p v-if="filteredArticles.length === 0" class="leadership-list__empty">
          目前沒有符合此分類的文章。
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArticleCard from '@/components/ArticleCard.vue'
import { articles } from '@/data/articles.js'

const filters = ['All', ...new Set(articles.flatMap((a) => a.tags))]
const activeFilter = ref('All')

const filteredArticles = computed(() => {
  if (activeFilter.value === 'All') return articles
  return articles.filter((a) => a.tags.includes(activeFilter.value))
})
</script>