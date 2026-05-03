<template>
  <RouterLink :to="`/projects/${project.id}`" class="project-card-v">
    <!-- Category hashtag -->
    <div class="project-card-v__hashtags">
      <span v-for="tag in project.hashtags" :key="tag" class="project-card-v__hashtag">
        ✦ {{ tag }}
      </span>
    </div>

    <!-- Cover image -->
    <div class="project-card-v__cover">
      <img :src="getImageUrl(project.cover)" :alt="project.title" loading="lazy" />
      <div class="project-card-v__overlay">
        <span class="project-card-v__cta">查看案例 →</span>
      </div>
    </div>

    <!-- Body -->
    <div class="project-card-v__body">
      <!-- Tags -->
      <div class="project-card-v__tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>

      <!-- Title -->
      <h3 class="project-card-v__title">{{ project.title }}</h3>

      <!-- Description -->
      <p class="project-card-v__desc">{{ project.description }}</p>

      <!-- Metrics -->
      <div v-if="project.metrics && project.metrics.length" class="project-card-v__metrics">
        <div v-for="m in project.metrics" :key="m.label" class="project-card-v__metric">
          <span class="project-card-v__metric-value">{{ m.value }}</span>
          <span class="project-card-v__metric-label">{{ m.label }}</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { getImageUrl } from '@/utils/image.js'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
