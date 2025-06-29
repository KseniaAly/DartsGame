<script>
import VueCards from "~/components/ksy/VueCards.vue";
 export default {
  components:{
    VueCards
  },
   data(){
     return{
       cards: [
         {text: '1С: Перевод СУБД на PostgreSQL. Перевод серверов приложений 1С на Linux', svg: 'fa-server'},
         {text: 'Инфраструктура рабочих мест', svg: 'fa-desktop'},
         {text: 'Унифицированные коммуникации', svg: 'fa-comment'},
         {text: 'Централизованное управление конфигурациями и пользователями', svg: 'fa-sliders'},
         {text: 'Миграции инфраструктуры из AWS, GCP, Azure в Яндекс.Облако или SberCloud', svg: 'fa-cloud'}
       ]
     }
   },
   methods:{
     scroll(){
       let options = {
         root: null,
         rootMargin: '5px',
         threshold: 0.5
       }
       let callback = function (entries, observer){
         entries.forEach(entry => {
           if (entry.isIntersecting){
             console.log('find', entry);
             entry.target.classList.add('active');
           }
         })
       }
       let observer = new IntersectionObserver(callback, options)
       let target = document.querySelectorAll('.animation')
       target.forEach(target=>{
         observer.observe(target);
       })
     }
   },
   mounted() {
     this.scroll();
   }
 }
</script>

<template>
  <div class="section">
    <div class="container">
      <div class="column">
        <h1>Импортозамещение всех элементов инфраструктуры</h1>
        <div class="cards">
          <vue-cards v-for="(card, index) in cards" :index="index"  :card="card"/>
        </div>
      </div>
      <div class="animation import-substitution column images">
        <div class="row">
          <img src="./img/postgresql.svg">
          <img src="./img/debian.svg">
          <img src="./img/basealt.svg">
          <img src="./img/astra-linux.svg">
          <img src="./img/linux.svg">
        </div>
        <div class="row">
          <img src="./img/libreoffice.svg">
          <img src="./img/jitsy.svg">
          <img src="./img/rocket.chat.svg">
        </div>
      </div>
      <p>Внедряем отечественное и свободное программное обеспечение</p>
      <div class="line"></div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&display=swap');
*{
  font-size: 1.1rem;
  font-family: 'Onest';
  margin: 0;
  padding: 0;
}

.section{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.container{
  width: 90%;
}
.column{
  display: flex; flex-direction: column; align-items: center
}
.cards{
  display: flex;
  justify-content: center;
  padding-left: 80px;
  padding-right: 80px;
}
h1{
  color: #151515;
  text-align: center;
  font-weight: 400;
  font-size: 48px;
  width: 1030px;
  margin-bottom: 20px;
}
.row{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
}
p{
  margin: 0;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  margin-top: 40px;
  color: #5A606E
}
.line{
  background-color: #151515;
  height: 1px;
  margin-top: 50px;
}

.animation.import-substitution .row:nth-child(1) img:nth-child(1){
  transform: translateY(20%);
  transition: all 2s;
  opacity: 0;
}
.animation.import-substitution.active .row:nth-child(1) img:nth-child(1){
  transform: translateY(0);
  opacity: 1;
}
.animation.import-substitution .row:nth-child(1) img:nth-child(2){
  transform: translateY(20%);
  transition: all 2s;
  transition-delay: 0.2s;
  opacity: 0;
}
.animation.import-substitution.active .row:nth-child(1) img:nth-child(2){
  transform: translateY(0);
  opacity: 1;
}
.animation.import-substitution .row:nth-child(1) img:nth-child(3){
  transform: translateY(20%);
  transition: all 2s;
  transition-delay: 0.4s;
  opacity: 0;
}
.animation.import-substitution.active .row:nth-child(1) img:nth-child(3){
  transform: translateY(0);
  opacity: 1;
}
.animation.import-substitution .row:nth-child(1) img:nth-child(4){
  transform: translateY(20%);
  transition: all 2s;
  transition-delay: 0.6s;
  opacity: 0;
}
.animation.import-substitution.active .row:nth-child(1) img:nth-child(4){
  transform: translateY(0);
  opacity: 1;
}
.animation.import-substitution .row:nth-child(1) img:nth-child(5){
  transform: translateY(20%);
  transition: all 2s;
  transition-delay: 0.8s;
  opacity: 0;
}
.animation.import-substitution.active .row:nth-child(1) img:nth-child(5){
  transform: translateY(0);
  opacity: 1;
}

.animation.import-substitution .row:nth-child(2) img:nth-child(1){
  transform: translateY(20%);
  transition: all 2s;
  transition-delay: 1s;
  opacity: 0;
}
.animation.import-substitution.active .row:nth-child(2) img:nth-child(1){
  transform: translateY(0);
  opacity: 1;
}
.animation.import-substitution .row:nth-child(2) img:nth-child(2){
  transform: translateY(10%);
  transition: all 2s;
  transition-delay: 1.2s;
  opacity: 0;
}
.animation.import-substitution.active .row:nth-child(2) img:nth-child(2){
  transform: translateY(0);
  opacity: 1;
}
.animation.import-substitution .row:nth-child(2) img:nth-child(3){
  transform: translateY(20%);
  transition: all 2s;
  transition-delay: 1.4s;
  opacity: 0;
}
.animation.import-substitution.active .row:nth-child(2) img:nth-child(3){
  transform: translateY(0);
  opacity: 1;
}

@media (max-width: 1024px) {
  .cards{
    flex-wrap: wrap;
    padding: 0;
  }
}

@media (max-width: 768px) {
  .cards{
    flex-wrap: wrap;
    padding: 0;
  }
  h1{
    font-size: 40px;
    width: 760px;
  }
  .images{
    flex-direction: row;
    align-items: center;
    overflow-x: hidden;
    flex-wrap: wrap;
  }
  .images img{
    margin-right: 40px;
  }
}

@media (max-width: 480px) {
  h1{
    font-size: 30px;
    width: 100%;
  }
  .images{
    flex-direction: column;
  }
  .images img{
    margin-right: 0;
    margin-top: 40px;
  }
  .row{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 0;
  }
  p{
    font-size: 18px;
  }
}
</style>