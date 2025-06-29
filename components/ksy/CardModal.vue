<script>
import ModalWindow from "~/components/ksy/ModalWindow.vue";
 export default {
  components:{
    ModalWindow
  },
   data(){
     return{
       openWindow: false,
     }
   },
   methods:{
     closeWindow(value){
       this.openWindow = value;
     },
     openModal(){
       this.openWindow = true;
     }
   }
 }
</script>

<template>
  <div class="card_form">
    <h1>Остались вопросы?</h1>
    <h2 style="color: #5A606E; font-size: 1.5rem; margin-bottom: 40px; font-weight: 400">
      Наши эксперты оперативно предоставят консультацию и найдут оптимальное решение</h2>
    <div style="display: flex; justify-content: left; width: 100%">
      <button class="button" @click="openModal">Заказать консультацию</button>
    </div>
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
}

.card_form{
  width: 20rem;
  margin: 10px;
  border-radius: 16px;
  overflow: hidden;
  background: #ffffff;
  padding: 15px 25px;
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card_form:hover{
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-20px);
}
h1{
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 400;
  color: #151515
}
.button{
  border-radius: 20px;
  padding: 16px 28px;
  background-color: #2E3192;
  font-weight: 500;
  color: white;
  font-size: 18px;
  margin-bottom: 0;
  width: 85%
}
.button:hover{
  background-color: #151515;
}
</style>