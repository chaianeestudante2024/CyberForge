
window.onload = () => {
    buscaUsuarios()
}


let _usuarios = []

let usuario_editado = null;
function processaCadastro(evento) {
    evento.preventDefault()
    const input_nome = document.getElementById('nome')
    const input_email = document.getElementById('email')
    const input_sobrenome = document.getElementById('sobrenome')
    const input_senha = document.getElementById('senha')
    const input_data = document.getElementById('data')
    const input_tipo_usuario = document.getElementById('tipo_usuario')

    let nome = input_nome.value;
    let email = input_email.value;
    let sobrenome = input_sobrenome.value;
    let senha = input_senha.value;
    let data = input_data.value;
    let tipo_usuario = input_tipo_usuario.value;



    const dados = {
        p_nome: nome,
        p_email: email,
        p_sobrenome: sobrenome,
        p_senha: senha,
        p_data: data,
        p_tipo_usuario: tipo_usuario,

    }

}


function cadastrar(dados) {
    fetch(`http://localhost:1880/api/usuario/cadastrar`, {
        method: "POST",
        body: JSON.stringify(dados)
    }).then(res => res.json())
        .then(data => {
            console.log(data)
        })
}




function buscaUsuarios() {
    fetch(`http://localhost:1880/api/usuario/listar`).then(res => res.json())
        .then(data => {
            listarUsuarios(data)
            _usuarios = data

        })
}

function removerUsuarios(id) {

    fetch(`http://localhost:1880/api/remover/usuario`, {
        method: "DELETE",
        body: JSON.stringify({ id })
    }).then(res => res.json())
        .then(data => {
            console.log(data)
        })


}



function salvarEdicao(dados) {
    console.log(dados)
    fetch(`http://localhost:1880/api/editar/usuario`, {
        method: "PUT",
        body: JSON.stringify(dados)
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            buscaUsuarios()
        })
}


/* CRIA A LISTA, PEGA O ID DO BODY E CRIA UMA NOVA LINHA com o id*/

function listarUsuarios(usuarios) {

    body_table = document.getElementById('bodytable')

    usuarios.forEach(usuario => {


        let data = new Date(usuario.data_nascimento);


        let linha = `
            <tr>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td>${usuario.sobrenome}</td>
                <td>${usuario.senha}</td>
                <td>${data.toLocaleDateString('pt-br')}</td>
                <td>${usuario.tipo_usuario}</td>

                <td id="botões">
                    <button id="Remover" onclick="removerUsuarios(${usuario.id})">Remover</button>
                    <button id="Editar" onclick="editarUsuarios(${usuario.id})">Editar</button>
                </td>

            </tr>
        `

        body_table.innerHTML += linha;




        // let linha = body_table.insertRow();
        // let celulanome = linha.insertCell()
        // celulanome.innerText = usuarios.nome;
        // let celulasobrenome = linha.insertCell()
        // celulasobrenome.innerText = usuarios.sobrenome;
        // let celulatipo_usuario = linha.insertCell();
        // celulatipo_usuario.innerText = usuarios.tipo_usuario;

        // let botao = document.createElement("botão")
        // botao.innerText = "Excluir"
        // botao.onclick = removerUsuarios;
        // table.deleteRow(linha.rowIndex)

    })


}

function editarUsuarios(id) {
    let usuario_escolhido;
    console.log(id)
    _usuarios.forEach((usuario) => {
        if (usuario.id == id) {
            usuario_escolhido = usuario
            usuario_editado = id
        }

    });



    const input_nome = document.getElementById('nome')
    input_nome.value = usuario_escolhido.nome

    const input_email = document.getElementById('email')
    input_email.value = usuario_escolhido.email


    const input_sobrenome = document.getElementById('sobrenome')
    input_sobrenome.value = usuario_escolhido.sobrenome

    const input_senha = document.getElementById('senha')
    input_senha.value = usuario_escolhido.senha




    const input_data = document.getElementById('data')
    console.log(usuario_escolhido.data_nascimento)
    input_data.value = usuario_escolhido.data_nascimento.split('T')[0]

    const input_tipo_usuario = document.getElementById('tipo_usuario')
    input_tipo_usuario.value = usuario_escolhido.tipo_usuario





}


function salvar(e) {
    e.preventDefault()
    const input_nome = document.getElementById('nome')
    const input_email = document.getElementById('email')
    const input_sobrenome = document.getElementById('sobrenome')
    const input_senha = document.getElementById('senha')
    const input_data = document.getElementById('data')
    const input_tipo_usuario = document.getElementById('tipo_usuario')

    let nome = input_nome.value;
    let email = input_email.value;
    let sobrenome = input_sobrenome.value;
    let senha = input_senha.value;
    let data = input_data.value;
    let tipo_usuario = input_tipo_usuario.value;



    const usr = {
        p_nome: nome,
        p_email: email,
        p_sobrenome: sobrenome,
        p_senha: senha,
        p_data: data,
        p_tipo_usuario: tipo_usuario,

    }



    if (usuario_editado) {
        usr.p_id = usuario_editado
        salvarEdicao(usr)

    }
    else {
        cadastrar(usr)
    }
}

function limpar(evento) {
    if (usuario_editado = id) {
        usuario_editado = null
    }

}