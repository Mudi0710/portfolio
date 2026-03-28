<template>
  <header class="header">
    <div class="container header__inner">
      <RouterLink to="/" class="header__logo" @click="closeMenu">
        Nomis
      </RouterLink>

      <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
        <RouterLink to="/" class="header__nav-link" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/projects" class="header__nav-link" @click="closeMenu">Projects</RouterLink>
        <RouterLink to="/leadership" class="header__nav-link" @click="closeMenu">Leadership</RouterLink>
        <RouterLink to="/about" class="header__nav-link" @click="closeMenu">About</RouterLink>
        <a href="/resume.pdf" target="_blank" class="header__nav-link header__nav-link--resume" @click="closeMenu">Resume</a>
      </nav>

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
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// 開啟 menu 時鎖定 body scroll
watch(isMenuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>