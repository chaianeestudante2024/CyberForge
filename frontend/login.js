
function processaFormulario(evento) {
    evento.preventDefault()
    const input_usuario = document.getElementById('usuario')
    const input_senha = document.getElementById('senha')

    let usuario = input_usuario.value;

    let senha = input_senha.value;

    console.log(usuario, senha)

    fetch(`http://localhost:1880/api/usuario/autenticar`, {
        method: "POST",
        body: JSON.stringify({ usuario, senha })
    }).then((resposta) => {
            console.log(resposta)
            if (resposta.ok) {
                resposta.json()
            }
        }).then((usuario) => {
           let tela = document.getElementById('loadingcontainer');
           tela.style.display = "block";
            setTimeout(()=>{
                tela.style.display = "none";
                window.location.href = "home.html";
            },3000)
          
         
            
        })

}
















