//const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
function getPokemonUrl(id) {
    return `https://pokeapi.co/api/v2/pokemon/${id}`
}

function getOnePokemon (id) {
    return fetch(getPokemonUrl(id)).then(response => response.json())
}

//função para consultar os pokemons e desenhar os seus cards
const fetchPokemon = () =>{
    const loader = document.querySelector('#loading')
    loader.style.display = 'block'

    const pokemonPromises = []
    
    //percorre 150x
    for(let i = 1; i <= 700; i++){
        //fiz esse if pq o poke 48 tava bugado
        if(i !== 48 && i !== 97 && i !== 506 && i !== 612) {
            //faz chamada pra api de pokemons e salva a promise no array pokemonPromises
            pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
        }
    }

    //espera todas as promessas que estão no array pokemonPomises
    Promise.all(pokemonPromises)
        //Então: (depois que as promises resultaram)
        .then(pokemons => {
            const liPokemons = pokemons.reduce((accumulator, pokemon) =>{
                //pega os tipos do pokemon
                const types = pokemon.types.map(typeInfo => typeInfo.type.name)
                
                //cria elementos em forma de texto pra usar mais tarde
                accumulator += `
                    <li class="card ${types[0]}">
                        <img class="card-image alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
                        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                        <p class="card-subtitle">${types.join(' | ')}</p>
                    </li>
                `

                return accumulator
            }, '')

            const ul = document.querySelector('#pokedex')

            ul.innerHTML = liPokemons
            
            loader.style.display = 'none'
        })      
}

fetchPokemon()


async function busca() {
    const barraDeBusca = document.querySelector('#searchbox');
    const valor = barraDeBusca.value;
    
    //busca info da api
    const pokemon = await getOnePokemon(valor);
    const types = pokemon.types.map(typeInfo => typeInfo.type.name)

    //desenho meu card com as informaçoes q veio da api
    const card = `
        <li class="card ${types[0]}">
            <img class="card-image alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
            <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
            <p class="card-subtitle">${types.join(' | ')}</p>
        </li>
    `
    
    //peguei o elemento que eu quero manipular
    const ul = document.querySelector('#pokedex')
    
    //mudei o conteudo do elemento alvo
    ul.innerHTML = card;
}

const searchbox = document.querySelector('#searchbox');

searchbox.addEventListener('keydown', function (event) {
    console.log('APERTOU')
    if (event.keyCode === 13){
        busca()
    }
});



// window.addEventListener('load', function(){
//     // loader.style.display = 'none'
//     loader.parentElement.removeChild(loader)
// })
// console.log(loader)

// function onReady(callback) {
//     var intervalId = window.setInterval(function() {
//       if (document.getElementsByTagName('body')[0] !== undefined) {
//         loader.style.display = 'none'
//         window.clearInterval(intervalId);
//         callback.call(this);
//       }
//     }, 5000);
// }

// onReady(function() {
//     setVisible('.page', true);
//     setVisible('#loading', false);
// });
