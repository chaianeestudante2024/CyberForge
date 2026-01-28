window.onload = ()=>{
    polling(5)
}

function polling(segundos){
    setTimeout(()=>{
        console.log('Buscando...')
        buscarDadosBancada("estoque")
        buscarDadosBancada("processo")
        polling(segundos)
    },segundos*1000)


}

function buscarDadosBancada(modulo){
    fetch(`http://10.77.241.169:1880/api/smartsense/${modulo}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
}
