<template>
  <RouterLink :to="`/projects/${project.id}`" class="project-card-h">
    <div class="project-card-h__cover">
      <img :src="getImageUrl(project.cover)" :alt="project.title" />
    </div>
    <div class="project-card-h__body">
      <div class="project-card-h__hashtags">
        <span v-for="tag in project.hashtags" :key="tag" class="project-card-h__hashtag">
          #{{ tag }}
        </span>
      </div>
      <h3 class="project-card-h__title">{{ project.title }}</h3>
      <p class="project-card-h__desc">{{ project.description }}</p>
      <div class="project-card-h__tags">
        <span v-for="tag in project.tags" :key="tag" class="project-card-h__tag">
          {{ tag }}
        </span>
      </div>
      <div class="project-card-h__cta">查看專案 →</div>
    </div>
  </RouterLink>
</template>

<script setup>
import { getImageUrl } from '@/utils/image.js'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>