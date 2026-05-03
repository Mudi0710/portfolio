<template>
  <div class="home">

    <!-- ═══ HERO ═══ -->
    <section class="hero">
      <div class="hero__bg-text" aria-hidden="true">DESIGNER</div>
      <div class="container hero__inner">
        <div class="hero__content">
          <p class="hero__eyebrow">UIUX Designer · Web Slicing · Cross-functional</p>
          <h1 class="hero__title">
            <span class="hero__title-line">Hi, I'm</span>
            <span class="hero__title-name">{{ typedText }}<em class="hero__title-dot" :class="{ 'hero__title-dot--visible': dotVisible }">.</em><span class="hero__cursor" :class="{ 'hero__cursor--hidden': cursorDone }" aria-hidden="true">|</span></span>
          </h1>
          <p class="hero__desc">
            橫跨 UIUX、前端與設計策略的複合型設計師。<br />
            我用數據驗證設計決策，也能在資源不足的情況下，<br />
            獨立推進專案，讓成果落地。
          </p>
          <div class="hero__cta">
            <RouterLink to="/projects" class="btn btn--primary">View Work</RouterLink>
            <RouterLink to="/about" class="btn btn--ghost">About Me</RouterLink>
            <a href="https://www.linkedin.com/in/nomis-yang/" target="_blank" class="btn">LinkedIn</a>
          </div>
          <div class="hero__stats">
            <div class="hero__stat">
              <span class="hero__stat-num">3+</span>
              <span class="hero__stat-label">Years UIUX Experience</span>
            </div>
            <div class="hero__stat">
              <span class="hero__stat-num">6+</span>
              <span class="hero__stat-label">0-to-1 Projects</span>
            </div>
            <div class="hero__stat">
              <span class="hero__stat-num">80%</span>
              <span class="hero__stat-label">CS Reduction</span>
            </div>
          </div>
        </div>
        <div class="hero__photo">
          <div class="hero__photo-frame">
            <img src="/images/general/hero-photo.jpg" alt="Nomis Yang" />
            <div class="hero__photo-tag">
              <span>✦</span> UIUX · Research · Frontend
            </div>
          </div>
        </div>
      </div>
      <div class="hero__scroll-hint">
        <span>Scroll</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>

    <!-- ═══ PROJECTS PREVIEW ═══ -->
    <section class="projects-preview section">
      <div class="container">
        <div class="projects-preview__top">
          <div class="section__header">
            <p class="section__label">Selected Work</p>
            <h2 class="section__title">Projects</h2>
          </div>
          <RouterLink to="/projects" class="btn btn--ghost projects-preview__all-btn">View All →</RouterLink>
        </div>
        <div class="projects-grid">
          <RouterLink
            v-for="(project, index) in featuredProjects"
            :key="project.id"
            :to="`/projects/${project.id}`"
            class="project-card"
            :class="{ 'project-card--wide': index === 2 }"
          >
            <div class="project-card__img">
              <img :src="getImageUrl(project.cover)" :alt="project.title" loading="lazy" />
              <div class="project-card__overlay">
                <span class="project-card__cta-text">View Case Study →</span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="project-card__tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <h3 class="project-card__title">{{ project.title }}</h3>
              <p class="project-card__desc">{{ project.description }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══ SKILLS / CONTRIBUTION ═══ -->
    <section class="skills section">
      <div class="container">
        <div class="section__header">
          <p class="section__label">Contribution</p>
          <h2 class="section__title">我能為你的團隊帶來什麼</h2>
        </div>
        <div class="bento">

          <!-- 主卡：研究驅動 -->
          <div class="bento__card bento__card--hero">
            <div class="bento__eyebrow">核心能力</div>
            <h3 class="bento__title">研究驅動的產品設計</h3>
            <p class="bento__desc">從使用者訪談、數據分析到最終設計決策，讓證據說話，而不是靠直覺猜測使用者要什麼。</p>
            <ul class="bento__list">
              <li>使用者訪談 &amp; 易用性測試</li>
              <li>數據判讀 &amp; A/B 測試規劃</li>
              <li>競品分析 &amp; 研究報告</li>
              <li>從洞察到設計決策的完整流程</li>
            </ul>
          </div>

          <!-- 跨職能執行力 -->
          <div class="bento__card">
            <div class="bento__eyebrow">執行廣度</div>
            <h3 class="bento__title">跨職能執行力</h3>
            <p class="bento__desc">從 UX 研究、UI 設計到前端切版，能獨立一手包辦，確保設計落地不失真。</p>
            <ul class="bento__list">
              <li>資訊架構 &amp; 互動設計</li>
              <li>Vue.js / SCSS / RWD</li>
              <li>Prototype 製作與驗證</li>
            </ul>
          </div>

          <!-- 設計領導 -->
          <div class="bento__card">
            <div class="bento__eyebrow">領導深度</div>
            <h3 class="bento__title">設計領導<br />與制度建立</h3>
            <p class="bento__desc">用制度取代靠感覺，讓設計團隊的運作可被量化、可被傳承。</p>
            <ul class="bento__list">
              <li>OKR 績效系統設計</li>
              <li>設計師職能模型建立</li>
              <li>跨部門協作制度化</li>
            </ul>
          </div>

          <!-- 三個小卡 -->
          <div class="bento__card bento__card--sm">
            <div class="bento__eyebrow">工具應用</div>
            <h3 class="bento__title">AI 工作流</h3>
            <p class="bento__desc">成本降低 99.7%，獨立完成傳統需要整個製作團隊的動畫專案。</p>
          </div>
          <div class="bento__card bento__card--sm">
            <div class="bento__eyebrow">溝通能力</div>
            <h3 class="bento__title">跨部門協作</h3>
            <p class="bento__desc">在產品、工程與商業目標之間建立共識，推動設計決策真正落地。</p>
          </div>
          <div class="bento__card bento__card--sm">
            <div class="bento__eyebrow">持續成長</div>
            <h3 class="bento__title">自驅學習</h3>
            <p class="bento__desc">主動研發 SCSS 工具、建立知識文件，在限制中找到更聰明的解法。</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ LEADERSHIP PREVIEW ═══ -->
    <section class="section leadership-preview">
      <div class="container">
        <div class="leadership__inner">
          <div class="leadership__left">
            <p class="section__label">Leadership</p>
            <h2 class="leadership__title">設計領導力的<br />實踐與反思</h2>
            <p class="leadership__desc">
              在我當上主管之後，我發現設計能力只是起點。這裡記錄的，是我如何用制度取代靠感覺、用數據取代靠記憶、在資源不足的情況下，仍然讓團隊往前走的真實歷程。
            </p>
            <RouterLink to="/leadership" class="btn btn--primary">閱讀更多文章 →</RouterLink>
          </div>
          <div class="leadership__articles">
            <RouterLink to="/leadership/impossible-deadline-two-weeks" class="leadership__article">
              <div class="leadership__article-num">01</div>
              <div class="leadership__article-body">
                <span class="leadership__article-tag">專案決策過程</span>
                <h4 class="leadership__article-title">我們如何在兩週內，完成一個不可能的任務</h4>
              </div>
              <span class="leadership__article-arrow">→</span>
            </RouterLink>
            <RouterLink to="/leadership/design-request-collaboration-guide" class="leadership__article">
              <div class="leadership__article-num">02</div>
              <div class="leadership__article-body">
                <span class="leadership__article-tag">帶團隊的方法論</span>
                <h4 class="leadership__article-title">當全公司都把設計師當通靈師，我決定立一條規矩</h4>
              </div>
              <span class="leadership__article-arrow">→</span>
            </RouterLink>
            <RouterLink to="/leadership/design-team-okr-performance-system" class="leadership__article">
              <div class="leadership__article-num">03</div>
              <div class="leadership__article-body">
                <span class="leadership__article-tag">設計團隊管理心得</span>
                <h4 class="leadership__article-title">當 KPI 無法衡量設計師：我如何為設計部打造 OKR 績效系統</h4>
              </div>
              <span class="leadership__article-arrow">→</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ TESTIMONIALS ═══ -->
    <section class="testimonials section">
      <div class="container">
        <div class="section__header">
          <p class="section__label">Recommendations</p>
          <h2 class="section__title">他們這樣說</h2>
        </div>
        <div class="testimonials__grid">
          <div class="testimonial__card">
            <span class="testimonial__quote">"</span>
            <h4 class="testimonial__title">執行力與溝通能力超乎預期，對回饋保持開放</h4>
            <p class="testimonial__content">
              Nomis 是一位充滿熱情的 UIUX 設計師，以創新思維和快速適應新挑戰的能力著稱。她的執行速度與溝通品質持續超乎預期，是團隊中不可或缺的夥伴。對回饋始終保持開放，持續尋求改進，對團隊的成功貢獻良多。
            </p>
            <div class="testimonial__author">
              <img src="/images/general/avatar-chen.jpg" alt="陳大明" class="testimonial__avatar" />
              <div>
                <p class="testimonial__name">陳大明</p>
                <p class="testimonial__role">iOS 工程師・直接主管 / 2024</p>
              </div>
            </div>
          </div>
          <div class="testimonial__card">
            <span class="testimonial__quote">"</span>
            <h4 class="testimonial__title">能理解並轉化使用者需求為直覺且美觀的設計</h4>
            <p class="testimonial__content">
              與 Nomis 共事是非常愉快的經驗。他始終展現出理解並將使用者需求轉化為直覺且視覺吸引力設計的能力。他的創意和解決問題的技巧在應對專案挑戰時發揮了關鍵作用。支持性的個性與強大的溝通技巧營造了積極的協作環境，是可靠又具創新力的夥伴。
            </p>
            <div class="testimonial__author">
              <img src="/images/general/avatar-liao.jpg" alt="廖小華" class="testimonial__avatar" />
              <div>
                <p class="testimonial__name">廖小華</p>
                <p class="testimonial__role">產品經理・同團隊成員 / 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { projects } from '@/data/projects.js'
import { getImageUrl } from '@/utils/image.js'

const featuredProjects = computed(() => projects.slice(0, 4))

// Typewriter effect for "Nomis"
const fullText = 'Nomis'
const typedText = ref('')
const dotVisible = ref(false)
const cursorDone = ref(false)

onMounted(() => {
  const startDelay = 600      // wait before typing begins
  const charDelay = 110       // ms per character
  const dotDelay = 200        // pause before dot appears
  const cursorLingerDelay = 900  // cursor blinks this long after done

  setTimeout(() => {
    let i = 0
    const type = () => {
      if (i < fullText.length) {
        typedText.value += fullText[i]
        i++
        setTimeout(type, charDelay)
      } else {
        // Show the dot
        setTimeout(() => {
          dotVisible.value = true
          // Hide cursor after it lingers
          setTimeout(() => { cursorDone.value = true }, cursorLingerDelay)
        }, dotDelay)
      }
    }
    type()
  }, startDelay)
})
</script>
