let nome = 'Kleber Alves de Amorim Nascimento'
let email = 'klebernascimento@outlook.com.br'
let github = 'www.github.com/kleber86'

console.log(`
  Criado por: ${nome}
  Email: ${email}
  Github: ${github}
  `)

  alert(`
  Criado por: ${nome}
  Email: ${email}
  Github: ${github}
  `)

  document.getElementById('btn-submit').addEventListener('click', e =>{
    console.log('Clique no botão')
  })

  document.getElementById('form-login').addEventListener('mouseenter', e =>{
    console.log('O mouse está sobre o formulário.')
  })

  document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('O mouse saiu do formuário.')
  })

  document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault()
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    console.log(`
      email: ${email}
      senha: ${password}
    `)

    let objeto = {
      email,
      password
    }
    console.log(objeto)

    let stringJson = JSON.stringify(objeto)
    console.log(stringJson)
  })