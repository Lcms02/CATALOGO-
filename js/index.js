let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length>0){
        fetch("http://www.omdbapi.com/?apikey=956c739e&t="+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=>resp.json())
        .then((resp)=>{
            console.log(resp)
        })
    }
    return false;
}

    

let listarFilmes = async (filmes) =>{
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    console.log(listaFilmes);
    if (filmes.length > 0) {
    filmes.forEach(async(filme)=> {
    listaFilmes.appendChild(await filme.getCard());
    });
}
}


