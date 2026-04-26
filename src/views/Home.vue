<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero section">
      <HeroCanvas />
      <div class="container hero__inner">
        <div class="hero__content">
          <h1 class="hero__title">嗨，我是 Nomis！</h1>
          <p class="hero__subtitle">UIUX 設計師・前端切版・設計主管</p>
          <p class="hero__desc">
            我相信設計師最大的競爭力，是跨越專業邊界的能力。<br />
            橫跨 UIUX、前端與設計管理，擁有人資與社會心理學背景的我，<br />
            習慣用數據驗證設計決策，也具備在資源不足的情況下，仍能獨立推進專案、讓成果落地的能力。
          </p>
          <div class="hero__cta">
            <a href="/portfolio/resume.pdf" target="_blank" class="btn btn--primary">下載履歷</a>
            <a href="https://www.linkedin.com/in/nomis-yang/" target="_blank" class="btn btn--secondary">LinkedIn</a>
            <a href="mailto:nomis820710@gmail.com" class="btn btn--secondary">聯絡我</a>
          </div>
        </div>
        <div class="hero__photo">
          <img src="/images/general/hero-photo.jpg" alt="Nomis Yang" />
        </div>
      </div>
    </section>

    <!-- 三個核心能力 -->
    <section class="features section">
      <div class="container features__grid">
        <div class="features__item">
          <h3 class="features__title">跨領域設計能力</h3>
          <p class="features__desc">
            橫跨 UIUX 設計、前端切版與設計管理，能從使用者研究、視覺設計到程式實作一手包辦。曾在 PM 幾乎缺席的情況下獨立完成 UX 研究、UI 設計、Prototype 與切版，確保設計落地不失真。
          </p>
        </div>
        <div class="features__item">
          <h3 class="features__title">數據驅動的設計決策</h3>
          <p class="features__desc">
            習慣在設計提案前先問「這解決了什麼問題」、上線後追問「它真的有效嗎」。曾透過使用者訪談發現需求被錯誤定義，主動將產品從「心智圖系統」重新定位為陪伴完整銷售旅程的數位報告工具。
          </p>
        </div>
        <div class="features__item">
          <h3 class="features__title">跨部門協作與領導</h3>
          <p class="features__desc">
            具備帶領設計團隊的實戰經驗，善於在產品、工程與商業目標之間建立共識。曾在兩週內拆解跨部門任務、同步推進四條工作線，帶領團隊準時交付一個 PM 規劃了一個月的專案。
          </p>
        </div>
      </div>
    </section>

    <!-- 作品集卡片 -->
    <section class="projects-preview section">
      <div class="container">
        <div class="projects-preview__grid">
          <ProjectCard v-for="project in projects.slice(0, 3)" :key="project.id" :project="project" />
        </div>
        <div class="projects-preview__cta">
          <RouterLink to="/projects" class="btn btn--ghost">查看全部專案 →</RouterLink>
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
            當上主管之後，我發現設計能力只是起點。這裡記錄的，是我如何用制度取代靠感覺、
            用數據取代靠記憶、在資源不足的情況下，仍然讓團隊往前走的真實歷程。
          </p>
          <RouterLink to="/leadership" class="btn btn--primary">
            閱讀更多文章 →
          </RouterLink>
        </div>
        <div class="leadership-preview__articles">
          <RouterLink to="/leadership/impossible-deadline-two-weeks" class="leadership-preview__article">
            <p class="leadership-preview__article-tag">專案決策過程</p>
            <h4 class="leadership-preview__article-title">我們如何在兩週內，完成一個不可能的任務</h4>
            <p class="leadership-preview__article-cta">閱讀文章 →</p>
          </RouterLink>
          <RouterLink to="/leadership/design-request-collaboration-guide" class="leadership-preview__article">
            <p class="leadership-preview__article-tag">帶團隊的方法論</p>
            <h4 class="leadership-preview__article-title">當全公司都把設計師當通靈師，我決定立一條規矩</h4>
            <p class="leadership-preview__article-cta">閱讀文章 →</p>
          </RouterLink>
          <RouterLink to="/leadership/design-team-okr-performance-system" class="leadership-preview__article">
            <p class="leadership-preview__article-tag">設計團隊管理心得</p>
            <h4 class="leadership-preview__article-title">當 KPI 無法衡量設計師：我如何為設計部打造一套 OKR 績效系統</h4>
            <p class="leadership-preview__article-cta">閱讀文章 →</p>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 我如何用專業技能貢獻 -->
    <section class="skills section">
      <div class="container">
        <p class="skills__label">Contribution</p>
        <h2 class="skills__title">我能為你的團隊帶來什麼</h2>
        <div class="skills__bento">

          <!-- 主軸：研究驅動的產品設計 -->
          <div class="skills__bento-card skills__bento-card--hero">
            <div class="skills__bento-card-inner">
              <p class="skills__bento-eyebrow">核心能力</p>
              <h3 class="skills__bento-title">研究驅動的產品設計</h3>
              <p class="skills__bento-desc">從使用者訪談、數據分析到最終設計決策，我習慣讓證據說話，而不是靠直覺猜測使用者要什麼。</p>
              <ul class="skills__bento-list">
                <li>使用者訪談 & 易用性測試</li>
                <li>數據判讀 & A/B 測試規劃</li>
                <li>競品分析 & 研究報告</li>
                <li>從洞察到設計決策的完整流程</li>
              </ul>
              <div class="skills__bento-tags">
                <RouterLink to="/projects?tag=UIUX" class="skills__card-tag">查看 UIUX 專案 →</RouterLink>
                <RouterLink to="/projects?tag=Research" class="skills__card-tag">查看研究專案 →</RouterLink>
              </div>
            </div>
          </div>

          <!-- 第二層左：跨職能執行力 -->
          <div class="skills__bento-card skills__bento-card--medium skills__bento-card--medium-wide">
            <div class="skills__bento-card-inner">
              <p class="skills__bento-eyebrow">執行廣度</p>
              <h3 class="skills__bento-title">跨職能執行力</h3>
              <p class="skills__bento-desc">從 UX 研究、UI 設計到前端切版，能獨立一手包辦，確保設計落地不失真。</p>
              <ul class="skills__bento-list">
                <li>資訊架構 & 互動設計</li>
                <li>Vue.js / SCSS / RWD 切版</li>
                <li>Prototype 製作與驗證</li>
              </ul>
              <div class="skills__bento-tags">
                <RouterLink to="/projects?tag=Frontend" class="skills__card-tag">查看切版專案 →</RouterLink>
              </div>
            </div>
          </div>

          <!-- 第二層右：設計領導與制度建立 -->
          <div class="skills__bento-card skills__bento-card--medium skills__bento-card--medium-narrow">
            <div class="skills__bento-card-inner">
              <p class="skills__bento-eyebrow">領導深度</p>
              <h3 class="skills__bento-title">設計領導與制度建立</h3>
              <p class="skills__bento-desc">不只帶人做事，更用制度取代靠感覺，讓設計團隊的運作可被量化、可被傳承。</p>
              <ul class="skills__bento-list">
                <li>OKR 績效系統設計與落地</li>
                <li>設計師職能模型建立</li>
                <li>跨部門協作流程制度化</li>
              </ul>
              <div class="skills__bento-tags">
                <RouterLink to="/leadership" class="skills__card-tag">閱讀 Leadership 文章 →</RouterLink>
              </div>
            </div>
          </div>

          <!-- 第三層：三個小卡 -->
          <div class="skills__bento-card skills__bento-card--small">
            <div class="skills__bento-card-inner">
              <p class="skills__bento-eyebrow">工具應用</p>
              <h3 class="skills__bento-title">AI 工作流</h3>
              <p class="skills__bento-desc">曾獨立以 AI 工具完成傳統需要整個製作團隊的動畫專案，成本降低 99.7%。</p>
              <div class="skills__bento-tags">
                <RouterLink to="/projects?tag=AI" class="skills__card-tag">查看 AI 專案 →</RouterLink>
              </div>
            </div>
          </div>

          <div class="skills__bento-card skills__bento-card--small">
            <div class="skills__bento-card-inner">
              <p class="skills__bento-eyebrow">溝通能力</p>
              <h3 class="skills__bento-title">跨部門協作</h3>
              <p class="skills__bento-desc">善於在產品、工程與商業目標之間建立共識，推動設計決策被真正落地執行。</p>
              <div class="skills__bento-tags">
                <RouterLink to="/projects?tag=Cross-functional" class="skills__card-tag">查看相關專案 →</RouterLink>
              </div>
            </div>
          </div>

          <div class="skills__bento-card skills__bento-card--small">
            <div class="skills__bento-card-inner">
              <p class="skills__bento-eyebrow">持續成長</p>
              <h3 class="skills__bento-title">自驅學習</h3>
              <p class="skills__bento-desc">主動研發 SCSS 工具、建立知識文件、在限制中找到更聰明的解法。</p>
              <div class="skills__bento-tags">
                <RouterLink to="/projects/osm-rwd-scss-function" class="skills__card-tag">查看實戰專案 →</RouterLink>
              </div>
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
            <!-- <p class="testimonials__card-title">兼具創意與執行力，能讓想法確實落地的設計夥伴</p> -->
            <p class="testimonials__card-content">
              Nomis 是一位充滿熱情的 UIUX 設計師，以創新思維和快速適應新挑戰的能力著稱。 她的執行速度與溝通品質持續超乎預期，是團隊中不可或缺的夥伴。 對回饋始終保持開放，持續尋求改進，對團隊的成功貢獻良多。
            </p>
            <!-- <p class="testimonials__card-content">
              在 Samebest 共事期間，Nomis 展現出強大的學習能力與靈活應變力，面對複雜的專案限制，他總能在框架內找到具創意且可執行的解法。
              他主導的產品行銷專案中，以心理測驗結合宇宙冒險世界觀的設計，有效提升了使用者的接觸意願，思考嚴謹、完成度出色，最終為產品帶來實際的行銷成效。
              在團隊協作上，他善於整合多方想法、建立共識，是能帶動團隊往目標前進的關鍵角色。他也不吝將所學整理為知識分享，積極建立團隊互助共學的文化。
              Nomis 對交付品質的承諾一向準時且可靠，我真心推薦他給任何重視執行力與持續成長的團隊。
            </p> -->
            <div class="testimonials__card-author">
              <!-- <div class="testimonials__card-avatar"></div> -->
              <img src="/images/general/avatar-chen.jpg" alt="陳大明" class="testimonials__card-avatar" />
              <!-- <img src="/images/general/avatar-chen.jpg" alt="Enn Tang" class="testimonials__card-avatar" /> -->
              <div>
                <p class="testimonials__card-name">陳大明</p>
                <!-- <p class="testimonials__card-name">Enn Tang</p> -->
                <p class="testimonials__card-role">2024 年 5 月・iOS 工程師・直接主管</p>
                <!-- <p class="testimonials__card-role">2024 年 5 月・Design Lead・直接主管</p> -->
              </div>
            </div>
          </div>
          <div class="testimonials__card">
            <p class="testimonials__card-title">能理解並轉化使用者需求為直覺且美觀的設計</p>
            <p class="testimonials__card-content">
              與 Nomis 共事是非常愉快的經驗。他始終展現出理解並將使用者需求轉化為直覺且視覺吸引力設計的能力。
              他的創意和解決問題的技巧在應對專案挑戰時發揮了關鍵作用。
              支持性的個性與強大的溝通技巧營造了積極的協作環境，是可靠又具創新力的夥伴。
            </p>
            <div class="testimonials__card-author">
              <!-- <div class="testimonials__card-avatar"></div> -->
              <img src="/images/general/avatar-liao.jpg" alt="廖小華" class="testimonials__card-avatar" />
              <div>
                <p class="testimonials__card-name">廖小華</p>
                <p class="testimonials__card-role">2024 年 6 月・產品經理・同團隊成員</p>
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
import HeroCanvas from '@/components/HeroCanvas.vue'
</script>