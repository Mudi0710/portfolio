<template>
  <div class="about-page">
    <!-- 個人介紹 -->
    <section class="about-hero section">
      <div class="container about-hero__inner">
        <div class="about-hero__content">
          <p class="about-hero__label">About Me</p>
          <h1 class="about-hero__title">嗨，我是 Nomis！</h1>
          <p class="about-hero__desc">
            我是一位橫跨 <strong>UIUX 設計、前端切版與系統思維</strong>的複合型設計師。入行前做過人資、讀過社會心理、跑過企業培訓，這些跨領域的歷程不是繞路，而是讓我在每一個設計決策裡，都能同時看見使用者、團隊與商業三個層面。
          </p>
          <p class="about-hero__desc">
            在三貝德擔任設計師期間，我能在資源不足的情況下獨立推進：PM 缺席時獨立完成從 UX 研究到前端切版的全流程；工具不夠用時自己研發 SCSS 工具、建立 EPUB 量產系統。<strong>我相信設計師最大的競爭力，不是工具用得多熟，而是在限制裡找到更多可能與更聰明的解法。</strong>
          </p>
          <p class="about-hero__desc">
            我也把同樣的系統性思維延伸到更大的範疇：建立 OKR 績效系統、UIUX 職涯發展階梯、設計需求協作指南，<strong>讓團隊的運作不再靠感覺，而是有制度可以依循、有數據可以追蹤。</strong>這種「讓複雜的事情變得可被依循」的能力，是我目前最想持續深化的方向。
          </p>
        </div>
        <div class="about-hero__image">
          <img :src="getImageUrl('/images/general/avatar.png')" alt="Nomis" class="about-hero__avatar" />
        </div>
      </div>
    </section>

    <!-- 工作經驗 -->
    <section class="about-experience section">
      <div class="container">
        <h2 class="about-experience__title">工作經驗</h2>
        <div class="about-experience__list">
          <div v-for="exp in experiences" :key="exp.company + exp.role" class="about-experience__item">
            <div class="about-experience__left">
              <p class="about-experience__period">{{ exp.period }}</p>
            </div>
            <div class="about-experience__right">
              <h3 class="about-experience__role">{{ exp.role }}</h3>
              <p class="about-experience__company">{{ exp.company }}</p>
              <p class="about-experience__desc" v-html="exp.desc"></p>
              <ul v-if="exp.highlights" class="about-experience__highlights">
                <li v-for="item in exp.highlights" :key="item" v-html="item"></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="about-experience__footer">
          <a href="https://www.linkedin.com/in/nomis-yang/" target="_blank" rel="noopener noreferrer" class="btn btn--ghost">
            在 LinkedIn 查看完整經歷 ↗
          </a>
        </div>
      </div>
    </section>

    <!-- 成為設計師的故事 -->
    <section class="about-story section">
      <StoryCanvas />
      <div class="container">
        <p class="about-story__label">My Story</p>
        <h2 class="about-story__title">那些看似無關的工作，<br/>如何一步步讓我成為 UIUX 設計師與設計主管</h2>
        <p class="about-story__intro">
          在成為 UIUX 設計師之前，我做過助理、跑過財會、管過人資、辦過企業培訓。<br />
          這些看起來和設計毫無關係的工作，卻在我不知道的時候，悄悄建立了我最核心的設計能力。
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
              <p class="about-story__desc" v-html="story.desc"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 設計之外 -->
    <section class="about-extras section">
      <div class="container">
        <p class="about-extras__label">Beyond Work</p>
        <h2 class="about-extras__title">設計之外，我還是⋯⋯</h2>
        <div class="about-extras__grid">
          <div v-for="extra in extras" :key="extra.name" class="about-extras__card">
            <div class="about-extras__image">
              <img :src="getImageUrl(extra.image)" :alt="extra.name" />
            </div>
            <div class="about-extras__content">
              <h3 class="about-extras__name">
                <span class="about-extras__icon">
                  <!-- 🎬 職場劇迷 -->
                  <svg v-if="extra.icon === 'film'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                    <line x1="7" y1="2" x2="7" y2="22" />
                    <line x1="17" y1="2" x2="17" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="2" y1="7" x2="7" y2="7" />
                    <line x1="2" y1="17" x2="7" y2="17" />
                    <line x1="17" y1="17" x2="22" y2="17" />
                    <line x1="17" y1="7" x2="22" y2="7" />
                  </svg>
                  <!-- 🚴 飛輪騎士 -->
                  <svg v-if="extra.icon === 'bike'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <path d="M15 6a1 1 0 0 0-1-1h-1" />
                    <path d="M8.5 17.5 12 10l2.5 4H8.5z" stroke-linejoin="round" />
                    <path d="m12 10 2-4h3" />
                  </svg>
                  <!-- 📖 閱讀者 -->
                  <svg v-if="extra.icon === 'book'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </span>
                {{ extra.name }}
              </h3>
              <p class="about-extras__desc" v-html="extra.desc"></p>
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
    period: '2024.06 - 現在',
    role: '設計主管',
    company: '三貝德數位文創股份有限公司',
    desc: '帶領設計團隊，負責公司多項 B2B、B2C 教育產品（Web、App、AI 應用）的體驗品質、設計策略與跨部門協作，並主導設計系統建立與流程制度化。',
    highlights: [
      '團隊管理與人才培育：建立 <strong>OKR 績效系統</strong>、UIUX 職涯發展階梯與 1:1 教練式輔導機制，系統化提升團隊產能與個人成長路徑。',
      '產品體驗統籌：主導多項 Web / App 數位產品的使用者體驗品質，以數據驅動推動體驗優化，<strong>AI 學習目標改版後客服需求降低 80%</strong>。',
      '設計系統與流程制度化：建置公司級 <strong>Design System</strong>，並制定跨部門協作規範，標準化設計交付流程。',
      '跨部門協作：在嚴峻時程下<strong>統籌多線並行</strong>的設計任務，與產品、工程、測試團隊建立高效協作模式。',
    ],
  },
  {
    period: '2023.03 - 2024.05',
    role: 'UIUX 設計師',
    company: '三貝德數位文創股份有限公司',
    desc: '負責平台教育產品的 UI/UX 設計、前端切版與教材流程優化，打造一致且可延展的產品體驗。',
    highlights: [
      '產品設計：<strong>獨立主導多項功能從 0 到 1</strong> 的完整設計流程，涵蓋 UX 研究、資訊架構、UI 設計與 Prototype，並透過使用者訪談與數據分析驅動設計決策。',
      '前端切版：Vue.js 環境支援切版、RWD 與 API 串接，<strong>自研 SCSS 工具提升開發效率</strong>，並建立 EPUB 量產系統將手工排版轉為半自動化流程。',
      '跨職能協作：在 PM 資源不足的情況下<strong>獨立承擔前期研究到交付的全流程</strong>，並跨部門推動設計規格落地。',
    ],
  },
]

