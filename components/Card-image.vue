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
  <slot></slot>
</div>
</template>

<style scoped>

.animated-item.visible:hover{
  transform: translateY(-10px);
  transition: 0.3s;
  color: #2a2b6c;
  cursor: pointer;
}

.animated-item {
  background: white;
  display: flex;
  border-radius: 15px;
  padding: 20px;
  width: 40%;
  margin-left: 10px;
  margin-right: 10px;
  opacity: 0;
  transform: translateY(80px);
  transition: all 0.6s ease-out;
}

.animated-item.visible {
  opacity: 1;
  transform: translateX(0);
}

@media screen and (max-width: 941px){
  div{
    width: 80%;
    margin-bottom: 15px;
  }
}
</style>