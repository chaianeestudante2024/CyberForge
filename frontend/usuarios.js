
function processaCadastro(evento) {
    evento.preventDefault()
    const input_nome = document.getElementById('nome')
    const input_email = document.getElementById('email')
    const input_sobrenome = document.getElementById('sobrenome')
    const input_senha = document.getElementById('senha')
    const input_data = document.getElementById('data')

    let nome = input_nome.value;
    let email = input_email.value;
    let sobrenome = input_sobrenome.value;
    let senha = input_senha.value;
    let data = input_data.value;

     

    const dados = {
        p_nome: nome,
        p_email: email,
        p_sobrenome: sobrenome,
        p_senha: senha,
        p_data: data,
    
       
    }

    fetch(`http://localhost:1880/api/usuario/cadastrar`,{
        method:"POST",
        body:JSON.stringify(dados)
    }).then(res => res.json())
      .then(data => {
            console.log(data)
        })
}

function buscaUsuarios(){
    fetch(`http://localhost:1880/api/usuario/listar`).then(res => res.json())
      .then(data => {
            console.log(data)
        })
}

function removerUsuarios(){

    fetch(`http://localhost:1880/api/remover/usuario`,{  
         method:"DELETE",
        body:JSON.stringify({"msg":"remover"})
    }).then(res => res.json())
    .then(data =>{
        console.log(data)
    })
        

    }
      


function editarUsuarios(){
   fetch(`http://localhost:1880/api/editar/usuario`,{
        method:"PUT",
        body:JSON.stringify({"msg":"editar"})
   }).then(res => res.json())
   .then(data =>{
    console.log(data)
   })
}