const stories = [
  {
    period: '2016 - 2017',
    title: '主管特別助理',
    image: getImageUrl('/images/general/story/story-1.jpg'),
    tags: ['跨部門協作', '多線並行', '方向感建立', '利害關係人溝通'],
    desc: '在六星集擔任總經理特別助理，每天的工作是把老闆的行程、跨部門的需求、商務會議與大型活動全部兜在一起。這段經歷讓我第一次真實體會到<strong>「在不確定的情況下讓事情發生」</strong>是什麼感覺。我學會了如何在多條線並行時保持清醒、如何在沒有完整資訊下做出判斷。這兩件事後來不只成了我在設計專案裡最常用的底層能力，<strong>也讓我在帶團隊時，能在混亂中給出清楚的方向，讓每個人知道自己該做什麼、為什麼這樣做。</strong>',
  },
  {
    period: '2017 - 2019',
    title: '行政會計專員',
    image: getImageUrl('/images/general/story/story-2.jpg'),
    tags: ['系統性思維', '制度建立', '資訊架構'],
    desc: '在伊甸社會福利基金會負責財會、人事與政府專案申請，同時管理超過 1,000 件中心財產。這份工作教會我一件事：<strong>複雜的資訊必須被整理成有結構的系統，才能被追蹤、被執行、被傳承。</strong>這個觀念後來直接影響了我設計資訊架構的方式，<strong>也成了我建立 OKR 績效制度、Design System 和設計需求協作規範的底層思維</strong>——讓團隊的運作不再靠記憶和感覺，而是有制度可以依循。',
  },
  {
    period: '2019 - 2020',
    title: '專案管理師',
    image: getImageUrl('/images/general/story/story-3.jpg'),
    tags: ['商業目標理解', '說服力', '利害關係人溝通'],
    desc: '在鉅微管理顧問負責超過 40 家企業客戶的年度專案，每一個客戶都有不同的產業背景、不同的內部問題、不同的決策者。這段經歷讓我學會<strong>在短時間內理解對方真正的需求、找到讓他們願意買單的語言</strong>，並把方案包裝成讓人信服的提案。這個能力後來讓我在做設計提案時，能同時說服老闆、工程師和業務，<strong>讓設計決策不只被理解，而是被真正支持。</strong>',
  },
  {
    period: '2020 - 2021',
    title: '人資專員・培訓專員',
    image: getImageUrl('/images/general/story/story-4.jpg'),
    tags: ['人才培育', '知識拆解', '同理心'],
    desc: '在啟諾科技從人資做到培訓，取得 <strong>TTT（Train the Trainer）企業內部講師資格</strong>後，自行開發並主講《有效提升溝通力》課程，滿意度達 5/5 滿分。這段經歷讓我真正理解：要讓別人「學會」一件事，<strong>必須先把複雜的知識拆解成對方能吸收的結構。</strong>這個能力後來幫助我設計更清晰的使用者引導流程，也讓我在帶設計師時，<strong>能把抽象的設計原則轉化成具體可執行的行動，這正是人才培育最核心的事。</strong>',
  },
]

