<script setup lang="ts">

</script>

<template>
  <div class="section6">
    <div class="containerr">
      <h1 class="hs5">С 2018 г. реализуем проекты по переводу инфраструктуры
        с MicrosoftSQL на PostgreSQL</h1>
      <div class="s6flex">
        <card-image>
          <p>1С на Linux и PostgreSQL. Кейс внедрения для 2,5 тыс. пользователей</p>
          <img src="../img/img.png" alt="">
        </card-image>

        <card-image>
          <p>Перевод рабочих станций на Linux в федеральном автохолдинге</p>
          <img src="../img/img2.png" alt="">
        </card-image>
      </div>
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
.section6{
  display: grid;
  justify-items: center;
  border-bottom: 2px solid gray;
  padding-bottom: 50px;
  padding-top: 50px;
}
.containerr{
  display: grid;
  max-width: 1440px;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
}
.hs5{
  width: 70%;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 2.5rem;
}
.s6flex{
  display: flex;
  justify-content: center;
}
.s6flex p{
  font-size: 1.3rem;
}
.s6flex img{
  width: 55%
}

@media screen and (max-width: 941px){
  .s6flex{
    display: grid;
    justify-items: center;
  }
}
</style>