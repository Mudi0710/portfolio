<template>
  <div class="about-page">
    <!-- 個人介紹 -->
    <section class="about-hero section">
      <div class="container about-hero__inner">
        <div class="about-hero__content">
          <p class="about-hero__label">About Me</p>
          <h1 class="about-hero__title">嗨，我是 Nomis！</h1>
          <p class="about-hero__desc">
            我是一位橫跨 <strong>UIUX 設計、前端切版與設計管理</strong>的複合型設計師。入行前做過人資、讀過社會心理、跑過企業培訓，這些跨領域的歷程不是繞路，而是讓我在每一個設計決策裡，都能同時看見使用者、團隊與商業三個層面。
          </p>
          <p class="about-hero__desc">
            在三貝德擔任設計師期間，我能在資源不足的情況下獨立推進：PM 缺席時獨立完成從 UX 研究到前端切版的全流程；工具不夠用時自己研發 SCSS 工具、建立 EPUB 量產系統。<strong>我相信設計師最大的競爭力，不是工具用得多熟，而是在限制裡找到更多可能與更聰明的解法。</strong>
          </p>
          <p class="about-hero__desc">
            晉升設計主管後，我把同樣的系統性思維用在領導上：建立 OKR 績效系統、UIUX 職涯發展階梯、設計需求協作指南，<strong>讓團隊的運作不再靠感覺，而是有制度可以依循、有數據可以追蹤。</strong>這是我目前覺得最有意義的事，也是我最想繼續做的事。
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
              <p class="about-experience__desc">{{ exp.desc }}</p>
              <ul v-if="exp.highlights" class="about-experience__highlights">
                <li v-for="item in exp.highlights" :key="item">{{ item }}</li>
              </ul>
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
    period: '2024.06 - 現在',
    role: '設計主管',
    company: '三貝德數位文創股份有限公司',
    desc: '帶領設計團隊，負責公司多項 B2B、B2C 教育產品（Web、App、AI 應用）的體驗品質、設計策略與跨部門協作，並主導設計系統建立與流程制度化。',
    highlights: [
      '團隊管理與人才培育：建立 OKR 績效系統、UIUX 職涯發展階梯與 1:1 教練式輔導機制，系統化提升團隊產能與個人成長路徑。',
      '產品體驗統籌：主導多項 Web / App 數位產品的使用者體驗品質，以數據驅動推動體驗優化，AI 學習目標改版後客服需求降低 80%。',
      '設計系統與流程制度化：建置公司級 Design System，並制定跨部門協作規範，標準化設計交付流程。',
      '跨部門協作：在嚴峻時程下統籌多線並行的設計任務，與產品、工程、測試團隊建立高效協作模式。',
    ],
  },
  {
    period: '2023.03 - 2024.05',
    role: 'UIUX 設計師',
    company: '三貝德數位文創股份有限公司',
    desc: '負責平台教育產品的 UI/UX 設計、前端切版與教材流程優化，打造一致且可延展的產品體驗。',
    highlights: [
      '產品設計：獨立主導多項功能從 0 到 1 的完整設計流程，涵蓋 UX 研究、資訊架構、UI 設計與 Prototype，並透過使用者訪談與數據分析驅動設計決策。',
      '前端切版：Vue.js 環境支援切版、RWD 與 API 串接，自研 SCSS 工具提升開發效率，並建立 EPUB 量產系統將手工排版轉為半自動化流程。',
      '跨職能協作：在 PM 資源不足的情況下獨立承擔前期研究到交付的全流程，並跨部門推動設計規格落地。',
    ],
  },
  {
    period: '2021.06 - 2021.11',
    role: '培訓專員',
    company: '啟誠科技有限公司',
    desc: '支援公司整體人才發展與服務品質提升，規劃並授課內部溝通課程，分析營運數據並協助主管提出改善方案。',
    highlights: [
      '自行開發並講授《有效提升溝通力》課程，滿意度達 5/5 滿分。',
      '每日維護 500+ 則文字記錄與 50+ 通電話，確保服務品質並找出改善方向。',
    ],
  },
  {
    period: '2020.09 - 2021.06',
    role: '人資專員',
    company: '啟諾科技有限公司',
    desc: '負責全流程人力資源作業，涵蓋招募、新人職前、EAP 員工協助、教育訓練與勞資會議。',
    highlights: [
      '一個月內成功招募 12 位新人，支援年度人力需求。',
      '規劃內訓課程，培育並成為內部講師，協助開發課程內容與授課技巧。',
    ],
  },
  {
    period: '2019.09 - 2020.07',
    role: '專案管理師',
    company: '鉅微管理顧問股份有限公司',
    desc: '負責逾 40 家國內外企業客戶的年度專案，包括教育訓練、紓壓課程與 EAP 專案等。',
    highlights: [
      '企劃並執行大型企業教育訓練與活動，涵蓋知名外商與上市企業。',
      '協助陌生開發與簡報提案，推動新業務開展。',
    ],
  },
  {
    period: '2017.07 - 2019.08',
    role: '行政會計專員',
    company: '伊甸社會福利基金會（大龍養護中心）',
    desc: '負責財會、人事行政、政府補助專案與整理行政管理。',
    highlights: [
      '獨立負責 5 件以上政府專案的申請與執行追蹤。',
      '管理 35 名員工的薪酬、差勤與福利事務。',
      '管理 1000+ 件中心財產，協助組織資源與修繕。',
    ],
  },
  {
    period: '2016.09 - 2017.01',
    role: '主管特別助理',
    company: '六星集股份有限公司',
    desc: '協助總經理行程管理、跨部門協作、商務會議與大型活動規劃。',
    highlights: [
      '規劃並協助總經理之商務行程與會議。',
      '參與籌備逾 400 人以上的大型年度尾牙。',
    ],
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