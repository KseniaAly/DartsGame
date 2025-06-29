<script>
export default {
  props: {
    isOpen: Boolean
  },
  data() {
    return {
      showDetailed: false
    }
  },
  methods: {
    close() {
      this.$emit('close')
      this.showDetailed = false
    }
  }
}
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <h2>Правила игры 501</h2>
      <button class="close-btn" @click="close">×</button>

      <div class="rules-content">
        <div class="rules-section basic-rules">
          <h3>Основные правила</h3>
          <ul>
            <li>🎯 Каждый игрок начинает с 501 очка</li>
            <li>🏆 Цель - первым уменьшить свой счет точно до 0</li>
            <li>🔄 Игроки ходят по очереди, бросая по 3 дротика за подход</li>
            <li>🎯 Последний бросок должен быть в удвоение (внешнее кольцо) или яблочко (50)</li>
            <li>⏱️ Игра продолжается до тех пор, пока один из игроков не закончит игру</li>
          </ul>
        </div>

        <button class="toggle-rules" @click="showDetailed = !showDetailed">
          {{ showDetailed ? '▲ Скрыть дополнительные правила ▲' : '▼ Показать дополнительные правила ▼' }}
        </button>

        <div v-if="showDetailed" class="detailed-rules">
          <div class="rules-section">
            <h3>Система подсчета очков</h3>
            <ul>
              <li>🔢 Обычное попадание: очки равны числу на секторе</li>
              <li>🟢 Удвоение (внешнее кольцо): очки ×2</li>
              <li>🔴 Утроение (внутреннее кольцо): очки ×3</li>
              <li>🎯 Яблочко (центр): 50 очков (зеленое кольцо - 25 очков)</li>
            </ul>
          </div>

          <div class="rules-section">
            <h3>Правила завершения игры</h3>
            <ul>
              <li>✅ Последний бросок ДОЛЖЕН быть в удвоение или яблочко</li>
              <li>❌ Если последний бросок не соответствует правилам, счет возвращается</li>
              <li>⚠️ Если очки становятся меньше 0 или равны 1 - подход не засчитывается</li>
              <li>📉 При "переборе" (очки уходят в минус) - очки подхода аннулируются</li>
            </ul>
          </div>

          <div class="rules-section">
            <h3>Дополнительные правила</h3>
            <ul>
              <li>⏳ Максимальное количество раундов: 20 (по умолчанию)</li>
              <li>📌 Если никто не выиграл за 20 раундов - побеждает игрок с наименьшим счетом</li>
              <li>🤝 При ничьей может быть назначен дополнительный раунд</li>
              <li>📏 Расстояние до мишени: 2,37 м (стандарт)</li>
              <li>📏 Высота мишени: 1,73 м от центра до пола</li>
            </ul>
          </div>

          <div class="rules-section tips">
            <h3>Советы для новичков</h3>
            <ul>
              <li>🎯 Тренируйтесь попадать в удвоения - это ключ к победе</li>
              <li>🧮 Планируйте свои подходы, чтобы оставить удобное число для завершения</li>
              <li>📊 Популярные финишные комбинации: 32, 40, 50</li>
              <li>💪 Развивайте стабильность броска, а не только силу</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 15px;
}

.modal-content {
  background: #24292D;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  border: 2px solid #F87036;
  position: relative;
  box-sizing: border-box;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rules-content {
  margin-top: 20px;
}

.toggle-rules {
  margin: 15px 0;
  background: transparent;
  border: 2px solid #F87036;
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.6rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  box-sizing: border-box;
}

.toggle-rules:hover {
  background: #F87036;
  color: #24292D;
  box-shadow: 0 0 10px rgba(248, 112, 54, 0.7);
}

.detailed-rules {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #555;
}

h2 {
  color: #F87036;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

h3 {
  color: #F87036;
  margin: 15px 0 10px;
  font-size: 1.1rem;
}

ul {
  padding-left: 20px;
  margin: 0 0 15px 0;
}

li {
  margin-bottom: 8px;
  font-size: 0.9rem;
  line-height: 1.4;
  word-break: break-word;
}

.rules-section {
  margin-bottom: 15px;
}

@media (max-width: 480px) {
  .modal-content {
    padding: 15px;
  }

  h2 {
    font-size: 1.3rem;
    padding-right: 30px;
  }

  h3 {
    font-size: 1rem;
  }

  li {
    font-size: 0.85rem;
  }

  .toggle-rules {
    font-size: 0.5rem;
    padding: 6px 10px;
  }

  .close-btn {
    top: 5px;
    right: 5px;
    font-size: 1.3rem;
  }
}

.toggle-rules::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%, -50%);
  transform-origin: 50% 50%;
}
</style>