<script setup lang="ts">
const hover = ref(false)

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
  <div @mouseenter="hover = true" @mouseleave="hover = false" ref="el"
       :class="['animated-item', { visible: isVisible }]">
    <div class="image-section">
      <slot name="image" />
    </div>

    <div class="info-section" :class="{ hidden: hover }">
      <h3 class="name"><slot name="name" /></h3>
      <p class="title"><slot name="bio"></slot></p>
      <div class="tags">
        <span class="tag"><slot name="keys"></slot></span>
        <span class="tag"><slot name="stat"></slot></span>
      </div>
    </div>

    <div class="overlay" :class="{ active: hover }">
      <div class="overlay-content">
        <div class="top-left">
          <span class="tag"><slot name="keys"></slot></span>
          <span class="tag"><slot name="stat"></slot></span>
        </div>
        <div class="top-right">
          <h3><slot name="name" /></h3>
          <p class="title"><slot name="bio"></slot></p>
        </div>
      </div>
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
  width: 20rem;
  margin: 10px;
  border-radius: 16px;
  overflow: hidden;
  background: #ffffff;
  padding: 15px;
  position: relative;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  cursor: pointer;
}

.image-section ::v-deep(img) {
  width: 100%;
  display: block;
  border-radius: 16px;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.info-section {
  padding: 16px;
  background: white;
  transition: opacity 0.3s ease;
}

.info-section.hidden {
  opacity: 0;
}

.name {
  font-size: 1.7rem;
  font-weight: 300;
  margin: 0;
}

.title {
  color: #555;
  font-size: 1.2rem;
  margin: 8px 0 16px;
}

.tags {
  margin-top: 45px;
  display: flex;
  gap: 10px;
}

.tag {
  background: #e7ecf8;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 1.1rem;
  color: #000;
  font-weight: 500;
}

.overlay {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  transition: top 0.4s ease;
  z-index: 10;
  padding: 16px;
}

.overlay.active {
  top: 0;
}

.overlay-content {
  height: 100%;
}
.overlay h3{
  font-size: 1.7rem;
  font-weight: 300;
  margin: 0;
}
.overlay p{
  font-size: 1.1rem;
  font-weight: 300;
  margin: 0;
}
.top-left {
  display: flex;
  gap: 10px;
  position: absolute;
}

.top-left {
  top: 120px;
  left: 16px;
}

.top-right {
  display: grid;
  text-align: right;
  align-content: start;
}
</style>