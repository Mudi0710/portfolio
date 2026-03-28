<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
  <BackToTop />
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>