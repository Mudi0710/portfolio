<template>
  <div class="projects-page">
    <section class="projects-hero section">
      <div class="container projects-hero__inner">
        <!-- Left: label + title + desc -->
        <div class="projects-hero__left">
          <p class="projects-hero__label">My Work</p>
          <h1 class="projects-hero__title">Projects</h1>
          <p class="projects-hero__desc">
            橫跨 UIUX 設計、前端切版與 AI 產品設計的實戰專案，每個專案都有可量化的成效與完整的設計思考過程。
          </p>
        </div>
        <!-- Right: filter tags -->
        <div class="projects-hero__right">
          <p class="projects-hero__filter-label">Filter by</p>
          <div class="projects-hero__filters">
            <button
              v-for="filter in filters"
              :key="filter"
              class="projects-hero__filter"
              :class="{ 'projects-hero__filter--active': activeFilter === filter }"
              @click="activeFilter = filter"
            >
              {{ filter }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="projects-list section">
      <div class="container">
        <!-- 專案卡片 -->
        <div class="projects-list__grid">
          <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
        </div>

        <!-- 沒有結果 -->
        <p v-if="filteredProjects.length === 0" class="projects-list__empty">
          目前沒有符合此分類的專案。
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects.js'

const route = useRoute()
const filters = ['All', ...new Set(projects.flatMap((p) => p.tags))]
const activeFilter = ref('All')

onMounted(() => {
  const tag = route.query.tag
  if (tag && filters.includes(tag)) {
    activeFilter.value = tag
  }
})

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter((p) => p.tags.includes(activeFilter.value))
})
</script>