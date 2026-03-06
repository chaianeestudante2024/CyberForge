
async function processaFormulario(evento) {
    evento.preventDefault()
    const input_usuario = document.getElementById('usuario')
    const input_senha = document.getElementById('senha')

    const usuario = input_usuario.value;

    const senha = input_senha.value;
    if(!input_usuario ||!input_senha){
        alert("Inputs não encontrados")
        return;
    }


    console.log(usuario, senha)


    try{
      const  resposta = await fetch(`http://localhost:1880/api/usuario/autenticar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: usuario, senha })
    }).then((resposta) => {
        console.log(resposta)
        if (resposta.status == 200) {
          return resposta.json()
        }else if(resposta.status == 401){
            alert("Usuário inválido")
        }
    }).then((usuario) => {
        if(usuario){
           let tela = document.getElementById('loadingcontainer');
        tela.style.display = "block";
        setTimeout(() => {
            tela.style.display = "none";
            window.location.href = "home.html";
        }, 3000)
 
        }
        


    })

}

catch(erro){
alert("Erro ao buscar")
console.log(erro)
}













}
