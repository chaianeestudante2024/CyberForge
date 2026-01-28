
function processaFormulario(evento) {
    evento.preventDefault()
    const input_usuario = document.getElementById('usuario')
    const input_senha = document.getElementById('senha')

    let usuario = input_usuario.value;

    let senha = input_senha.value;

    console.log(usuario, senha)

    if (senha != 'Senai') {
        console.log('A senha é inválida')
        window.alert('Senha inválida ❌')
        window.alert('⚠️Use a senha padrão⚠️')


    }
    else {
        console.log('A senha é válida')
        const dados = {
            p_usuario: usuario,
            p_senha: senha,
        }
        localStorage.setItem('usuario', JSON.stringify(dados))
        window.location.href = "home.html"
    }
}





