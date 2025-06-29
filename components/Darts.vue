<script>
export default {
  data() {
    return {
      showWelcome: true,
      phase: 'config',
      numPlayers: 2,
      names: [],
      score: [],
      cur: 0,
      darts: 0,
      round: 1,
      nums: Array.from({ length: 20 }, (_,i) => i+1),
      rings: [
        { name:'one', label:'Обычное', mul:1 },
        { name:'tri', label:'Утроение', mul:3 },
        { name:'dub', label:'Удвоение', mul:2 },
      ],
    }
  },
  mounted() {
    setTimeout(() => this.showWelcome = false, 3000)
  },
  methods: {
    startGame() {
      this.names = Array.from({ length: this.numPlayers }, (_,i) => this.names[i] || 'Игрок'+(i+1))
      this.score = this.names.map(() => 501)
      this.phase = 'game'
    },
    isFinishable(x) {
      return (x === 50) || (x <= 40 && x % 2 === 0)
    },
    hit(n,m) {
      let pts = n*m
      let before = this.score[this.cur]
      let after = before - pts
      if (after < 0 || after === 1) return this.nextDart()
      if (after === 0) {
        if (!(m === 2 || (n === 25 && m === 2))) return this.nextDart()
        return this.end()
      }
      if (this.darts === 0 && !this.isFinishable(after) && (pts % 2 === 0)) {
        return this.nextDart()
      }
      this.score.splice(this.cur,1,after)
      this.nextDart()
    },
    noPoint() {
      this.nextDart()
    },
    nextDart() {
      this.darts++
      if (this.darts >= 3) {
        this.darts = 0
        this.cur = (this.cur+1)%this.numPlayers
        if (this.cur === 0) this.round++
        if (this.round > 20) return this.check()
      }
    },
    check() {
      let min = Math.min(...this.score)
      let cnt = this.score.filter(s=>s===min).length
      return this.end()
    },
    end() {
      this.phase = 'res'
    },
    reset() {
      this.phase = 'config'
      this.cur = 0
      this.darts = 0
      this.round = 1
      this.names = []
      this.score = []
    }
  },
  computed: {
    sorted() {
      return this.names.map((n,i)=>({name:n,score:this.score[i]}))
          .sort((a,b)=>a.score-b.score)
    }
  }
}
</script>

<template>
  <div id="app">
    <img class="dartsImg" src="/img/darts.png" alt="">
    <div v-if="showWelcome" class="overlay">
      <h1>Добро пожаловать в игру 501</h1>
    </div>

    <div v-else-if="phase === 'config'" class="main-center">
      <button class="prav">Правила игры</button>
      <div class="sel">
        <span>Игроков: </span>
        <button v-for="n in [2,3,4,5]" :key="n" @click="numPlayers = n" :class="{ selbtn: numPlayers === n }">
          {{ n }}
        </button>
      </div>
      <div class="names">
        <div v-for="i in numPlayers" :key="i">
          <label>Игрок {{ i }}:</label>
          <input v-model="names[i-1]" placeholder="Имя" />
        </div>
      </div>
      <button @click="startGame">Начать</button>
    </div>

    <div v-else-if="phase === 'game'" class="main-center">
      <button class="prav">Правила игры</button>
      <div class="players">
        <div v-for="(p, i) in names" :key="i" :class="['player', { active: cur === i }]">
          <span>{{ p }}</span> <span>{{ score[i] }}</span>
        </div>
      </div>
      <div class="round">Раунд {{ round }}</div>
      <table class="tab">
        <thead>
        <tr><th></th><th v-for="n in nums" :key="n">{{ n }}</th></tr>
        </thead>
        <tbody>
        <tr v-for="r in rings" :key="r.name">
          <td>{{ r.label }}</td>
          <td v-for="n in nums" :key="r.name + n" @click="hit(n, r.mul)">{{ n * r.mul }}</td>
        </tr>
        </tbody>
      </table>
      <div class="bull">
        <button @click="hit(25,1)">Зелёный (25)</button>
        <button @click="hit(25,2)">Яблочко (50)</button>
        <button class="nopoint" @click="noPoint">Не засчитывать</button>
      </div>
    </div>

    <div v-else class="overlay">
      <button class="prav">Правила игры</button>
      <h2>Итоги</h2>
      <ol>
        <li v-for="(p,i) in sorted" :key="i">{{ p.name }} — {{ p.score }}</li>
      </ol>
      <button @click="reset">Новая игра</button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

#app {
  font-family: 'Press Start 2P', cursive;
  background: #24292D;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main-center, .overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.sel span, .round, label, .overlay h1, .overlay h2 {
  font-size: 1.4rem;
  margin-bottom: 10px;
}
.players{
  display: flex;
  margin-bottom: 20px;
}
.sel button, input {
  margin: 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  background: #444;
  color: #fff;
  font-size: 1.1rem;
}
.selbtn {
  background: #F87036;
}
* button{
  margin: 8px;
  padding: 8px 12px;
  border:1px solid #F87036;
  border-radius: 8px;
  background: none;
  font-size: 1.1rem;
  color: white;
  transition: 0.2s;
  cursor: pointer;
}
button:hover, .nopoint:hover, .selbtn:hover {
  background: #F87036;
  transition: 0.2s;
}
.names input {
  width: 150px;
}
.player {
  margin: 8px;
  padding: 8px 12px;
  border:1px solid #555;
  border-radius: 8px;
  font-size: 1.1rem;
}
.active {
  background: #F87036;
  color: #24292D;
}
.tab {
  border-collapse: collapse;
  margin-top: 20px;
}
.tab td, .tab th {
  border:1px solid #555;
  padding:8px;
  text-align:center;
  font-size: 1rem;
}
.tab td:hover {
  background: #F87036;
  cursor: pointer;
}
.bull{
  margin-top: 20px;
}
.bull button {
  margin:5px;
}
th{
  color: #F87036;
}
li{
  margin-bottom: 15px;
}
.dartsImg{
  position: fixed;
  bottom: 10px;
  left: 10px;
  height: 50%;
}
table{
  background: #24292D;
  z-index: 1000;
}
.prav{
  position: fixed;
  top: 10px;
  right: 10px;
  background: #F87036;
  border: none;
}
.prav:hover{
  background: #9e4722;
  transition: 0.2s;
}
</style>
