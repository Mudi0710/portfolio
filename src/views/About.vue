<template>
  <div class="about-page">
    <!-- 個人介紹 -->
    <section class="about-hero section">
      <div class="container about-hero__inner">
        <div class="about-hero__content">
          <p class="about-hero__label">About Me</p>
          <h1 class="about-hero__title">嗨，我是 Nomis！</h1>
          <p class="about-hero__desc">
            我是一位橫跨 UIUX 設計、前端切版與設計管理的複合型設計師。
            我相信好的設計不只是好看，而是能解決真實問題、創造可量化的商業價值。
          </p>
          <p class="about-hero__desc">
            目前專注於 AI 產品設計領域，對於如何在 AI 時代設計出讓使用者信任、願意使用的產品體驗，有深入的研究與實踐。
          </p>
        </div>
        <div class="about-hero__image">
          <img :src="getImageUrl('/images/general/avatar.jpg')" alt="Nomis" class="about-hero__avatar" />
        </div>
      </div>
    </section>

    <!-- 工作經驗 -->
    <section class="about-experience section">
      <div class="container">
        <h2 class="about-experience__title">工作經驗</h2>
        <div class="about-experience__list">
          <div v-for="exp in experiences" :key="exp.company" class="about-experience__item">
            <div class="about-experience__left">
              <p class="about-experience__period">{{ exp.period }}</p>
            </div>
            <div class="about-experience__right">
              <h3 class="about-experience__role">{{ exp.role }}</h3>
              <p class="about-experience__company">{{ exp.company }}</p>
              <p class="about-experience__desc">{{ exp.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 成為設計師的故事 -->
    <section class="about-story section">
      <StoryCanvas />
      <div class="container">
        <p class="about-story__label">My Story</p>
        <h2 class="about-story__title">我如何成為 UIUX 設計師暨設計主管</h2>
        <p class="about-story__intro">
          我的設計之路從視覺出發，一路走向 UIUX、前端，再到帶領設計團隊。
          每個階段都讓我對「設計」這件事有更深的理解。
        </p>

        <div class="about-story__timeline">
          <div class="about-story__item" v-for="story in stories" :key="story.title">
            <div class="about-story__image">
              <img :src="story.image" :alt="story.title" />
            </div>
            <div class="about-story__content">
              <p class="about-story__period">{{ story.period }}</p>
              <h3 class="about-story__role">{{ story.title }}</h3>
              <div class="about-story__tags">
                <span v-for="tag in story.tags" :key="tag" class="about-story__tag">{{ tag }}</span>
              </div>
              <p class="about-story__desc">{{ story.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { getImageUrl } from '@/utils/image.js'
import StoryCanvas from '@/components/StoryCanvas.vue'

const experiences = [
  {
    period: '2023 - 現在',
    role: 'UIUX 設計主管',
    company: '某某科技公司',
    desc: '帶領設計團隊，負責產品設計策略制定、設計系統建立與跨部門協作。',
  },
  {
    period: '2021 - 2023',
    role: 'UIUX 設計師',
    company: 'MixerBox',
    desc: '負責 AI 產品的 UIUX 設計，主導多項 A/B 測試，成功提升訂閱轉換率 32%+。',
  },
  {
    period: '2019 - 2021',
    role: '前端工程師暨視覺設計師',
    company: '某某設計公司',
    desc: '負責網站前端切版與視覺設計，累積跨領域的設計與開發實務經驗。',
  },
]

const stories = [
  {
    period: '2016 - 2018',
    title: '視覺設計師',
    image: getImageUrl('/images/general/story/story-1.jpg'),
    tags: ['品牌視覺', '平面設計', '美感養成'],
    desc: '從最基礎的視覺語言出發，學會如何用顏色、字型、排版傳達品牌個性。這個階段讓我建立了扎實的美感基礎，也讓我開始對「設計如何影響使用者感受」產生好奇。',
  },
  {
    period: '2018 - 2020',
    title: 'UI 設計師',
    image: getImageUrl('/images/general/story/story-2.jpg'),
    tags: ['介面設計', '設計系統', '跨部門協作'],
    desc: '開始接觸數位產品設計，學習如何在螢幕上建立清晰的視覺層次。與工程師合作的過程中，我意識到設計不只是好看，更要能被實作，這驅動我學習前端切版。',
  },
  {
    period: '2020 - 2022',
    title: 'UIUX 設計師',
    image: getImageUrl('/images/general/story/story-3.jpg'),
    tags: ['使用者研究', 'A/B 測試', '數據驅動設計'],
    desc: '真正走進使用者的世界。透過訪談、測試、數據分析來驗證設計決策，讓我理解「好設計」的定義不是設計師說了算，而是使用者用腳投票的結果。',
  },
  {
    period: '2022 - 現在',
    title: '設計主管',
    image: getImageUrl('/images/general/story/story-4.jpg'),
    tags: ['團隊管理', '設計策略', '跨部門影響力'],
    desc: '角色轉換讓我重新定義「貢獻」的意義。從做好一個設計，到讓整個團隊都能做好設計。管理是一門全新的學問，但也是我目前覺得最有意義的挑戰。',
  },
]
</script>