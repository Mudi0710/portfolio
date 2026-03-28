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
      <div class="container article-detail-content__inner">
        <div class="article-detail-content__body" v-html="article.content"></div>
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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { articles } from '@/data/articles.js'
import { getImageUrl } from '@/utils/image.js'

const route = useRoute()
const article = computed(() => articles.find((a) => a.id === route.params.id))
</script>