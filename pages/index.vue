<script setup>
import FilterComponent from "~/components/ksy/FilterComponent.vue";
import FilterBrand from "~/components/ksy/FilterBrand.vue";
import Car from "~/components/ann/Car.vue";
import FeedBack from "~/components/mp/FeedBack.vue";
import HeaderUp from "~/components/mp/HeaderUp.vue";

import {ref} from "vue";

const click = ref(false);
function open(){
  click.value = !click.value;
}

let link = ref("/api/instock/?city_id=27&auto_type=3847");
function updateLink(newLink) {
  link.value = newLink;
  console.log(newLink)
}

let searchValue = ref('')
function search(newValue){
  searchValue.value = newValue;
}
</script>

<template>
  <header-up @search="search"/>
  <div class="page">
    <a class="catalog">Каталог коммерческой техники в Нижнем Новгороде</a>
    <filter-brand class="right"/>
    <button @click="open">
      <img src="/img/Union.svg">
      Фильтр
    </button>
    <button @click="wes">Изменить вес</button>
    <div class="block">
      <filter-component class="filter" :class="{ active: click }" @update="updateLink" />
      <car :link-new="link" :search-value="searchValue"/>
      <filter-brand class="left" @update="updateLink"/>
    </div>
  </div>
  <feed-back/>
</template>

<style scoped>
.catalog{
  font-size: 24px;
  margin-top: 20px;
  display: block;
  margin-bottom: 20px;
}
.page{
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  overflow-x: hidden;
  max-width: 1330px;
}
.block{
  display: flex;
}
.right{
  display: none;
}
button{
  display: none;
}

@media (max-width: 768px) {
  .right{
    display: flex;
    margin-bottom: 30px;
  }
  .left{
    display: none;
  }
  .catalog{
    font-size: 18px;
  }
  .page{
    max-width: 720px;
  }
}
@media (max-width: 480px) {
  .right{
    display: none;
  }
  .page{
    max-width: 90%;
  }
  button{
    display: block;
    margin-bottom: 20px;
    width: 100%;
    border-radius: 5px;
    background-color: #880003;
    border: none;
    padding: 5px;
    color: white;
    font-size: 16px;
  }
  .filter{
    display: none;
  }
  .active{
    display: block;
  }
}
</style>
