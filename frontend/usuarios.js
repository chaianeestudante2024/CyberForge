
window.onload = () => {
    buscaUsuarios()
}




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
        })
}

function removerUsuarios(id) {

    fetch(`http://localhost:1880/api/remover/usuario`, {
        method: "DELETE",
        body: JSON.stringify({ id})
    }).then(res => res.json())
        .then(data => {
            console.log(data)
        })


}



function editarUsuarios() {
    fetch(`http://localhost:1880/api/editar/usuario`, {
        method: "PUT",
        body: JSON.stringify({ "msg": "editar" })
    }).then(res => res.json())
        .then(data => {
            console.log(data)
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
