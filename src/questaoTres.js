function getLucroMaximo(inputArr) {

    let valorDeCompra = inputArr[0]
    let valorDeVenda = inputArr[0]

    for (let i = 1; i < inputArr.length; i++) {

        const valorNoDia = inputArr[i]
        if (valorDeCompra > valorNoDia) {
            
            valorDeVenda = valorDeCompra = valorNoDia
        } else if (valorDeVenda < valorNoDia) {

            valorDeVenda = valorNoDia
        }
    }

    return valorDeVenda - valorDeCompra
}

module.exports = { getLucroMaximo }