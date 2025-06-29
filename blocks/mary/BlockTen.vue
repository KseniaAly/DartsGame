<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1
  })

  document.querySelectorAll('.benefit-card').forEach(card => {
    observer.observe(card)
  })
})
</script>

<template>
  <div class="container">
    <div class="imp">
      <h2 class="section-title">Результат импортозамещения с «Протон»</h2>
      <div class="benefits-grid">
        <div class="benefit-card">
          <h3 class="benefit-title">Экономия ресурсов</h3>
          <p class="benefit-description">Интеграция российского софта и оборудования в имеющуюся инфраструктуру без приостановки работы</p>
        </div>

        <div class="benefit-card">
          <h3 class="benefit-title">Индивидуальные решения</h3>
          <p class="benefit-description">Индивидуальное решение в рамках потребностей компании с учетом отрасли экономики и вашего IT-ландшафта</p>
        </div>

        <div class="benefit-card">
          <h3 class="benefit-title">Стратегия импортозамещения</h3>
          <p class="benefit-description">Импортозамещение в соответствии с вашим планом цифровой трансформации</p>
        </div>

        <div class="benefit-card">
          <h3 class="benefit-title">Единое окно</h3>
          <p class="benefit-description">Полный цикл работ от профессиональной команды в рамках одного договора – от аудита и разработки стратегии до поддержки</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&display=swap');
* {
  font-size: 18px;
  font-family: 'Onest';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  overflow-x: hidden;
  border-bottom: 1px solid gray;
}

.section-title {
  font-size: 48px;
  font-weight: 400;
  color: #333;
  line-height: 1.2;
}

.imp {
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  padding: 50px 0;
  gap: 40px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.benefit-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.benefit-card.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Порядок анимации карточек */
.benefit-card:nth-child(1).visible {
  transition-delay: 0.1s;
}
.benefit-card:nth-child(2).visible {
  transition-delay: 0.2s;
}
.benefit-card:nth-child(3).visible {
  transition-delay: 0.3s;
}
.benefit-card:nth-child(4).visible {
  transition-delay: 0.4s;
}

.benefit-title {
  font-size: 35px;
  margin-bottom: 8px;
  font-weight: normal;
  line-height: 1.2;
}

.benefit-description {
  font-size: 19px;
  line-height: 1.6;
  color: #5a606e;
}

@media (max-width: 1200px) {
  .section-title {
    font-size: 42px;
  }

  .benefit-title {
    font-size: 32px;
  }

  .benefit-description {
    font-size: 18px;
  }
}

@media (max-width: 992px) {
  .section-title {
    font-size: 36px;
  }

  .benefit-title {
    font-size: 28px;
  }

  .benefit-description {
    font-size: 17px;
  }

  .imp {
    padding: 40px 0;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .benefit-card {
    padding: 25px;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 15px;
  }

  .imp {
    padding: 30px 0;
    gap: 25px;
  }

  .section-title {
    font-size: 28px;
  }

  .benefit-title {
    font-size: 24px;
  }

  .benefit-description {
    font-size: 16px;
  }

  .benefit-card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 26px;
  }

  .benefit-title {
    font-size: 22px;
  }

  .benefit-description {
    font-size: 15px;
  }

  .imp {
    gap: 20px;
  }
}

@media (max-width: 375px) {
  .section-title {
    font-size: 24px;
  }

  .benefit-title {
    font-size: 20px;
  }

  .benefit-description {
    font-size: 14px;
    line-height: 1.5;
  }

  .benefit-card {
    padding: 18px;
    border-radius: 16px;
  }
}

@media (max-width: 320px) {
  .container {
    padding: 10px;
  }

  .section-title {
    font-size: 22px;
  }

  .benefit-title {
    font-size: 18px;
  }

  .benefit-description {
    font-size: 13px;
  }

  .imp {
    padding: 25px 0;
    gap: 15px;
  }

  .benefit-card {
    padding: 15px;
  }
}
</style>