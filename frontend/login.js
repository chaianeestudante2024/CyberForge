
async function processaFormulario(evento) {
    evento.preventDefault()
    const input_usuario = document.getElementById('usuario')
    const input_senha = document.getElementById('senha')

    let usuario = input_usuario.value;

    let senha = input_senha.value;
    if(!input_usuario ||!input_senha){
        alert("Inputs não encontrados")
        return;
    }


    console.log(usuario, senha)


    try{
        resposta = await fetch(`http://localhost:1880/api/usuario/autenticar`, {
        method: "POST",
        body: JSON.stringify({ usuario, senha })
    }).then((resposta) => {
        console.log(resposta)
        if (resposta.status == 200) {
            resposta.json()
        }else if(resposta.status == 401){
            alert("Usuário inválido")
        }
    }).then((usuario) => {
        let tela = document.getElementById('loadingcontainer');
        tela.style.display = "block";
        setTimeout(() => {
            tela.style.display = "none";
           // window.location.href = "home.html";
        }, 3000)



    })

}

catch(erro){
alert("Erro ao buscar")
console.log(erro)
}













}
