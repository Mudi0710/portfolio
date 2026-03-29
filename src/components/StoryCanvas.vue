<template>
  <canvas ref="canvasRef" class="story-canvas" />
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

  // 星點：每個有 x, y（起始位置），angle（飛出角度），speed，size
  const STAR_COUNT = 120
  const stars = Array.from({ length: STAR_COUNT }, () => {
    const angle = Math.random() * Math.PI * 2
    const dist = Math.random() * 60  // 從中心附近出發
    return {
      angle,
      dist,
      speed: 0.8 + Math.random() * 2.5,
      size: 0.5 + Math.random() * 1.5,
      opacity: 0,
    }
  })

  const draw = () => {
    const W = canvas.width
    const H = canvas.height
    const cx = W / 2
    const cy = H / 2
    const maxDist = Math.sqrt(cx * cx + cy * cy)

    ctx.clearRect(0, 0, W, H)

    stars.forEach((s) => {
      s.dist += s.speed
      s.opacity = Math.min(1, s.dist / 80) * (1 - s.dist / maxDist)

      if (s.dist > maxDist) {
        // 重置回中心
        s.angle = Math.random() * Math.PI * 2
        s.dist = Math.random() * 20
        s.speed = 0.8 + Math.random() * 2.5
        s.size = 0.5 + Math.random() * 1.5
        s.opacity = 0
      }

      const x = cx + Math.cos(s.angle) * s.dist
      const y = cy + Math.sin(s.angle) * s.dist

      // 畫拖尾線條
      const tailLen = s.speed * 40
      const tx = cx + Math.cos(s.angle) * (s.dist - tailLen)
      const ty = cy + Math.sin(s.angle) * (s.dist - tailLen)

      ctx.beginPath()
      ctx.moveTo(tx, ty)
      ctx.lineTo(x, y)
      ctx.strokeStyle = `rgba(79,142,247,${s.opacity * 0.6})`
      ctx.lineWidth = s.size * 0.6
      ctx.stroke()

      // // 畫星點
      // ctx.beginPath()
      // ctx.arc(x, y, s.size * 0.8, 0, Math.PI * 2)
      // ctx.fillStyle = `rgba(180,210,255,${s.opacity * 0.9})`
      // ctx.fill()
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
.story-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>