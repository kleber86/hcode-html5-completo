function calculaTabuada(){

    let tabuada = document.querySelector('#tabuada tbody')
    let valorA = parseInt(document.querySelector('#valorA').value)
    
    tabuada.innerHTML = ''

    for(let valorB = 0; valorB <= 10; valorB++){
    
        let resultado = valorA * valorB
        
        template = `
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
}

calculaTabuada()

document.querySelector('#valorA').addEventListener('change', calculaTabuada)