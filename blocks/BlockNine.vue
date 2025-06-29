<script setup lang="ts">
  import CardModal from "~/components/ksy/CardModal.vue";
</script>

<template>
  <div class="section9">
    <div class="containerr">
      <div class="s9flex">
        <card-people>
          <template #image>
            <img src="../img/Kurmanov.png" alt="Фото 2" />
          </template>
          <template #name>
            Денис Курманов
          </template>
          <template #bio>
            Начальник технического блока,
            компания «Протон»
          </template>
          <template #keys>Кейсы 3</template>
          <template #stat>Статьи 4</template>
        </card-people>

        <card-people>
          <template #image>
            <img src="../img/Tapilin.png" alt="Фото 2" />
          </template>
          <template #name>
            Алексей Тапилин
          </template>
          <template #bio>
            Руководитель проектов,
            компания «Протон»
          </template>
          <template #keys>Кейсы 1</template>
          <template #stat>Статьи 3</template>
        </card-people>

        <card-people>
          <template #image>
            <img src="../img/Tulina.png" alt="Фото 2" />
          </template>
          <template #name>
            Надежда Тюлина
          </template>
          <template #bio>
            Руководитель проектов и бизнес-аналитик, компания «Протон»
          </template>
          <template #keys>Кейсы 1</template>
          <template #stat>Статьи 1</template>
        </card-people>

        <card-people>
          <template #image>
            <img src="../img/Davidov.png" alt="Фото 2" />
          </template>
          <template #name>
            Руслан Давыдов
          </template>
          <template #bio>
            Руководитель проектов,
            компания «Протон»
          </template>
          <template #keys>Кейсы 0</template>
          <template #stat>Статьи 3</template>
        </card-people>
        <card-modal/>
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
.section9{
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



.s9flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>