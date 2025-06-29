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
  <div ref="el"
       :class="['animated-item', { visible: isVisible }]">
    <div class="card-left">
      <slot name="left"></slot>
    </div>
    <div class="card-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.animated-item {
  opacity: 0;
  transform: translateY(80px);
  transition: all 0.6s ease-out;
}

.animated-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.animated-item {
  background: white;
  border-radius: 16px;
  display: flex;
  padding: 24px;
  max-width: 35rem;
  height: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  margin: 10px;
}

.card-left {
  display: flex;
  flex-direction: column;
  align-content: start;
  padding-right: 24px;
  margin: 0;
}

.card-left h2 {
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
}

.card-left img {
  max-width: 150px;
}

.card-right {
  flex: 2;
  display: grid;
  justify-content: space-around;
  padding-left: 24px;
  align-content: start;
}


@media (max-width: 768px) {
  .animated-item {
    flex-direction: column;
  }

  .card-left {
    border-right: none;
    border-bottom: 1px solid #eee;
    padding-right: 0;
    padding-bottom: 16px;
  }

  .card-right {
    padding-left: 0;
    padding-top: 16px;
  }
}
</style>