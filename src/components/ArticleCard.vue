<template>
  <RouterLink :to="`/leadership/${article.id}`" class="article-card">
    <div class="article-card__cover">
      <img :src="getImageUrl(article.cover)" :alt="article.title" />
    </div>
    <div class="article-card__body">
      <div class="article-card__hashtags">
        <span v-for="tag in article.hashtags" :key="tag" class="article-card__hashtag">
          #{{ tag }}
        </span>
      </div>
      <h3 class="article-card__title">{{ article.title }}</h3>
      <p class="article-card__desc">{{ article.description }}</p>
      <p class="article-card__date">{{ article.date }}</p>
    </div>
    <div class="article-card__cta">
      閱讀文章 →
    </div>
  </RouterLink>
</template>

<script setup>
import { getImageUrl } from '@/utils/image.js'

defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>