<script>
import { ref } from 'vue';
import ModalWindow from "~/components/ksy/ModalWindow.vue";
export default {
  components:{
    ModalWindow,
  },
  data(){
    return{
      openWindow: false,
    }
  },
  methods:{
    closeWindow(){
      this.openWindow = false;
    },
    openModal(){
      this.openWindow = true;
    }
  }
}

const isMenuOpen = ref(false);
</script>


<template>
  <div class="section1">
    <div class="containerr">
      <header class="app-header">
        <div class="container">
          <div class="logo-placeholder">
            <img src="../img/Vector.png" alt="">
            Протон</div>
          <div class="burger" @click="isMenuOpen = !isMenuOpen">
            ☰
          </div>

          <nav class="nav" :class="{ open: isMenuOpen }">
            <a href="#">Блог</a>
            <a href="tel:+78312621876">+7 (831) 262-18-76</a>
            <a href="mailto:sales@proton-group.ru">sales@proton-group.ru</a>
            <button class="btn-outline" @click="openModal">Заказать консультацию</button>
          </nav>

        </div>

      </header>
    </div>


    <section class="section11">
      <div class="content">
        <h1 class="staircase-heading">
          <span class="line-1">Переводим <span class="gray arrows">
            <span class="arrow">→</span>
            <span class="arrow">→</span>
            <span class="arrow">→</span>
            <span class="arrow">→</span>
            <span class="arrow">→</span>
          </span></span>
          <span class="line-2">на отечественные решения</span>
          <span class="line-3">компании любых размеров</span>
        </h1>

        <div class="bottom-row">
          <div class="buttons">
            <button class="btn-primary" @click="openModal">Заказать консультацию</button>
            <a href="#" class="case-link">Читать кейс</a>
          </div>
          <p class="description">
            В короткие сроки реализуем проекты по переводу всех элементов IT-инфраструктуры на российские и Open-Source технологии, сохраняя эффективность централизованного управления.
          </p>
        </div>
      </div>
    </section>
  </div>
  <modal-window :open="openWindow" @close="closeWindow"/>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&display=swap');
*{
  font-size: 1.1rem;
  font-family: 'Onest';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.section1{
  padding-top: 50px;
  border-bottom: 2px solid gray;
}
.section11 {
  padding: 60px 24px;
}
.containerr{
  display: grid;
  max-width: 1440px;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
}
.app-header {
  background: #ffffff;
  padding: 8px 10px;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  width: 95%;
  position: fixed;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-placeholder {
  font-weight: 600;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 10px;
}
.nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav a{
  text-decoration: none;
  color: #2e3192;
  font-weight: bold;
  padding: 15px;
  transition: 0.2s;
}
.nav a:hover{
  background: #f2f5fd;
  padding: 15px;
  border-radius: 15px;
  transition: 0.2s;
}
.arrow{
  color: gray;
  font-size: 4rem;
  font-weight: 300;
}

.nav button{
  height: 50px;
  color: #2e3192;
  font-weight: bold;
  border-radius: 15px;
  transition: 0.2s;
}
.nav button:hover{
  background: #2e3192;
  transition: 0.2s;
  color: #fff;
}

.btn-outline {
  background: #f4f7ff;
  border-radius: 12px;
  padding: 8px 16px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-outline:hover {
  background: #e4eaff;
}
.content {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.staircase-heading {
  font-size: 5rem;
  line-height: 1.3;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.staircase-heading .line-1 {
  display: flex;
  justify-content: start;
  font-size: 4rem;
  font-weight: 300;
}

.staircase-heading .line-2 {
  display: flex;
  justify-content: center;
  font-size: 4rem;
  font-weight: 300;
}

.staircase-heading .line-3 {
  display: flex;
  justify-content: end;
  font-size: 4rem;
  font-weight: 300;
}

.bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.buttons {
  display: flex;
  gap: 20px;
  align-items: center;
}

.buttons button{
  background: #2e3192;
  border-radius: 15px;
  transition: 0.3s;
}
.buttons button:hover{
  background: #151515;
  border-radius: 15px;
  transition: 0.3s;
}


.btn-primary {
  background: #1a1b50;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px 24px;
  font-weight: 500;
  cursor: pointer;
}

.case-link {
  padding: 12px 20px;
  color: #1a1b50;
  text-decoration: none;
  font-weight: 500;
  border-radius: 15px;
  transition: 0.3s;
}
.case-link:hover {
  color: #1a1b50;
  background: white;
  transition: 0.3s;
}

.description {
  max-width: 600px;
  color: #1a1b50;
}

@media (max-width: 1024px) {
  .staircase-heading {
    font-size: 3.5rem;
  }

  .staircase-heading .line-1,
  .staircase-heading .line-2,
  .staircase-heading .line-3 {
    font-size: 2.8rem;
  }

  .nav {
    gap: 20px;
  }

  .description {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .staircase-heading {
    font-size: 2.4rem;
    gap: 4px;
  }

  .staircase-heading .line-1,
  .staircase-heading .line-2,
  .staircase-heading .line-3 {
    font-size: 2rem;
    justify-content: flex-start !important;
  }

  .bottom-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .buttons {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }

  .btn-primary,
  .case-link {
    width: 100%;
    text-align: center;
  }

  .description {
    max-width: 100%;
  }

  .app-header {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .staircase-heading {
    font-size: 1.8rem;
  }

  .staircase-heading .line-1,
  .staircase-heading .line-2,
  .staircase-heading .line-3 {
    font-size: 1.5rem;
  }

  .nav a {
    padding: 10px;
  }

  .btn-outline {
    width: 100%;
  }

  .btn-primary {
    padding: 12px;
    font-size: 1rem;
  }

  .case-link {
    padding: 10px;
    font-size: 1rem;
  }
}

.burger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  color: #2e3192;
}

@media (max-width: 768px) {
  .burger {
    display: block;
  }

  .nav {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: 10px;
  }

  .nav.open {
    display: flex;
  }

}
.gray.arrows {
  display: inline-flex;
  gap: 4px;
}


.arrow {
  display: inline;
}


@media (max-width: 1200px) {
  .arrow:nth-child(5) {
    display: none;
  }
}


@media (max-width: 992px) {
  .arrow:nth-child(4) {
    display: none;
  }
}


@media (max-width: 768px) {
  .arrow:nth-child(3) {
    display: none;
  }
}

@media (max-width: 576px) {
  .arrow:nth-child(2) {
    display: none;
  }
}


@media (max-width: 400px) {
  .arrow:nth-child(1) {
    display: none;
  }
}

</style>