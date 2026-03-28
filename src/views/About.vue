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
          <img src="/images/general/avatar.jpg" alt="Nomis" class="about-hero__avatar" />
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
      <div class="container about-story__inner">
        <div class="about-story__content">
          <p class="about-story__label">My Story</p>
          <h2 class="about-story__title">我如何成為 UIUX 設計師暨設計主管</h2>
          <p class="about-story__desc">
            我的設計之路並非一帆風順。最初從視覺設計出發，因為對使用者行為的好奇心，逐漸走向 UIUX 設計。
            在累積了幾年的實戰經驗後，開始接觸設計管理，學習如何讓整個團隊的設計能力一起成長。
          </p>
          <p class="about-story__desc">
            這段旅程讓我深刻體會到：設計師最大的價值，不只是做出好看的介面，
            而是能夠在複雜的商業環境中，找到設計能夠發揮影響力的切入點。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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
</script>