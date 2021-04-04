function expandeBusca(elemento){
    elemento.classList.add('aberto');
    elemento.classList.remove('fechado');
    document.getElementById('titulo-site').classList.remove('visivel');
    document.getElementById('titulo-site').classList.add('invisivel');
}

function fechaBusca(elemento){
    elemento.classList.add('fechado');
    elemento.classList.remove('aberto');
    document.getElementById('titulo-site').classList.remove('invisivel')
    document.getElementById('titulo-site').classList.add('visivel')
}
console.log(fechaBusca)


