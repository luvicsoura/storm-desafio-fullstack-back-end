// Cria nova estrutura de dados para impedir operações que não fazem parte de uma pilha
class Stack {
    #items = []

    add(item) {
        this.#items.push(item)
    }

    pop() {
        return this.#items.pop()
    }

    get length() {
        return this.#items.length
    }
}


function stringEhBalanceada(str) {

    const stack = new Stack()
    const chars = str.split('')

    for (let char of chars) {
        
        if (ehCaractereDeAbertura(char)) {
            
            stack.add(char)
        }
        
        if (ehCaractereDeFechamento(char)) {
            
            const topoDaStack = stack.pop()
            if (topoDaStack !== getCaractereDeAberturaCorrespondente(char)) {
                return false
            }
        }
    }

    // Verifica se todos os brackets abertos foram fechados. Ou seja, se o stack está vazio.
    return !stack.length
}

function ehCaractereDeFechamento(char) {
    return [']', '}', ')'].includes(char)
}

function ehCaractereDeAbertura(char) {
    return ['[', '{', '('].includes(char)
}

function getCaractereDeAberturaCorrespondente(char) {

    switch(char) {

        case '}':
            return '{'

        case ')':
            return '('

        case ']':
            return '['
    }
}

module.exports = { stringEhBalanceada }