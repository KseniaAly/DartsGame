import { mount } from '@vue/test-utils'
import Darts from '../../components/Darts.vue'
import { expect } from 'chai'
import sinon from 'sinon'

describe('Компонент Darts', () => {
    let wrapper
    let clock

    beforeEach(() => {
        clock = sinon.useFakeTimers()
        wrapper = mount(Darts)
    })

    afterEach(() => {
        clock.restore()
        wrapper.unmount()
    })

    it('начинается в фазе config с приветствием во весь экран', () => {
        expect(wrapper.vm.phase).to.equal('config')
        expect(wrapper.vm.showWelcome).to.be.true
    })

    it('скрывает приветствие через 3 секунды', async () => {
        clock.tick(3000)
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.showWelcome).to.be.false
    })

    it('startGame считывает имена игроков, добавляет счёт и переходит в фазу игры', () => {
        wrapper.setData({ numPlayers: 3, names: ['A','B','C'] })
        wrapper.vm.startGame()
        expect(wrapper.vm.phase).to.equal('game')
        expect(wrapper.vm.score).to.deep.equal([501,501,501])
    })

    it('hit уменьшает счёт при корректном попадании', () => {
        wrapper.setData({ phase: 'game', score: [501], numPlayers: 1 })
        wrapper.vm.hit(20, 1)
        expect(wrapper.vm.score[0]).to.equal(481)
    })

    it('при bust счёт игрока не меняется, но увеличивается счётчик бросков', () => {
        wrapper.setData({ phase: 'game', score: [10], numPlayers: 1, darts: 0 })
        wrapper.vm.hit(6, 2)
        expect(wrapper.vm.score[0]).to.equal(10)
        expect(wrapper.vm.darts).to.equal(1)
    })

    it('noPoint учитывает бросок без добавления очков', () => {
        wrapper.setData({ phase: 'game', score: [501], darts: 1 })
        wrapper.vm.noPoint()
        expect(wrapper.vm.darts).to.equal(2)
        expect(wrapper.vm.score[0]).to.equal(501)
    })

    it('для финиша на 0 последним броском должен быть double-out или булл50', () => {
        wrapper.setData({ phase: 'game', score: [4], numPlayers: 1, darts: 0 })
        wrapper.vm.hit(2,1)
        expect(wrapper.vm.phase).to.equal('game')
        wrapper.vm.hit(1,2)
        expect(wrapper.vm.phase).to.equal('res')
    })

    it('после полного круга увеличивает номер раунда', () => {
        wrapper.setData({ phase: 'game', numPlayers: 2, darts: 2, cur: 1, round: 1 })
        wrapper.vm.nextDart()
        expect(wrapper.vm.cur).to.equal(0)
        expect(wrapper.vm.round).to.equal(2)
    })

    it('заканчивает игру после 20 раундов с выявлением победителя по количеству очков', () => {
        wrapper.setData({phase: 'game', numPlayers: 2, names: ['Игрок1', 'Игрок2'], score: [80, 100],
            cur: 1, darts: 2, round: 20})
        wrapper.vm.nextDart()
        expect(wrapper.vm.phase).to.equal('res')
        const sorted = wrapper.vm.sorted
        expect(sorted[0].score).to.equal(80)
        expect(sorted[0].name).to.equal('Игрок1')
    })


})
