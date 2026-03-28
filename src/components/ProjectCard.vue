<template>
  <RouterLink :to="`/projects/${project.id}`" class="project-card">
    <div class="project-card__cover">
      <img :src="project.cover" :alt="project.title" />
    </div>
    <div class="project-card__body">
      <div class="project-card__hashtags">
        <span v-for="tag in project.hashtags" :key="tag" class="project-card__hashtag">
          #{{ tag }}
        </span>
      </div>
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p class="project-card__desc">{{ project.description }}</p>
      <div class="project-card__tags">
        <span v-for="tag in project.tags" :key="tag" class="project-card__tag">
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="project-card__cta">
      查看專案 →
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>