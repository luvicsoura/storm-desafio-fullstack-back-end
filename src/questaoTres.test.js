const { expect } = require('chai')
const { getLucroMaximo } = require('./questaoTres')

describe('Questão Três', function () {

    it(
        'Sendo [7,1,5,3,6,4] o array com o preço das ações no decorrer de 6 dias, então o lucro máximo estimado deverá ser 5',
        function () {

            expect(getLucroMaximo([7,1,5,3,6,4])).to.equal(5)
        }
    )

    it(
        'Sendo [7,6,4,3,1] o array com o preço das ações no decorrer de 5 dias, então o lucro máximo estimado deverá ser 0',
        function () {
            
            expect(getLucroMaximo([7,6,4,3,1])).to.equal(0)
        }
    )

    it(
        'Sendo [7,6,4,3,1,100] o array com o preço das ações no decorrer de 5 dias, então o lucro máximo estimado deverá ser 99',
        function () {
            
            expect(getLucroMaximo([7,6,4,3,1,100])).to.equal(99)
        }
    )
})