<template>
  <header class="header">
    <div class="container header__inner">
      <RouterLink to="/" class="header__logo" @click="closeMenu">
        Nomis Yang
      </RouterLink>

      <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
        <RouterLink to="/" class="header__nav-link" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/projects" class="header__nav-link" @click="closeMenu">Projects</RouterLink>
        <RouterLink to="/leadership" class="header__nav-link" @click="closeMenu">Leadership</RouterLink>
        <RouterLink to="/about" class="header__nav-link" @click="closeMenu">About</RouterLink>
      </nav>

      <div class="header__right">
        <!-- Theme Toggle -->
        <button
          class="header__theme-toggle"
          @click="toggleTheme"
          :aria-label="isDark ? '切換為淺色模式' : '切換為深色模式'"
          :title="isDark ? '切換為淺色模式' : '切換為深色模式'"
        >
          <!-- Sun icon (shown in dark mode to switch to light) -->
          <svg v-if="isDark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <!-- Moon icon (shown in light mode to switch to dark) -->
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <a href="/portfolio/resume.pdf" target="_blank" class="header__cv-btn" @click="closeMenu">
          Download CV
        </a>

        <button
          class="header__hamburger"
          :class="{ 'header__hamburger--open': isMenuOpen }"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
const isDark = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    // Dark mode — apply override
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    // Light is default — remove the dark override
    document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('theme', 'light')
  }
}

const initTheme = () => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    // Default: light mode
    isDark.value = false
    document.documentElement.removeAttribute('data-theme')
  }
}

onMounted(() => {
  initTheme()
})

// 開啟 menu 時鎖定 body scroll
watch(isMenuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>
