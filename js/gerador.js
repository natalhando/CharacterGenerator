var dados = {
    nomes: ["natalia","lettycia","guilherme","vinicius","jenifer","victoria","alan"],
    sobrenomes: ["pinheiro","silva","ferreira","amaral","jang","trindade","zhang"],
    generos: ["feminino", "masculino"],
    idades: ["10","20","30"],
    nacionalidades: ["brasileiro/a","americano/a"],
    situacoesFinanceiras: ["rico","pobre"],
    lemasDeVida: ["arrogancia é a chave do sucesso","finja até que seja real"],
    ocupacoes: ["desempregado","programador"],
    segredos: ["ja matou uma pessoa","tem sangue real"],
    coisasMarcantes: ["tem medo de borboletas","ama café"],
    personalidades: ["muito alegre","sempre melancólico"],
    historiasDeFundo: ["é órfão","foi um popstar durante a infância"],
    genders: ["female", "male"],
    ages: ["10","20","30"],
    nationalities: ["brazilian","american"],
    financialStatus: ["rich","poor"],
    mottos: ["being bold is the key","fake it until you make it"],
    ocupations: ["unemployed","developer"],
    secrets: ["already killed a person","has royal relatives"],
    importantStuff: ["doesn't like butterflies","loves coffe"],
    personalities: ["very happy","always down"],
    backgroundStories: ["is an orphan","used to be a popstar"]
};

function chooseName() {
    console.log(nomes[aleatorio(0,nomes.length)]);
}

function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
}