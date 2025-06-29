<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  links: {
    type: Array as () => Array<{text: string, url: string}>,
  }
});

const isExpanded = ref(false);
</script>

<template>
  <div class="feature" :class="{expanded: isExpanded}">
    <div class="feature-header">
      <p><slot></slot></p>
      <span class="toggle-icon" @click="isExpanded = !isExpanded">+</span>
    </div>
    <transition name="slide">
      <div v-if="isExpanded" class="links-container">
        <a v-for="link in links" :href="link.url" class="feature-link">
          {{link.text}}
        </a>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.feature {
  background-color: #f5f8ff;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.4;
  position: relative;
}

.toggle-icon {
  position: absolute;
  right: 16px;
  top: 12px;
  font-size: 24px;
  color: #5c7be6;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
}

.links-container {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 0;
  border-top: 1px solid black;
}

.feature.expanded .links-container {
  max-height: 300px;
}


.feature-link {
  color: #5c7be6;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 8px;
  transition: background-color 0.2s;

}

.feature-link:hover {
  text-decoration: underline;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 300px;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
  margin-top: 0;
  transform: translateY(-10px);
}

.feature.expanded .toggle-icon {
  transform: rotate(45deg);
}
</style>