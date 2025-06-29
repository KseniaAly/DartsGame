<script>
 export default {
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
      <div class="line first"></div>
      <div class="animation quote">
        <div class="column">
          <div style="margin-bottom: 48px">
            <img class="logo" src="./img/Vector.svg">
            <p>Мы не внедряем коробочные версии, чтобы получить бонус от Франчайзи, а предлагаем индивидуальное решение под задачи бизнеса с учетом IT-ландшафта нашего клиента, даже если это нам невыгодно в краткосрочной перспективе.</p>
          </div>
          <div>
            <h2>Статьи</h2>
            <div style="display: flex; align-items: center">
              <div class="column">
                <a style="margin-bottom: 20px">Как эффективно контролировать и координировать работу бэк-офиса ↗</a>
                <a>Как приживить бережливый офис в России ↗</a>
              </div>
              <div class="column" style="margin-left: 24px">
                <a style="margin-bottom: 20px">Как сократить затраты на сотрудников офиса ↗</a>
                <a>Как наведение порядка в отделе IT выросло в универсальную управленческую систему ↗</a>
              </div>
            </div>
          </div>
        </div>
        <div class="column person">
          <div class="image">
            <img src="./img/Malov.png">
          </div>
          <h3>Антон Малов</h3>
          <p>Директор ООО «Протон»</p>
        </div>
      </div>
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
  margin-top: 100px;
  margin-bottom: 50px;
}
.first{
  margin-bottom: 80px;
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
p{
  font-size: 28px;
  font-weight: 400;
  color: #151515;
  margin: 0;
  margin-top: 24px;
}
h2{
  font-weight: 400;
  font-size: 36px;
  color: #151515;
  margin: 0;
  margin-bottom: 24px;
}
.person{
  margin-left: 132px;
}
.quote{
  display: flex;
  align-items: center;
}
.image{
  overflow: hidden;
  width: 396px;
  height: 354px;
  border-radius: 40px;
  background-color: #FFD9D9;
}
.image img{
  width: 487px;
  margin-top: -57px;
  filter: grayscale(100%);
  transition: all 0.2s ease-in-out;
}
.image img:hover{
  filter: grayscale(0%);
}
.person h3{
  font-weight: 400;
  font-size: 36px;
  margin: 0;
  margin-top: 24px;
  color: #151515;
}
.person p{
  margin: 0;
  color: #5A606E;
  font-size: 24px;
  font-weight: 400;
}

.animation.quote .person{
  transform: translateX(100%);
  transition: all 0.7s;
}
.animation.quote.active .person{
  transform: translateX(0);
}

@media (max-width: 768px) {
  p{
    font-size: 18px;
  }
  .logo{
    width: 20px;
  }
  h2{
    font-size: 30px;
    margin-bottom: 20px;
  }
  .column a{
    font-size: 14px;
  }
  .person{
    margin-left: 60px;
  }
  .quote{
    align-items: start;
  }
  .image{
    width: 336px;
    height: 294px;
  }
  .image img{
    width: 400px;
  }
  .person h3{
    font-size: 26px;
    margin-top: 20px;
  }
  .person p{
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .quote{
    flex-direction: column-reverse;
  }
  .logo{
    display: none;
  }
  .person{
    margin-left: 0;
  }
  .line{
    margin-bottom: 0;
    margin-top: 50px;
  }
  .first{
    margin-top: 0;
    margin-bottom: 50px;
  }
  h2{
    font-size: 20px;
  }
  .person h3{
    font-size: 18px;
    margin-top: 15px;
  }
  .person p{
    font-size: 12px;
  }
  .image{
    width: 75%;
    height: 254px;
  }
  .image img{
    width: 400px;
  }
  p{
    font-size: 14px;
  }
  .column a{
    font-size: 12px;
  }
}
</style>