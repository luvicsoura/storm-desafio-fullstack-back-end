const { expect } = require('chai')
const { getCapacidadeDeRetencao } = require('./questaoQuatro')

describe('Questão Quatro', function () {

    it(
        'Dado o array [0,1,0,2,1,0,1,3,2,1,2,1] representando um mapa de elevação, a quantidade de água capaz de ser retida deverá ser 6',
        function () {

            expect(getCapacidadeDeRetencao([0,1,0,2,1,0,1,3,2,1,2,1])).to.equal(6)
        }
    )

    it(
        'Dado o array [0,1,0,2,1,0,1,3,2,1,2,3] representando um mapa de elevação, a quantidade de água capaz de ser retida deverá ser 9',
        function () {

            expect(getCapacidadeDeRetencao([0,1,0,2,1,0,1,3,2,1,2,3])).to.equal(9)
        }
    )

    it(
        'Dado o array [4,1,0,2,1,0,1,3,2,1,2,4] representando um mapa de elevação, a quantidade de água capaz de ser retida deverá ser 27',
        function () {

            expect(getCapacidadeDeRetencao([4,1,0,2,1,0,1,3,2,1,2,4])).to.equal(27)
        }
    )
})