function questaoUm(arr, alvo) {
    
    for(let i = 0; i < arr.length; i++) {

        for(let j = i + 1; j < arr.length; j++) {

            if ((arr[i] + arr[j]) === alvo) return [i, j]
        }
    }

    return []
}

module.exports = { questaoUm }