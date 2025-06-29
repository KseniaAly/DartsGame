<script setup lang="ts">
import { ref, onMounted } from 'vue'

const el = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.disconnect() // Анимация запускается только один раз
    }
  }, {
    threshold: 0.1,
  })

  if (el.value) observer.observe(el.value)
})
</script>

<template>
  <p
      ref="el"
      :class="['animated-item', { visible: isVisible }]"
  >
    <slot />
  </p>
</template>

<style scoped>
.animated-item {
  opacity: 0;
  transform: translateX(80px);
  transition: all 0.6s ease-out;
}

.animated-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.animated-item {
  font-size: 1.3rem;
  padding-left: 30px;
  width: 85%;
  height: 4.5rem;
  border-bottom: 1px solid black;
  align-content: center;
}
.animated-item:hover{
  background-color: white;
  border: none;
  transform: translateX(10px);
  border-radius: 15px;
}
</style>
