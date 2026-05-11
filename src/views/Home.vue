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
              <span class="hero__stat-label">Years UIUX Design</span>
            </div>
            <div class="hero__stat">
              <span class="hero__stat-num">6+</span>
              <span class="hero__stat-label">B2B / B2C Products</span>
            </div>
            <div class="hero__stat">
              <span class="hero__stat-num">80%</span>
              <span class="hero__stat-label">Cost Optimization</span>
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
            <h4 class="testimonial__title">整合創意與執行力，承諾準時、品質穩定</h4>
            <p class="testimonial__content">
              我在 Samebest 與 Nomis 合作過多個專案，他兼具創意與執行力，能整合多方觀點、帶動團隊朝共同目標前進。他曾主導一檔行銷專案，設計有趣的心理測驗並包裝成宇宙冒險世界觀，在專案限制下仍精準落地並帶來良好推廣成效。與他合作總令人安心：承諾準時、品質穩定。真心推薦給重視學習與成長的團隊。
            </p>
            <div class="testimonial__author">
              <img src="/images/general/avatar-Enn.png" alt="Enn Tang" class="testimonial__avatar" />
              <div>
                <p class="testimonial__name">Enn Tang</p>
                <p class="testimonial__role">2024 年 5 月・Design Lead・直接主管</p>
              </div>
            </div>
          </div>
          <div class="testimonial__card">
            <span class="testimonial__quote">"</span>
            <h4 class="testimonial__title">具備產品思維，跨部門協作精準對齊設計與市場需求</h4>
            <p class="testimonial__content">
              我與 Nomis 密切合作了多個數位產品專案。他具備極強的產品思維，總能從 UI/UX 角度提出精準的建議，協助團隊將設計與市場需求完美對齊。他曾在「學習紀錄」功能中，運用優異的數據視覺化能力，將繁雜數據轉為直觀介面，精準解決家長端痛點。在跨部門協作上，他不帶本位主義，總能透過溝通激發團隊綜效，且對專案里程碑與交付物的品質把控極度精準。他是一位嚴以律己、善於整合資源的優秀設計主管，真心推薦給任何重視交付品質與團隊協作的企業。
            </p>
            <div class="testimonial__author">
              <img src="/images/general/avatar-Jenny.png" alt="Jenny Yu" class="testimonial__avatar" />
              <div>
                <p class="testimonial__name">Jenny Yu</p>
                <p class="testimonial__role">2026 年 5 月・Project Manager・跨團隊夥伴</p>
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
