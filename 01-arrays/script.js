// map(): faz uma iteração com todos os elementos da lista e retorna outra
// 1) Adicionar "a" no final das palavras
const profissionais = ["desenvolvedor", "programador", "autor", "vereador", "professor"];

const profissionaisMelhores = profissionais.map(
  (item) => {
    // item são os itens litaralmente do array, pode muda o nome dele tb
    return item + "a";
  }
);

const profissionaisMelhores = profissionais.map(profissional => {
  return profissional + "a";
})

// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

const frutasFormatadas = frutas.map(
  (item) => {
    const letraInicial = item[0].toUpperCase(); // pega a primeira letra e deixa maiuscula
    const itemMinusculo = item.toLowerCase();  //deixa tudo minusculo
    const itemSemPrimeiraLetra = itemMinusculo.substring(1);  // pega o "resto" da palavra

    return letraInicial + itemSemPrimeiraLetra;  //concatena os dois 

    // let novaFruta = item[0].toUpperCase() + item.toLowerCase().substring(1);
    // novaFruta[0] = novaFruta[0].toUpperCase();
    // return novaFruta;
  }
)

// retornar uma nova array com o nome das alunas com a nota final
const notasAlunas = [
  {
    nome: "Julia", notas: [
      { materia: "matemática", nota: 7, peso: 1.5 },
      { materia: "portugues", nota: 3, peso: 2 }
    ]
  },
  {
    nome: "Zelia", notas: [
      { materia: "matemática", nota: 6, peso: 1.5 },
      { materia: "portugues", nota: 5, peso: 2 }
    ]
  },
  {
    nome: "Jussara", notas: [
      { materia: "matemática", nota: 8, peso: 1.5 },
      { materia: "portugues", nota: 2, peso: 2 }
    ]
  }
]

const notasFinaisAlunas = notasAlunas.map(
  (aluna) => {
    // console.log(aluna.nome);
    const arrayNotas = aluna.notas;
    // input: array
    // output: n°

    let somaNotas = 0;
    let somaPesos = 0;

    for (let i = 0; i < arrayNotas.length; i++) {
      const nota = arrayNotas[i].nota;
      const peso = arrayNotas[i].peso;
      const notaFinalMateria = nota * peso;
      // console.log(arrayNotas[i].materia, notaFinalMateria)
      somaNotas += notaFinalMateria;
      somaPesos += peso;
    }
    const notaFinalUm = somaNotas / somaPesos;
    const novaAluna = {
      nome: aluna.nome,
      notaFinal: notaFinalUm
    }
    return novaAluna
  }
)

// 3) Criar uma array somente com as alunas que passaram de ano (média > 5)
// notasFinasiAlunas

// const alunasPassantes = [{ nome: "elia", nota:5}]

const alunasPassantes = notasFinaisAlunas.filter(
  (item) => {
    // console.log(item.notaFinal)
    const media = 5;
    const ehMaiorMedia = item.notaFinal >= media;
    return ehMaiorMedia

    // MINHA RESOLUÇÃO
    // const passou = item.notaFinal >= 5
    // return passou;
  }
)

// filter(): retorna uma nova array com apenas com elementos que atendem à condição

// 1) Criar nova array somente com números pares
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// 2) Criar nova array somente com profissionais da área de TI
const pessoas = [
  { nome: "Mell", area: "TI", profissao: "dev" },
  { nome: "Munique", area: "ciência", profissao: "pesquisadora" },
  { nome: "Melissa", area: "construção", profissao: "engenheira" },
  { nome: "Madalena", area: "TI", profissao: "infra" },
  { nome: "Monica", area: "medicina", profissao: "cardiologista" },
];

const todosProfissionais = pessoas.filter(
  (item) => {
    const areaTI = item.area === "TI"
    return areaTI;
  }
)


// reduce(): recebe uma array e retorna um valor só. Redutor.
// 1) Dado uma array de números, retornar a soma de todos eles
// usamos a array do  filter
// const num = [1, 2,  3,  4,   5, 6, 7, 8, 9, 10];
//               1+2=3 |   |     |
//                   3+3=6 |    |
//                       6+4=10 |
//                           10+5=15 ...
// const soma = num.reduce(
//   // (acumulado, item. indice, array)
// (acumulado, item) =>{
//   console.log('acc', acumulado);
//   console.log('item', item);
//   const somaAtual = acumulado + item;

//   return somaAtual;
// }
// )

// 2) Retornar o lucro de uma empresa
// se for saída, subtrair o valor
// se for entrada, adicionar o valor
const transacoes = [
  { descricao: "carro", valor: 32000, tipo: "saída" },
  { descricao: "cliente 1", valor: 10000, tipo: "entrada" },
  { descricao: "proventos", valor: 23000, tipo: "entrada" },
  { descricao: "salario 1", valor: 8500, tipo: "saída" }
];

const lucro = transacoes.reduce(
  (acumulado, item) => {
    // console.log('aa', acumulado)
    // console.log('bb', item)
    if(item.tipo === "entrada") {
      return acumulado + item.valor
    } else {
      return acumulado - item.valor
    }
  }, 0  // --- OU ESSA
)

//  --- USAR ESSA VALIDAÇÃO (pra depois da primeira rodada não ficar masi como obj e acabr ficando NaN)
  //   if (typeof acumulado === "object") {
  //     return acumulado.valor + item.valor
  //   }
  //     return acumulado + item.valor;
  // }



// sort(): organiza itens da array de acordo com uma verificação

// 1) Organizar números de forma decrescente
const numDecrescente = [...num].sort((a , b) => b - a);

// 2) Organizar pessoas por ordem alfabética


