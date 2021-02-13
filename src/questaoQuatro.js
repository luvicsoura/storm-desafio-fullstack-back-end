function getCapacidadeDeRetencao(mapaDeAltura) {

    let alturaAEsquerda = 0
    let alturaADireita = 0
    let capacidadeTotal = 0
    let capacidadeLocal = 0
    let indexPico = 0

    // Passagem da esquerda para direita
    for (let i = 0; i < mapaDeAltura.length; i++) {

        // Verifica final do vale, incrementa capacidade total com a capacidade local e reseta variáveis
        if (alturaAEsquerda <= mapaDeAltura[i]) {
            alturaAEsquerda = mapaDeAltura[i]
            alturaADireita = 0
            capacidadeTotal += capacidadeLocal
            capacidadeLocal = 0
            indexPico = i
            
            continue
        }

        if (alturaAEsquerda > mapaDeAltura[i]) {
            capacidadeLocal += alturaAEsquerda - mapaDeAltura[i]
        }
    }

    capacidadeLocal = 0 // Reseta capacidade local

    /*
    * Evita passagem da direita para a esquerda, caso o pico esteja a 2 unidades ou menos da última posição a direita.
    * Uma vez que para se formar um vale é necessário ao menos três posições, é possível dizer que, se o pico se encontra
    * a duas unidades ao menos da última posição, não será possível existir um vale após o pico.
    */
    if (indexPico >= mapaDeAltura.length - 2)  return capacidadeTotal

    // Passagem da direita para esquerda. Necessária, pois, após atingir o pico, não será mais econtrada tamanho igual a direita
    for (let i = mapaDeAltura.length - 1; i >= indexPico; i--) {

        // Verifica final do vale, incrementa capacidade total com a capacidade local e reseta variáveis
        if (alturaADireita <= mapaDeAltura[i]) {
            alturaADireita = mapaDeAltura[i]
            alturaAEsquerda = 0
            capacidadeTotal += capacidadeLocal
            capacidadeLocal = 0
            
            continue
        }

        if (alturaADireita > mapaDeAltura[i]) {
            capacidadeLocal += alturaADireita - mapaDeAltura[i]
        }
    }

    return capacidadeTotal
}

module.exports = { getCapacidadeDeRetencao }