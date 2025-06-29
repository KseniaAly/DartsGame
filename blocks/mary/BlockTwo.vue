<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

const animateOnScroll = () => {
  const cards = document.querySelectorAll('.cards:not(.slide-in)');
  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const isVisible = cardTop < window.innerHeight * 0.8;

    if (isVisible) {
      card.style.transitionDelay = `${index * 0.1}s`;
      card.classList.add('slide-in');
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Инициализация при загрузке
});

onUnmounted(() => {
  window.removeEventListener('scroll', animateOnScroll);
});
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="cards" data-color="blue">
        <img src="./img/v1.png" alt="">
        <p>Партнеры<br>Astra Linux</p>
      </div>

      <div class="cards" data-color="red">
        <img src="./img/v7.png" alt="">
        <p>Сертифици­рованные<br>1С:Франчайзи</p>
      </div>

      <div class="cards" data-color="black">
        <img src="./img/v2.png" alt="">
        <p>Партнеры<br>Yandex Cloud</p>
      </div>

      <div class="cards" data-color="green">
        <img src="./img/v3.png" alt="">
        <p>Партнеры<br>cloud.ru</p>
      </div>

      <div class="cards" data-color="yellow">
        <img src="./img/v4.png" alt="">
        <p>Партнеры<br>Базальт СПО</p>
      </div>

      <div class="cards" data-color="blue-dark">
        <img src="./img/v5.png" alt="">
        <p>Включены<br>в Росреестр РФ</p>
      </div>

      <div class="cards" data-color="purple">
        <img src="./img/v6.png" alt="">
        <p>Лучший проект<br>Global CIO</p>
      </div>
    </div>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&display=swap');
* {
  font-size: 18px;
  font-family: 'Onest';
  margin: 0;
  padding: 0;
}

.body{
  background: linear-gradient(to right top, #fff, #cce6ff);
  min-height: 100vh;
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

.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  padding: 50px 0;
  gap: 20px;
}

.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-size: 16px;
  height: 140px;
  padding: 15px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.5s ease-out;
}

.cards.slide-in {
  opacity: 1;
  transform: translateX(0);
}

.cards:nth-child(1) { transition-delay: 0.1s; }
.cards:nth-child(2) { transition-delay: 0.2s; }
.cards:nth-child(3) { transition-delay: 0.3s; }
.cards:nth-child(4) { transition-delay: 0.4s; }
.cards:nth-child(5) { transition-delay: 0.5s; }
.cards:nth-child(6) { transition-delay: 0.6s; }
.cards:nth-child(7) { transition-delay: 0.7s; }

.cards img {
  margin-bottom: 15px;
  height: 60px;
  width: auto;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.cards:hover img {
  filter: grayscale(0%);
}

.cards[data-color="blue"]:hover img {
  filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(176deg) brightness(94%) contrast(101%);
}

.cards[data-color="red"]:hover img {
  filter: invert(16%) sepia(99%) saturate(7404%) hue-rotate(4deg) brightness(95%) contrast(118%);
}

.cards[data-color="black"]:hover img {
  filter: grayscale(0%) brightness(0) saturate(100%) invert(0%);
}

.cards[data-color="green"]:hover img {
  filter: invert(42%) sepia(98%) saturate(457%) hue-rotate(66deg) brightness(94%) contrast(89%);
}

.cards[data-color="yellow"]:hover img {
  filter: invert(83%) sepia(29%) saturate(1198%) hue-rotate(359deg) brightness(103%) contrast(106%);
}

.cards[data-color="blue-dark"]:hover img {
  filter: invert(12%) sepia(94%) saturate(7499%) hue-rotate(247deg) brightness(85%) contrast(144%);
}

.cards[data-color="purple"]:hover img {
  filter: invert(12%) sepia(94%) saturate(4617%) hue-rotate(277deg) brightness(85%) contrast(120%);
}

.cards p {
  margin-top: 10px;
  line-height: 1.3;
}
.cards {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cards.slide-in {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 1200px) {
  .card {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  .cards {
    width: calc(100% / 4 - 30px);
    min-width: 160px;
  }

  .postgres-block {
    flex-direction: column;
    gap: 30px;
  }

  .left, .right {
    width: 100%;
  }
}

@media (max-width: 992px) {
  .section-title {
    font-size: 36px;
  }

  .left p:nth-child(1) {
    font-size: 36px;
  }

  .left p:nth-child(2) {
    font-size: 20px;
  }

  .benefit-title {
    font-size: 28px;
  }

  .benefit-description {
    font-size: 16px;
  }

  .blocks-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .block {
    left: 0 !important;
    width: 100% !important;
    margin-top: 0 !important;
    padding: 20px;
  }

  .block p {
    font-size: 20px;
    margin-right: 15px;
  }
}

@media (max-width: 768px) {
  .cards {
    width: calc(100% / 3 - 30px);
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .block {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .block img {
    margin-top: 15px;
  }

  .blocks-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .block {
    padding: 20px;
    flex-direction: row;
    align-items: center;
  }

  .block p {
    font-size: 18px;
    margin-right: 15px;
  }

  .block img {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 576px) {
  .cards {
    width: calc(100% / 2 - 20px);
    height: 120px;
    padding: 10px;
  }

  .cards img {
    height: 50px;
    margin-bottom: 10px;
  }

  .cards p {
    font-size: 14px;
  }

  .container {
    padding: 15px;
  }

  .imp {
    padding: 30px 0;
    gap: 30px;
  }

  .benefit-card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 28px;
  }

  .left p:nth-child(1) {
    font-size: 28px;
    margin-bottom: 15px;
  }

  .left p:nth-child(2) {
    font-size: 18px;
  }

  .card {
    padding: 30px 0;
    gap: 15px;
  }

  .block {
    padding: 15px;
  }

  .block p {
    font-size: 16px;
    margin-right: 10px;
  }

  .block img {
    width: 25px;
    height: 25px;
  }
}

@media (max-width: 375px) {
  .cards {
    width: 100%;
    max-width: 200px;
  }

  .left p:nth-child(1) {
    font-size: 24px;
  }

  .left p:nth-child(2) {
    font-size: 16px;
  }

  .benefit-title {
    font-size: 24px;
  }

  .block p {
    font-size: 16px;
  }
}

@media (max-width: 320px) {
  .section-title {
    font-size: 24px;
  }

  .left p:nth-child(1) {
    font-size: 22px;
  }

  .cards {
    height: 110px;
  }

  .cards img {
    height: 40px;
  }

  .cards p {
    font-size: 13px;
  }

  .benefit-card {
    padding: 15px;
  }

  .benefit-title {
    font-size: 20px;
  }

  .benefit-description {
    font-size: 14px;
  }

  .block {
    flex-direction: column;
    text-align: center;
    padding: 12px;
  }

  .block p {
    margin-right: 0;
    margin-bottom: 8px;
    font-size: 15px;
  }
}
</style>