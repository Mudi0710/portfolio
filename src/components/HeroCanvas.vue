<template>
  <canvas ref="canvasRef" class="hero-canvas" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationId = null

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')

  const resize = () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  // 粒子設定
  const PARTICLE_COUNT = 80
  const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r: Math.random() * 2 + 1,
  }))

  // Mesh Gradient 呼吸設定
  let breatheT = 0

  const draw = () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const W = canvas.width   // ← 直接用，不要重新設定
    const H = canvas.height  // ← 直接用，不要重新設定

    ctx.clearRect(0, 0, W, H)

    // ── Mesh Gradient 呼吸層 ──
    breatheT += 0.005
    const breathe = (Math.sin(breatheT) + 1) / 2 // 0 ~ 1

    const g1 = ctx.createRadialGradient(W * 0.15, H * 0.5, 0, W * 0.15, H * 0.5, W * 0.55)
    g1.addColorStop(0, `rgba(79,142,247,${0.25 + breathe * 0.12})`)
    g1.addColorStop(1, 'transparent')
    ctx.fillStyle = g1
    ctx.fillRect(0, 0, W, H)

    const g2 = ctx.createRadialGradient(W * 0.85, H * 0.2, 0, W * 0.85, H * 0.2, W * 0.45)
    g2.addColorStop(0, `rgba(124,95,247,${0.15 + breathe * 0.1})`)
    g2.addColorStop(1, 'transparent')
    ctx.fillStyle = g2
    ctx.fillRect(0, 0, W, H)

    const g3 = ctx.createRadialGradient(W * 0.6, H * 0.8, 0, W * 0.6, H * 0.8, W * 0.3)
    g3.addColorStop(0, `rgba(79,142,247,${0.08 + breathe * 0.06})`)
    g3.addColorStop(1, 'transparent')
    ctx.fillStyle = g3
    ctx.fillRect(0, 0, W, H)

    // ── 粒子移動 ──
    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > W) p.vx *= -1
      if (p.y < 0 || p.y > H) p.vy *= -1
    })

    // ── 連線 ──
    const MAX_DIST = 130
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.35
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(79,142,247,${alpha})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }
    }

    // ── 粒子點 ──
    particles.forEach((p) => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(79,142,247,0.65)'
      ctx.fill()
    })

    animationId = requestAnimationFrame(draw)
  }

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resize)
  })

  draw()
})
</script>

<style scoped>
.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>