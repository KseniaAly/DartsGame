<script>
  export default {
  props:{
    card:{
      type: Object,
      required: true
    },
    index:{
      type: Number,
      required: true,
    }
  },
    methods:{
      hover(element){
        let block = element.target;
        block.style.cssText = `transform: translateY(-20px); transition: all 0.5s;`;
      },
      down(element){
        let block = element.target;
        block.style.transform = 'translateY(0)';
      }
    }
  }
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"/>

  <div class="block animation import-substitution" @mouseenter="hover" @mouseleave="down"
    :class="{'down_one':(this.index===1||this.index===3), 'down_second':(this.index===2),
    'delay_first':(this.index===1), 'delay_second':(this.index===2), 'delay_third':(this.index===3),
    'delay_four':(this.index===4)}">
    <i class="fa-solid" :class="this.card.svg" @mouseover.stop></i>
    <p @mouseover.stop>{{this.card.text}}</p>
  </div>
</template>

<style scoped>
  .block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 16rem;
    padding: 0.3rem;
    width: 16rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    transition: all 0.3s ease;
    border-radius: 28px;
    background-color: white
  }
  .fa-solid{
    color: #9AA3BB;
  }
  .block:hover .fa-solid{
    color: #151515;
  }
  .down_one{
    margin-top: 40px;
  }
  .down_second{
    margin-top: 80px;
  }
  p{
    font-size: 22px;
    text-align: center;
    font-weight: 400;
    font-family: Onest, Arial, sans-serif;
    color: #151515;
  }
  i{
    font-size: 30pt
  }

  .animation.import-substitution{
    transform: translateY(20%);
    transition: all 2s;
    opacity: 0;
  }
  .animation.import-substitution.active{
    transform: translateY(0);
    opacity: 1;
  }
  .animation.import-substitution.delay_first{
    transform: translateY(20%);
    transition: all 2s;
    transition-delay: 0.3s;
    opacity: 0;
  }
  .animation.import-substitution.delay_first.active{
    transform: translateY(0);
    opacity: 1;
  }
  .animation.import-substitution.delay_second{
    transform: translateY(20%);
    transition: all 2s;
    transition-delay: 0.6s;
    opacity: 0;
  }
  .animation.import-substitution.delay_second.active{
    transform: translateY(0);
    opacity: 1;
  }
  .animation.import-substitution.delay_third{
    transform: translateY(20%);
    transition: all 2s;
    transition-delay: 0.9s;
    opacity: 0;
  }
  .animation.import-substitution.delay_third.active{
    transform: translateY(0);
    opacity: 1;
  }
  .animation.import-substitution.delay_four{
    transform: translateY(20%);
    transition: all 2s;
    transition-delay: 1.2s;
    opacity: 0;
  }
  .animation.import-substitution.delay_four.active{
    transform: translateY(0);
    opacity: 1;
  }

  @media (max-width: 1200px) {
    .block{
      height: 18rem;
      width: 13rem;
      margin-left: 0.35rem;
      margin-right: 0.35rem;
    }
  }

  @media (max-width: 1024px) {
    .block{
      margin: 10px;
    }
  }

  @media (max-width: 768px) {
    .block{
      margin: 10px;
    }
  }

  @media (max-width: 480px) {
    p{
      font-size: 18px;
    }
    .block{
      padding: 10px;
    }
  }
</style>