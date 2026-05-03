<template>
  <div class="leadership-page">
    <section class="leadership-hero section">
      <div class="container leadership-hero__inner">
        <!-- Left: label + title + desc -->
        <div class="leadership-hero__left">
          <p class="leadership-hero__label">My Thoughts</p>
          <h1 class="leadership-hero__title">Leadership</h1>
          <p class="leadership-hero__desc">
            記錄我在設計管理路上真實發生的事：那些摸索過的方法論、踩過的決策、帶人時的觀察，以及在過程中慢慢長出來的反思。
          </p>
        </div>
        <!-- Right: filter tags -->
        <div class="leadership-hero__right">
          <p class="leadership-hero__filter-label">Filter by</p>
          <div class="leadership-hero__filters">
            <button
              v-for="filter in filters"
              :key="filter"
              class="leadership-hero__filter"
              :class="{ 'leadership-hero__filter--active': activeFilter === filter }"
              @click="activeFilter = filter"
            >
              {{ filter }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="leadership-list section">
      <div class="container">

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