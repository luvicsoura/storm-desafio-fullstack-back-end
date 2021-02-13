const { expect } = require('chai')
const { stringEhBalanceada } = require('./questaoDois')

describe('Questão Dois', function () {
    
    it(
        'Dada uma string {[()]}, stringEhBalanceada deve retornar true',
        function () {

            expect(stringEhBalanceada('{[()]}')).to.be.true
        }    
    )

    it(
        'Dada uma string {[(])}, stringEhBalanceada deve retornar false',
        function () {

            expect(stringEhBalanceada('{[(])}')).to.be.false
        }    
    )

    it(
        'Dada uma string {{[[(())]]}}, stringEhBalanceada deve retornar true',
        function () {

            expect(stringEhBalanceada('{{[[(())]]}}')).to.be.true
        }    
    )

    it(
        'Dada uma string [{a: 0}, 1, [0, 1], () => {}], stringEhBalanceada deve retornar true',
        function () {

            expect(stringEhBalanceada('[{a: 0}, 1, [0, 1], () => {}]')).to.be.true
        }    
    )

    it(
        'Dada uma string [{a: 0}, 1, [0, 1), () => {}], stringEhBalanceada deve retornar false',
        function () {

            expect(stringEhBalanceada('[{a: 0}, 1, [0, 1], () => {}]')).to.be.true
        }    
    )
})