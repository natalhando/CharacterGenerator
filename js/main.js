var descricao = ["O What Up? é um software gerador de personagens aleatórios. Aqui, você tem a possibilidade de gerar personagens praticamente completos com detalhes como nome, idade, nacionalidade, história de fundo, emprego etc.",
                 "What Up? is a software where you can generate random characters. Here, you have the possibility of generating fully formed characters, with informations such as name, age, nationality, background story, job etc"];

var botaoPT = document.querySelector('#PT');
var botaoENG = document.querySelector('#ENG');

/* Quando o usuario mudou o idioma para portugues */
botaoPT.addEventListener("click", () => {
   document.querySelector('.descricao').innerHTML = descricao[0];
});

/* Quando o usuario mudou o idioma para ingles */
botaoENG.addEventListener("click", () => {
    document.querySelector('.descricao').innerHTML = descricao[1];
});