<script setup lang="ts">

</script>

<template>
  <div class="section5">
    <div class="containerr">
      <h1 class="hs5">Наша команда инженеров, 1С-разработчиков и бизнес-аналитиков выполнит полный спектр работ по переходу на PostgreSQL под ключ:</h1>
      <steps><span class="sp5">1 этап &emsp; → &emsp;</span> Аудит продуктивной инфраструктуры и производительности 1С</steps>
      <steps><span class="sp5">2 этап &emsp; → &emsp;</span> Подготовка инфраструктурного ландшафта</steps>
      <steps><span class="sp5">3 этап &emsp; → &emsp;</span> Адаптация программных продуктов 1С для использования с PostgreSQL</steps>
      <steps><span class="sp5">4 этап &emsp; → &emsp;</span> Установка и настройка PostgreSQL</steps>
      <steps><span class="sp5">5 этап &emsp; → &emsp;</span> Пилотный запуск, полноценная миграция</steps>
      <steps><span class="sp5">6 этап &emsp; → &emsp;</span> Техподдержка</steps>
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
.section5{
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
.sp5{
  color: gray;
  font-size: 1.3rem;
}
.section5 p:nth-child(7){
  border: none;
}
</style>