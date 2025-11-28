
function processaFormulario(event) {
    event.preventDefault()
    const input_usuario = document.GetElementbyId('usuario')
    const input_senha = document.GetElementbyId('senha')

    let usuario = usuario.value;
    let senha = senha.value;

    console.log('usuario,senha')

    if (senha != 'Senai') {
        console.log('A senha é inválida')
        const dados = {
            p_usuario: usuario,
            p_senha: senha,
        }
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }
    else {
        console.log('A senha é válida')
    }
}





