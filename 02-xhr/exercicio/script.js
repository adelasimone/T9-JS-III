// Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem
// A API a ser usada é https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/
// Ver documentação em https://pokeapi.co/
// A imagem deve ser ter essa URL https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png
// Essa id é retirada da API anterior

const form = document.getElementById('pkmForm');
const input = document.getElementById('pkmInput');
const pkmPlaceholder = document.getElementById('pkmPlaceholder');


// const chamarRequisicao = (e) => {
//   e.preventDefault();
//   const requisito = new XMLHttpRequest();
//   const verbo = "GET"
//   const nomePkm = input.value // guarda o input pra usar no link da const url
//   const url = `https://pokeapi.co/api/v2/pokemon/${nomePkm}/`

//   requisito.open(verbo, url);

//   requisito.addEventListener("readystatechange", () => {
//     if (requisito.readyState === 4 && requisito.status === 200) {
//       const guarda = JSON.parse(requisito.response) // transforma e guarda string JSON em objeto pra manipularmos
//       pkmPlaceholder.innerText = guarda.name
//       const img = document.createElement('img');
//       img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${guarda.id}.png`);
//       pkmPlaceholder.appendChild(img)
//     } else {
//       chamarRequisicao.textContent = "API sem resposta";
//     }
//   })
//   requisito.send();
// };

// form.addEventListener('submit', (e) => chamarRequisicao(e));

fetch(`https://pokeapi.co/api/v2/pokemon/${nomePkm}/`)
    .then((response) => { return response.json() })
    .then(data => {
        console.log('data: ', data)
    })