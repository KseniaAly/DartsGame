<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const leftObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const title = entry.target.querySelector('.title')
        const description = entry.target.querySelector('.description')
        const logo = entry.target.querySelector('.logo')

        title?.classList.add('visible')

        setTimeout(() => {
          description?.classList.add('visible')
        }, 300)

        setTimeout(() => {
          logo?.classList.add('animate')
        }, 600)
      }
    })
  }, observerOptions)

  const blocksObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible')
        }, index * 200)
      }
    })
  }, observerOptions)

  const leftContent = document.querySelector('.left')
  if (leftContent) leftObserver.observe(leftContent)

  document.querySelectorAll('.block').forEach(block => {
    blocksObserver.observe(block)
  })
})
</script>

<template>
  <div class="container">
    <div class="postgres-block">
      <div class="left">
        <p class="title">СУБД PostgreSQL<br>или Postgres PRO —<br>российская система<br>управления базами данных</p>
        <p class="description">Заменяет западные решения в условиях прекращения<br>работы СУБД Microsoft SQL и Oracle SQL</p>
        <img src="./img/postgrespro-logo.png" class="logo">
      </div>

      <div class="right">
        <div class="blocks-container">
          <div class="block" style="--offset: 0;">
            <p>В реестре российского ПО</p>
            <img src="./img/flag.png">
          </div>

          <div class="block" style="--offset: 1;">
            <p>Подходит под импортозамещение</p>
            <img src="./img/swap.png">
          </div>

          <div class="block" style="--offset: 2;">
            <p>Поддержка баз данных любого размера</p>
            <img src="./img/database.png">
          </div>

          <div class="block" style="--offset: 3;">
            <p>Распространяется свободно</p>
            <img src="./img/tag.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
* {
  font-size: 18px;
  font-family: 'Onest';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  overflow-x: hidden;
  border-bottom: 1px solid gray;
}

.postgres-block {
  display: flex;
  align-items: start;
  width: 100%;
  max-width: 1400px;
  padding: 50px 0;
  gap: 10px;
}

.left-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.left {
  display: flex;
  flex-direction: column;
}

.left .title {
  font-size: 48px;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 24px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.left .title.visible {
  opacity: 1;
  transform: translateY(0);
}

.left .description {
  font-size: 24px;
  margin-bottom: 20px;
  color: #5a606e;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.left .description.visible {
  opacity: 1;
  transform: translateY(0);
}

.left .logo {
  max-width: 100%;
  height: auto;
  opacity: 0;
  transform: scale(0.8) translateY(20px);
  transition: opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275),
  transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  align-self: flex-start;
}

.left .logo.animate {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.right {
  flex: 1;
  position: relative;
}

.blocks-container {
  display: flex;
  flex-direction: column;
}

.block {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 28px;
  padding: 28px;
  position: relative;
  left: calc(var(--offset) * 45px);
  width: calc(90% - var(--offset) * 20px);
  margin-top: 24px;
  transform: translateX(50px);
  opacity: 0;
  transition: transform 0.6s ease-out, opacity 0.6s ease-out;
}

.block.visible {
  transform: translateX(0);
  opacity: 1;
}

.block:nth-child(1) {
  margin-top: 0;
}

.block p {
  margin-right: 20px;
  font-size: 24px;
  line-height: 1.4;
  flex: 1;
}

.block img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: filter 0.3s ease;
  filter: brightness(0) saturate(100%) invert(56%) sepia(11%) saturate(1518%) hue-rotate(176deg) brightness(91%) contrast(91%);
}

.block:hover img {
  filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
}

/* Адаптив */
@media (max-width: 1200px) {
  .postgres-block {
    flex-direction: column;
    gap: 40px;
  }

  .left, .right {
    width: 100%;
  }

  .block {
    left: 0 !important;
    width: 100% !important;
  }
}

@media (max-width: 992px) {
  .left .title {
    font-size: 36px;
  }

  .left .description {
    font-size: 20px;
  }

  .block p {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .postgres-block {
    padding: 40px 0;
    gap: 30px;
  }

  .left-content {
    align-items: center;
    text-align: center;
  }

  .left .logo {
    align-self: center;
  }

  .block {
    padding: 20px;
    flex-direction: column;
    text-align: center;
  }

  .block img {
    margin-top: 15px;
    width: 35px;
    height: 35px;
  }

  .block p {
    margin-right: 0;
    margin-bottom: 10px;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 15px;
  }

  .left .title {
    font-size: 32px;
    margin-bottom: 20px;
  }

  .left .description {
    font-size: 18px;
  }

  .block {
    padding: 18px;
    border-radius: 20px;
  }

  .block p {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .left .title {
    font-size: 28px;
  }

  .left .description {
    font-size: 16px;
  }

  .block {
    padding: 16px;
  }

  .block p {
    font-size: 16px;
  }

  .block img {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 375px) {
  .left .title {
    font-size: 24px;
  }

  .left .description {
    font-size: 15px;
  }

  .block p {
    font-size: 15px;
  }
}

@media (max-width: 320px) {
  .container {
    padding: 12px;
  }

  .postgres-block {
    padding: 30px 0;
    gap: 25px;
  }

  .left .title {
    font-size: 22px;
    margin-bottom: 15px;
  }

  .left .description {
    font-size: 14px;
  }

  .left {
    align-items: center;
    text-align: center;
  }

  .block {
    padding: 14px;
    border-radius: 16px;
    margin-top: 16px;
  }

  .block p {
    font-size: 14px;
    line-height: 1.3;
  }

  .block img {
    width: 25px;
    height: 25px;
  }
}
</style>