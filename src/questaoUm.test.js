const { expect } = require('chai')
const { questaoUm } = require('./questaoUm')

describe('Questão Um', function () {
    
    it(
        'Dado um array = [2, 7, 11, 15] e um alvo = 9, então a função deverá retornar [0, 1]',
        function () {

            const indices = questaoUm([2, 7, 11, 15], 9)
            expect(indices).to.deep.equal([0, 1])
        }    
    )


    it(
        'Dado um array = [2, 11, 15, 7] e um alvo = 9, então a função deverá retornar [0, 3]',
        function () {

            const indices = questaoUm([2, 11, 15, 7], 9)
            expect(indices).to.deep.equal([0, 3])
        }    
    )


    it(
        'Dado um array = [155, 20, 110, 70] e um alvo = 265, então a função deverá retornar [0, 2]',
        function () {

            const indices = questaoUm([155, 20, 110, 70], 265)
            expect(indices).to.deep.equal([0, 2])
        }    
    )
})