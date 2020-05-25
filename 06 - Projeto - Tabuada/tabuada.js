let tabuada = document.querySelector('#tabuada tbody')
let valorA = 2

for(let valorB = 0; valorB <= 10; valorB++){

    let resultado = valorA * valorB

    let template = `
        <td>${valorA}</td>
        <td>x</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${resultado}</td>
`

    let criarTR = document.createElement('tr')

    criarTR.innerHTML = template

    tabuada.append(criarTR)

}