const extras = [
  {
    icon: 'film',
    image: '/images/general/extras/extras-1.jpg',
    name: '職場劇迷',
    desc: '《穿著 Prada 的惡魔》、《高年級實習生》、《正青春》、《歡樂頌》......我的片單大多是職場劇。比起純粹娛樂，我更著迷於劇中人<strong>如何在壓力與博弈裡做決定、如何拿捏關係與界限</strong>。這些情節讓我對「人」的行為模式有更細膩的觀察，也悄悄影響了我處理<strong>利害關係人與跨部門協作</strong>的方式。',
  },
  {
    icon: 'bike',
    image: '/images/general/extras/extras-2.jpg',
    name: '飛輪騎士',
    desc: '跟著教練一節一節加重阻力，不讓自己輕易找退路——飛輪對我來說不只是運動，更是一種<strong>和自己談判的過程</strong>。每次撐過那個最想放棄的瞬間，都會提醒我：真正的進步不在舒適區裡。這個習慣讓我<strong>在高壓的專案週期裡，依然能保持清醒和能量</strong>。',
  },
  {
    icon: 'book',
    image: '/images/general/extras/extras-3.jpg',
    name: '閱讀者',
    desc: '我偏愛心理與成長類的書，特別喜歡鄧惠文醫師的作品，她擅長把複雜的情感結構說得清晰又有溫度。閱讀對我來說是一種<strong>反射性思考</strong>的練習：把別人整理好的洞見，對照自己的經驗重新消化。這個習慣讓我更能<strong>理解使用者行為背後的心理動機</strong>，也讓我在設計決策時，不只看見功能，也看見情緒。',
  },
]
</script>