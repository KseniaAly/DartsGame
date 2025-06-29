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
  <div class="section">
    <div class="container">
      <div class="line" style="margin-bottom: 60px"></div>
      <div class="footer" style="display: flex; justify-content: space-between; align-items: start">
        <div class="row links">
          <img src="./img/proton-logo.svg">
          <div class="column">
            <a>Блог</a>
            <a>Согласие на обработку данных</a>
            <a>Политика конфиденциальности</a>
          </div>
        </div>
        <div class="row">
          <div class="column links tel">
            <div style="margin-bottom: 32px">
              <a>+7 (831) 262-18-76</a>
            </div>
            <div style="margin-bottom: 32px">
              <a>sales@proton-group.ru</a>
            </div>
            <p>г. Нижний Новгород, ул. Родионова, д. 203, оф. 405</p>
            <p>г. Москва, пр-д Электродный, д. 8а, оф. 19</p>
          </div>
          <div class="column tel" style="display: flex; flex-direction: column; align-items: end">
            <button class="button" @click="openModal">Заказать консультацию</button>
            <div style="display: flex; align-items: center; justify-content: right">
              <a style="padding: 16px"><img src="./img/vk.svg"></a>
              <a style="padding: 16px"><img src="./img/youtube.svg"></a>
              <a style="padding: 16px"><img src="./img/telegram.svg"></a>
              <a style="padding: 16px"><img src="./img/gandiva.svg"></a>
            </div>
          </div>
        </div>
      </div>
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

.section{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  width: 90%;
}
.line{
  background-color: #151515;
  height: 1px;
}
.row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.column{
  display: flex;
  flex-direction: column;
}
.column a{
  color: #2E3192;
  font-weight: 500;
  font-family: Onest, Arial, sans-serif;
  font-size: 20px;
  text-align: left;
}
.column a:hover{
  color: #151515;
  cursor: pointer;
}
.links a{
  padding: 16px 28px;
}
.tel a:hover{
  background-color: #FFFFFF;
  width: 100%;
  color: #2E3192;
  border-radius: 20px;
}
.button{
  border-radius: 20px;
  padding: 16px 28px;
  background-color: #2E3192;
  font-weight: 500;
  color: white;
  font-size: 20px;
  font-family: Onest, Arial, sans-serif;
  width: 100%;
  margin-bottom: 24px;
}
.footer .column{
  width: 372px;
}
.button:hover{
  background-color: #151515;
}
.column p{
  font-weight: 500;
  font-family: Onest, Arial, sans-serif;
  font-size: 20px;
  color: #151515;
  padding: 16px 28px;
  margin: 0
}
.links img{
  width: 140px;
}

@media (max-width: 1024px) {
  .row{
    flex-direction: column;
  }
  .row:nth-child(2){
    flex-direction: row;
  }
  .row img{
    margin-bottom: 20px;
  }
  .row .column{
    width: 100%;
  }
  .column a{
    font-size: 18px;
  }
  .column p{
    font-size: 18px;
  }
  .button{
    padding: 14px 26px;
    font-size: 18px;
    margin-bottom: 10px;
  }
}

@media (max-width: 768px) {
  .row{
    flex-direction: column;
  }
  .row img{
    margin-bottom: 20px;
  }
  .row .column{
    width: 50%;
  }
  .column a{
    font-size: 18px;
  }
  .column p{
    font-size: 18px;
  }
  .button{
    padding: 14px 26px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .links a{
    padding: 0;
    margin-bottom: 20px;
  }
  .column p{
    padding: 0;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .row:nth-child(2){
    flex-direction: column-reverse;
    margin-left: 10px;
  }
  .row .column{
    width: 100%;
  }
  .column a{
    font-size: 14px;
  }
  .column p{
    font-size: 14px;
  }
  .button{
    padding: 10px 20px;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .links img{
    width: 50%;
  }
  .row img{
    margin-bottom: 10px;
  }
}
</style>