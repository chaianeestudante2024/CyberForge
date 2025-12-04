
function processaFormulario(evento) {
    evento.preventDefault()
    const input_usuario = document.getElementById('usuario')
    const input_senha = document.getElementById('senha')

    let usuario = input_usuario.value;

    let senha = input_senha.value;

    console.log(usuario,senha)

    if (senha != 'Senai') {
        console.log('A senha é inválida')
        const dados = {
            p_usuario: usuario,
            p_senha: senha,
        }
        localStorage.setItem('usuario', JSON.stringify(dados))
    }
    else {
        console.log('A senha é válida')
    }
}





