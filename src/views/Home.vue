<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero section">
      <div class="container hero__inner">
        <div class="hero__content">
          <h1 class="hero__title">嗨，我是 Nomis！</h1>
          <p class="hero__subtitle">UIUX 設計師・前端工程師・設計主管</p>
          <p class="hero__desc">
            擅長以數據驅動設計決策，打造以使用者為中心的產品體驗。
            跨文化協作與跨部門溝通是我的強項。
          </p>
          <div class="hero__cta">
            <a href="/resume.pdf" target="_blank" class="btn btn--primary">下載履歷</a>
            <a href="https://www.linkedin.com/in/" target="_blank" class="btn btn--secondary">LinkedIn</a>
            <a href="mailto:your@email.com" class="btn btn--secondary">聯絡我</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 三個核心能力 -->
    <section class="features section">
      <div class="container features__grid">
        <div class="features__item">
          <h3 class="features__title">跨領域設計能力</h3>
          <p class="features__desc">
            橫跨 UIUX
            設計、前端切版與設計管理，能從使用者研究、視覺設計到程式實作一手包辦，確保設計落地不失真。
          </p>
        </div>
        <div class="features__item">
          <h3 class="features__title">數據驅動的設計決策</h3>
          <p class="features__desc">
            習慣以數據佐證設計方向，透過 A/B
            測試、使用者訪談與競品分析，持續優化產品體驗並創造可量化的成效。
          </p>
        </div>
        <div class="features__item">
          <h3 class="features__title">跨部門協作與領導</h3>
          <p class="features__desc">
            具備帶領設計團隊的實戰經驗，善於在產品、工程與商業目標之間建立共識，推動專案從 0 到 1
            順利落地。
          </p>
        </div>
      </div>
    </section>

    <!-- 作品集卡片 -->
    <section class="projects-preview section">
      <div class="container">
        <div class="projects-preview__grid">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
      </div>
    </section>

    <!-- Leadership 摘要 -->
    <section class="leadership-preview section">
      <div class="container leadership-preview__inner">
        <div class="leadership-preview__content">
          <p class="leadership-preview__label">Leadership</p>
          <h2 class="leadership-preview__title">設計領導力的實踐與反思</h2>
          <p class="leadership-preview__desc">
            從個人貢獻者到帶領團隊，我持續記錄在設計管理路上的觀察與學習。
            包含團隊管理心得、專案決策過程、帶人的方法論，以及個人成長反思。
          </p>
          <RouterLink to="/leadership" class="btn btn--primary">
            閱讀更多文章 →
          </RouterLink>
        </div>
        <div class="leadership-preview__articles">
          <div class="leadership-preview__article">
            <p class="leadership-preview__article-tag">帶團隊的方法論</p>
            <h4 class="leadership-preview__article-title">如何在設計評審中建立心理安全感</h4>
          </div>
          <div class="leadership-preview__article">
            <p class="leadership-preview__article-tag">專案決策過程</p>
            <h4 class="leadership-preview__article-title">當設計目標與商業目標衝突時，我怎麼做決定</h4>
          </div>
          <div class="leadership-preview__article">
            <p class="leadership-preview__article-tag">個人成長反思</p>
            <h4 class="leadership-preview__article-title">從設計師到設計主管：角色轉換的第一年</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- 我如何用專業技能貢獻 -->
    <section class="skills section">
      <div class="container">
        <p class="skills__label">How I Contribute</p>
        <h2 class="skills__title">我如何用專業技能貢獻</h2>
        <div class="skills__grid">
          <div v-for="skill in skills" :key="skill.title" class="skills__card">
            <h4 class="skills__card-title">{{ skill.title }}</h4>
            <ul class="skills__card-list">
              <li v-for="item in skill.items" :key="item">{{ item }}</li>
            </ul>
            <div class="skills__card-tags">
              <RouterLink v-for="tag in skill.tags" :key="tag.label" :to="tag.link" class="skills__card-tag">
                {{ tag.label }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 推薦信 -->
    <section class="testimonials section">
      <div class="container">
        <p class="testimonials__label">Recommendations</p>
        <h2 class="testimonials__title">他們這樣說</h2>
        <div class="testimonials__grid">
          <div class="testimonials__card">
            <p class="testimonials__card-title">執行力與溝通能力超乎預期，對回饋保持開放</p>
            <p class="testimonials__card-content">
              Nomis 是一位充滿熱情的 UIUX 設計師，以創新思維和快速適應新挑戰的能力著稱。
              她的執行速度與溝通品質持續超乎預期，是團隊中不可或缺的夥伴。
              對回饋始終保持開放，持續尋求改進，對團隊的成功貢獻良多。
            </p>
            <div class="testimonials__card-author">
              <!-- <div class="testimonials__card-avatar"></div> -->
              <img src="/images/general/avatar-chen.jpg" alt="陳大明" class="testimonials__card-avatar" />
              <div>
                <p class="testimonials__card-name">陳大明</p>
                <p class="testimonials__card-role">2024年6月・iOS 工程師・直接主管</p>
              </div>
            </div>
          </div>
          <div class="testimonials__card">
            <p class="testimonials__card-title">能理解並轉化使用者需求為直覺且美觀的設計</p>
            <p class="testimonials__card-content">
              與 Nomis 共事是非常愉快的經驗。她始終展現出理解並將使用者需求轉化為直覺且視覺吸引力設計的能力。
              她的創意和解決問題的技巧在應對專案挑戰時發揮了關鍵作用。
              支持性的個性與強大的溝通技巧營造了積極的協作環境，是可靠又具創新力的夥伴。
            </p>
            <div class="testimonials__card-author">
              <!-- <div class="testimonials__card-avatar"></div> -->
              <img src="/images/general/avatar-liao.jpg" alt="廖小華" class="testimonials__card-avatar" />
              <div>
                <p class="testimonials__card-name">廖小華</p>
                <p class="testimonials__card-role">2024年6月・產品經理・同團隊成員</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects.js'

const skills = [
  {
    title: 'UIUX 設計',
    items: ['使用者研究', '資訊架構', '互動設計', '視覺設計'],
    tags: [
      { label: '查看 UIUX 專案', link: '/projects?tag=UIUX' },
    ],
  },
  {
    title: '前端切版',
    items: ['Vue.js', 'HTML / CSS', 'RWD', 'SCSS'],
    tags: [
      { label: '查看切版專案', link: '/projects?tag=Frontend' },
    ],
  },
  {
    title: '設計策略',
    items: ['競品分析', 'A/B 測試', '數據分析', '設計系統'],
    tags: [
      { label: '查看相關專案', link: '/projects?tag=Growth Design' },
    ],
  },
  {
    title: '設計領導',
    items: ['團隊管理', '跨部門協作', '設計評審', '人才培育'],
    tags: [
      { label: '閱讀 Leadership 文章', link: '/leadership' },
    ],
  },
  {
    title: 'AI 產品設計',
    items: ['AI 框架制定', 'AI 互動設計', '信任設計', 'Prompt 設計'],
    tags: [
      { label: '查看 AI 專案', link: '/projects?tag=AI' },
    ],
  },
  {
    title: '溝通與協作',
    items: ['利害關係人溝通', '設計提案', '跨文化協作', '衝突處理'],
    tags: [
      { label: '閱讀 Leadership 文章', link: '/leadership' },
    ],
  },
  {
    title: '使用者研究',
    items: ['使用者訪談', '易用性測試', '問卷設計', '研究報告'],
    tags: [
      { label: '查看研究相關專案', link: '/projects?tag=Research' },
    ],
  },
  {
    title: '數據驅動設計',
    items: ['數據判讀', 'A/B 測試規劃', '轉換率優化', '成效追蹤'],
    tags: [
      { label: '查看相關專案', link: '/projects?tag=A/B Testing' },
    ],
  },
  {
    title: '成長心態',
    items: ['快速學習', '主動解決問題', '接受回饋', '持續優化'],
    tags: [
      { label: '閱讀我的反思文章', link: '/leadership' },
    ],
  },
]
</script>