<script setup lang="ts">

</script>

<template>
  <div class="section7">
    <div class="containerr">
      <h1 class="hs5">Направления деятельности «Протон»</h1>
      <div class="s7flex">
        <card-info>
          <template #left>
            <h1 class="hs7">IT-инфраструктура</h1>
            <img src="../img/illustration1.png" alt="">
          </template>
          <template #right>
            <spokes :links="[
            {
              text: 'Кейс построения инфраструктуры на производственном предприятии ↗',
              url: 'https://proton-group.ru/pdf/protonGroup/Kejs_Fabrika_kompozitov_Infrastruktura.pdf'
            },
            {
              text: 'Как перенести 1С международной сети пиццерий Додо-пицца в Yandex.Cloud ↗',
              url: 'https://proton-group.ru/pdf/protonGroup/Kejs_DoDo_perenos_1S_v_oblako.pdf'
            }
          ]">Построение IT-инфраструктуры и сопровождение серверных мощностей</spokes>
            <spokes :links="[
            {
              text: 'Организация телефонии контакт-центров на базе OpenSource-решения Asterisk ↗',
              url: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proton-group.ru/pdf/protonGroup/proton-cases-asterisk.pdf'
            },
            {
              text: 'Построение общекорпоративной платформы для коммуникации и видеосвязи на базе Jitsi Meet ↗',
              url: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proton-group.ru/pdf/protonGroup/proton-jitsi-2022.pdf'
            }
          ]">Внедрение и сопровождение отечественных и Open-Source решений</spokes>
          </template>
        </card-info>

        <card-info>
          <template #left>
            <h1 class="hs7">Бизнес-аудит</h1>
            <img src="../img/illustration2.png" alt="">
          </template>
          <template #right>
            <spokes :links="[
            {
              text: 'Внедрение процессного управления на предприятии ЖКХ-отрасли ↗',
              url: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proton-group.ru/pdf/protonGroup/Kejs_Nizhegorodskij_vodokanal.pdf'
            },
            {
              text: 'Автоматизация процессов управления федеральным холдингом АГАТ-групп ↗',
              url: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proton-group.ru/pdf/protonGroup/Kejs_Agat.pdf'
            }
          ]">Диагностика и оптимизация бизнес-процессов предприятия, внедрение решений для автоматизации процессов бизнеса</spokes>
            <spokes :links="[
            {
              text: 'Оптимизация административных процессов по принципам Лин в Иркутской нефтяной компании ↗',
              url: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proton-group.ru/pdf/protonGroup/Kejs_Irkutskaya_Neftyanaya_Kompaniya.pdf'
            },
            {
              text: 'Автоматизация бизнес-процессов регионального оператора «Чистый город» ↗',
              url: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proton-group.ru/pdf/protonGroup/Kejs_Chistyj_gorod.pdf'
            }
          ]">Разработка собственных решений для контроля, оптимизации и автоматизации процессов бизнеса (GANDIVA)</spokes>
            <spokes :links="[
            {
              text: 'Внедрение процессного управления в федеральной аптечной сети «Максавит» ↗',
              url: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proton-group.ru/pdf/protonGroup/proton-cases-maksavit-v2-p.pdf'
            },
            {
              text: 'Оптимизация структуры и централизация управления федеральным строительным холдингом «Саксэс» ↗',
              url: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proton-group.ru/pdf/protonGroup/Kejs_SAKSEHS.pdf'
            }
          ]">Услуги по построению общих центров обслуживания (ОЦО) для среднего и крупного бизнеса</spokes>
          </template>
        </card-info>

        <card-info>
          <template #left>
            <h1 class="hs7">1С:Франчайзи</h1>
            <img src="../img/illustration3.png" alt="">
          </template>
          <template #right>
            <spokes :links="[
            {
              text: 'Внедрение ERP-системы на производственном предприятии ↗',
              url: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proton-group.ru/pdf/protonGroup/Kejs_Fabrika_kompozitov_ERP.pdf'
            },
            {
              text: 'Переход с 1С:УПП на современные ERP-системы на предприятии «ДайдоМеталлРусь» ↗',
              url: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proton-group.ru/pdf/protonGroup/Kejs_Dajdo_ERP.pdf'
            }
          ]">Квалифицированная разработка, адаптация и модификация продуктов на платформе 1С:Предприятие</spokes>
            <spokes :links="[
            {
              text: 'Внедрение документооборота на базе 1С:УПП, с маршрутизацией и согласованием через цифровую платформу GANDIVA ↗',
              url: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proton-group.ru/pdf/protonGroup/Kejs_SMK%20_1S_Gandiva.pdf'
            },
            {
              text: 'Интеграция 1С и Честного знака для ДЦ «Лада Альметьевск» ↗',
              url: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proton-group.ru/pdf/protonGroup/Kejs_Chestnyj_znak.pdf'
            }
          ]">Техническая поддержка решений на платформе 1С:Предприятие</spokes>
          </template>
        </card-info>

        <card-info>
          <template #left>
            <h1 class="hs7">Телематика</h1>
            <img src="../img/illustration3.png" alt="">
          </template>
          <template #right>
            <spokes :links="[
            {
              text: 'Внедрение системы телематики ↗',
              url: 'https://proton-group.ru/telematics/'
            },
          ]">Разработка собственных решений для мониторинга и управления автопарком (Протон Телематика)</spokes>
          </template>
        </card-info>
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
.section7{
  display: grid;
  justify-items: center;
  padding-bottom: 50px;
  padding-top: 50px;
}
.hs7{
  text-align: center;
  font-size: 1.7rem;
  font-weight: 300;
}
.s7flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.s7flex img{
  width: 200px;
}
</style>