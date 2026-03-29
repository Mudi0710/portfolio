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

  const STAR_COUNT = 2000 // [可調整] 越多越密集

  // 用 3D z 深度模擬穿梭感：每顆星有 (x, y, z)
  // z 從遠處（大值）飛向螢幕（小值），投影到 2D 時越近越大
  const MAX_Z = 800

  const randomStar = () => ({
    x: (Math.random() - 0.5) * 2,  // -1 ~ 1，正規化座標
    y: (Math.random() - 0.5) * 2,
    z: Math.random() * MAX_Z,       // 深度，0 = 最近，MAX_Z = 最遠
    pz: null,                       // 上一幀的 z，用來算拖尾起點
  })

  const stars = Array.from({ length: STAR_COUNT }, randomStar)

  // 初始化 pz
  stars.forEach(s => { s.pz = s.z })

  const SPEED =1.5 // [可調整] 每幀減少的 z 值，越大飛越快

  const draw = () => {
    const W = canvas.width
    const H = canvas.height
    const cx = W / 2
    const cy = H / 2

    // 半透明殘影，讓拖尾自然延伸（比 clearRect 更有動感）
    ctx.fillStyle = 'rgba(10, 14, 26, 0.25)' // [可調整] alpha 值越大，舊畫面消除越快，拖尾就越短
    ctx.fillRect(0, 0, W, H)

    stars.forEach(s => {
      s.pz = s.z
      s.z -= SPEED

      // 重置：飛出螢幕後從遠處重新出發
      if (s.z <= 1) {
        Object.assign(s, randomStar())
        s.pz = s.z
        return
      }

      // 3D → 2D 投影：z 越小（越近）→ 偏移越大
      const scale = MAX_Z / s.z
      const x = cx + s.x * scale * (W / 2)
      const y = cy + s.y * scale * (H / 2)

      // 上一幀的投影位置（拖尾起點）
      const pScale = MAX_Z / s.pz
      const px = cx + s.x * pScale * (W / 2)
      const py = cy + s.y * pScale * (H / 2)

      // 越近越亮越粗
      const progress = 1 - s.z / MAX_Z   // 0(遠) ~ 1(近)
      const brightness = Math.pow(progress, 1.5)
      const lineWidth = Math.max(0.3, progress * 2.2)

      // 漸層拖尾：從透明 → 白藍色
      const gradient = ctx.createLinearGradient(px, py, x, y)
      gradient.addColorStop(0, `rgba(100,160,255,0)`)
      gradient.addColorStop(1, `rgba(200,225,255,${brightness * 0.95})`)

      ctx.beginPath()
      ctx.moveTo(px, py)
      ctx.lineTo(x, y)
      ctx.strokeStyle = gradient
      ctx.lineWidth = lineWidth
      ctx.lineCap = 'round'
      ctx.stroke()

      // 星點頭部（越近越明顯）
      if (progress > 0.6) {
        const dotOpacity = (progress - 0.6) / 0.4
        ctx.beginPath()
        ctx.arc(x, y, lineWidth * 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220,235,255,${dotOpacity * 0.9})`
        ctx.fill()
      }
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