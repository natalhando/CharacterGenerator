var descricao = ["O What Up? é um software gerador de personagens aleatórios. Aqui, você tem a possibilidade de gerar personagens praticamente completos com detalhes como nome, idade, nacionalidade, história de fundo, emprego etc.",
                 "What Up? is random character generator software. Here, you have the possibility of generating fully formed characters, with details such as name, age, nationality, background story, job etc"];
var txtGerar = ["Gerar personagem",
                "Generate character"];
var txtNome = ["Nome", "Name"];
var txtSobrenome = ["Sobrenome", "Family name"];
var txtGenero = ["Gênero", "Gender"];
var txtNacionalidade = ["Nacionalidade", "Nationality"];
var txtIdade = ["Idade", "Age"];
var txtSitFinanceira = ["Situação financeira", "Financial status"];
var txtLema = ["Lema de vida", "Life motto"];
var txtOcupacao = ["Ocupação", "Ocupation"];
var txtAlgoMarcante = ["Algo marcante", "Something important"];
var txtSegredo = ["Segredo", "Secret"];
var txtPersonalidade = ["Personalidade", "Personality"];
var txtHistoria = ["História de fundo", "Background story"];

var idiomaAtual = 0;

var botaoPT = document.querySelector('#PT');
var botaoENG = document.querySelector('#ENG');
var botaoAvancar = document.querySelector('.botao-avancar');
var botaoGerar = document.querySelector('.botao-gerar');

/* Quando o usuario mudou o idioma para portugues */
botaoPT.addEventListener("click", () => {
  idiomaAtual = 0;
  mudaIdioma();
});

/* Quando o usuario mudou o idioma para ingles */
botaoENG.addEventListener("click", () => {
  idiomaAtual = 1;
  mudaIdioma();
});

function mudaIdioma() {
  document.querySelector('.descricao').innerHTML = descricao[idiomaAtual];
  botaoAvancar.innerHTML = botaoGerar.innerHTML = txtGerar[idiomaAtual];
  nome.value = txtNome[idiomaAtual];
  sobrenome.value = txtSobrenome[idiomaAtual];
  genero.value = txtGenero[idiomaAtual];
  nacionalidade.value = txtNacionalidade[idiomaAtual];
  idade.value = txtIdade[idiomaAtual];
  situacaoFinanceira.value = txtSitFinanceira[idiomaAtual];
  lemaDeVida.value = txtLema[idiomaAtual];
  ocupacao.value = txtOcupacao[idiomaAtual];
  algoMarcante.value = txtAlgoMarcante[idiomaAtual];
  segredo.value = txtSegredo[idiomaAtual];
  personalidade.value = txtPersonalidade[idiomaAtual];
  historia.value = txtHistoria[idiomaAtual];
}

botaoAvancar.addEventListener("click", () => {
  var telaInicial = document.querySelector('.inicio');
  telaInicial.style.display = "none";
  var telaGerador = document.querySelector('.gerador');
  telaGerador.style.display = "block";
});

var nacionalidadeAtual = 0, generoAtual = 0;

botaoGerar.addEventListener("click", () => {
  genero.value = geraGenero();
  idade.value = geraIdade();
  nacionalidade.value = geraNacionalidade();
  situacaoFinanceira.value = geraSitFinanceira();
  lemaDeVida.value = geraLema();
  ocupacao.value = geraOcupacao();
  algoMarcante.value = geraAlgoMarcante();
  segredo.value = geraSegredo();
  personalidade.value = geraPersonalidade();
  historia.value = geraHistoria();
  nome.value = geraNome();
  sobrenome.value = geraSobrenome();
});

var dados = {
  /* Versao em portugues */
  generos: ["Feminino", "Masculino", "Não-Binário"],
  idades: ["10","15","16","17","18","19","21","20","25","28","30",
           "Na casa dos 20","Na casa dos 30","40","45","49","50","60",
           "70","80","90","Na casa dos 40"],
  nacionalidades: ["Brasileiro/a",
                   "Americano/a", "Canadense", "Ingles/a",
                   "Coreano/a",
                   "Chines/a",
                   "Peruano/a", "Colombiano/a", "Chileno/a", "Venezuelano/a",
                   "Indiano/a",
                   "Tailandes/a",
                   "Queniano/a",
                   "Japones/a",
                   "Vietnamita",
                   "Filipino/a",
                   "Frances/a",
                   "Italiano/a"],
  situacoesFinanceiras: ["Rico","Pobre","Classe média","Bilionário","Endividado",
                         "Vivendo um dia após o outro","Economizando dinheiro"],
  lemasDeVida: ["Arrogância é a chave do sucesso",
                "Finja até que seja real",
                "Acredite e você estará na metade do caminho",
                "Nada é tão ruim que não possa piorar",
                "Sempre há uma razão para ser grato",
                "Poderia estar pior",
                "Vivendo a vida adoidado",
                "Chorar não paga as contas",
                "Se eu não acreditar em mim, quem vai?",
                "Existe sempre alguém passando por algo pior",
                "Apenas sorrir e acenar",
                "Ninguém precisa saber da sua dor",
                "A grama do vizinho é sempre mais verde"],
  ocupacoes: ["Desempregado","Programador","Engenheiro/a Civil","Arquiteto/a",
              "Pintor/a","Cantor/a","Pedreiro/a","Artista","Desenvolvedor/a de Jogos",
              "Escritor/a","Advogado/a","Juiz/a","Empresário/a","Chef","Policial",
              "Compositor/a","Massagista","Estudante","Pesquisador/a","Barista",
              "Corretor/a de imóveis","Dançarino/a","Atendende de telemarketing",
              "Enfermeiro/a","Babá","Zelador/a","Professor/a","Animador/a",
              "Ladrão/a","Banqueiro/a","CEO","Gerente","Jogador/a de futebol"],
  segredos: ["Já matou uma pessoa",
             "Tem sangue real",
             "Já testemunhou um assassinato",
             "É apaixonado/a pelo chefe",
             "Detesta animais de estimação",
             "Destruiu o relacionamento dos vizinhos por vingança",
             "Todas as suas ações visam benefício próprio",
             "Chora sempre que assiste filmes de cachorro",
             "Canta muito bem",
             "Todas as suas grandes ideias são plágios",
             "Todos os seus troféus são falsos",
             "Arranca fios de cabelo quando está nervoso/a",
             "Possui ficha criminal",
             "Mente sobre seu nome verdadeiro",
             "É viciado em cannolis",
             "Toma leite de amêndoas mesmo sabendo que faz mal para o meio ambiente",
             "Vende drogas",
             "Tem um sotaque falso"],
  coisasMarcantes: ["Tem medo de borboletas",
                    "Ama café",
                    "Fala 5 idiomas",
                    "Tem muitos amigos virtuais",
                    "Parece muito com uma celebridade",
                    "Tem o cabelo colorido",
                    "É muito inteligente",
                    "Gosta de corrigir os outros",
                    "É o/a mais velho/a do grupo de amigos",
                    "Tem dificuldade em compreender sarcasmo",
                    "Usa blusas de histórias em quadrinhos",
                    "Tem um sotaque muito característico",
                    "Extremamente organizado/a",
                    "É uma pessoa extremamente festeira",
                    "Está sempre com um copo de cerveja na mão",
                    "Vive reclamando do trabalho",
                    "Gosta de dançar enquanto caminha",
                    "Anda mancando",
                    "Tem um olho de vidro",
                    "Tem um dente de ouro",
                    "Faz piadas quando está nervoso/a"],
  personalidades: ["Muito alegre",
                   "Sempre melancólico",
                   "É uma pessoa muito amável e doce",
                   "Não se abre com ninguém",
                   "Tem uma personalidade sombria",
                   "Está sempre sorrindo",
                   "Está sempre fazendo drama",
                   "Uma pessoa muito extrovertida",
                   "Uma pessoa tímida, mas legal",
                   "Uma pessoa desprezível",
                   "Está sempre julgando os outros",
                   "Uma pessoa muito cuidadosa",
                   "Prefere ter razão do que ser gentil",
                   "Prefere ser gentil do que ter razão"],
  historiasDeFundo: ["É órfão",
                     "Foi um popstar durante a infância",
                     "Tudo o que faz é com o objetivo de dar uma boa vida para a família",
                     "Esconde de todos ao seu redor um assassinato que cometeu no passado",
                     "Teve que deixar seu país natal por motivos políticos",
                     "Perdeu os pais em um atentado",
                     "Sua vida se baseia em tentar superar a irmã",
                     "Vive uma vida extremamente tediosa, em seu emprego e em seus relacionamentos",
                     "Vive em uma fazenda, distante da cidade",
                     "Possui uma identidade secreta, na qual finge ser uma pessoa comum",
                     "Tem duas familias",
                     "Seu pai foi condenado injustamente por assassinato",
                     "Nasceu na pobreza e batalhou para estar onde está",
                     "Vive toda a sua vida na busca de vingança",
                     "Quer tornar o mundo um lugar melhor"],
  /* Versao em ingles */
  genders: ["Female", "Male", "Non-Binary"],
  ages: ["10","15","16","17","18","19","21","20","25","28","30",
         "In their 20s","In their 30s","40","45","49","50","60",
         "70","80","90","In their 40s"],
  nationalities: ["Brazilian",
                  "American", "Canadian", "English",
                  "Korean",
                  "Chinese",
                  "Peruvian", "Colombian", "Chilean","Venezuelan",
                  "Indian",
                  "Thai",
                  "Kenyan",
                  "Japanese",
                  "Vietnamese",
                  "Filipino",
                  "French",
                  "Italian"],
  financialStatus: ["Rich","Poor","Middle class","Billionaire","In debt",
                    "Living a day after the other","Saving money"],
  mottos: ["Being bold is the key to success",
           "Fake it until you make it",
           "Believe you can and you're half way there",
           "Nothing is so bad that it can't get worse",
           "There's always a reason to be grateful",
           "It could be worse",
           "Livin' la vida loca",
           "Crying won't pay the bills",
           "If I don't believe I can do it, who's going to?",
           "There's always someone going through something worse",
           "Just smile and wave",
           "Conceal, don't feel, don't let them know",
           "The grass is always greener on the other side"],
  ocupations: ["Unemployed", "Programmer", "Civil Engineer", "Architect",
               "Painter", "Singer", "Mason", "Artist", "Game Developer",
               "Writer", "Lawyer", "Judge", "Entrepreneur", "Chef", "Police Officer",
               "Composer", "Massage therapist", "Student", "Researcher", "Barista",
               "Realtor", "Dancer", "Telemarketing Attendant",
               "Nurse", "Nanny", "Caretaker", "Teacher", "Animator",
               "Thief", "Banker", "CEO", "Manager", "Footballer"],
  secrets: ["Already killed a person",
            "Has royal relatives",
            "Has already witnessed a murder",
            "They're in love with their boss",
            "Hates pets",
            "Destroyed their neighbors' relationship for revenge",
            "All their actions are aimed at their own benefit",
            "Cries whenever watching dog movies",
            "Sings very well",
            "All their big ideas are plagiarism",
            "All of their trophies are fake",
            "Pulls hairs out when they're nervous",
            "Has a criminal record",
            "Lies about their real name",
            "They're addicted to cannolis",
            "Drinks almond milk even though they know it's bad for the environment",
            "Sells drugs",
            "Has a fake accent"],
  importantStuff: ["Afraid of butterflies",
                    "Loves coffee",
                    "Speaks 5 languages",
                    "Has a lot of virtual friends",
                    "They're a celebrity doppelganger",
                    "Has dyed hair",
                    "They're really smart",
                    "Likes to correct others",
                    "The oldest of their group of friends",
                    "Has a hard time understanding sarcasm",
                    "Wears comic book sweaters",
                    "Has a very characteristic accent",
                    "Extremely organized",
                    "A party person",
                    "Always has a glass of beer in their hand",
                    "Always complaining about work",
                    "Likes to dance while walking",
                    "Walks limping",
                    "Has a glass eye",
                    "Has a gold tooth",
                    "Makes jokes when nervous"],
  personalities: ["Very happy",
                  "Always down",
                  "A very kind and sweet person",
                  "Doesn't open up to anyone",
                  "Has a dark personality",
                  "Always smiling",
                  "Overly dramatic",
                  "A very outgoing person",
                  "A shy person, but nice",
                  "A despicable person",
                  "Always judging others",
                  "A very careful person",
                  "Would rather be right than be kind",
                  "Rather be kind than be right"],
  backgroundStories: ["Is an orphan",
                      "Used to be a teen popstar",
                      "Everything they do is aimed at giving their family a good life",
                      "Hides from everyone a murder they committed in the past",
                      "Had to leave their native country for political reasons",
                      "Lost their parents in a terrorist attack",
                      "Their life is based on trying to outdo their sister",
                      "Lives an extremely tedious life",
                      "Lives on a farm, far from the city",
                      "Has a secret identity, in which he pretends to be an ordinary person",
                      "Has two families",
                      "Their father was wrongfully convicted of murder",
                      "They were born in poverty and struggled to be where they are now",
                      "Lives the whole life in search of revenge",
                      "Wants to make the world a better place"]
};

var nomesPersonalizados = {
  // Nomes brasileiros
  nomesBrF: ["Natalia","Leticia","Victoria","Jenifer","Laura","Beatriz","Maria","Ana",
             "Julia","Alice","Mariana","Larissa","Sofia","Maria Eduarda","Helena","Lara",
             "Isabela","Camila","Valentina","Luana","Yasmin","Amanda","Rebeca"],
  nomesBrM: ["Guilherme","Vinicius","Rafael","Gabriel","Miguel","Lucas","Arthur",
             "Enzo","Rafael","João","Pedro","Gustavo","Bernardo","Matheus","Davi",
             "Heitor","Bruno","Henrique","Benjamim","Samuel","Lorenzo","Filipe",
             "Thiago","Matheus","Rômulo"],
  // Nomes americanos, canandenses, ingleses
  nomesIngF: ["Rachel","Monica","Phoebe","Robin","Lily","Tracy","Emily","Liz","Kelly","Agatha",
              "Elaine","Gisele","Lilian","Ellen","Evelyn","Stephanie","Jennifer","Mirela","Mariah",
              "Marjorie","Kendra","Kira","Charlie","Edith","Claudia","Olivia"],
  nomesIngM: ["Joseph","Chandler","Ross","Ted","Marshall","Barney","Leonard","Sheldon",
              "Howard","Wesely","Isaac","Jonathan","Thomas","Jefferson","Richard","Michael",
              "Anthony","Henry","Wellington","Alison","Patrick","Derek","Mark","Joshua"],
  // Nomes coreanos
  nomesCrF: ["Hyuna","Suji","Soojin","Jisoo","Jimin","Jina","Eun","Yuna",
             "Nabi","Nari","Eui","Dae","Gi","Sohui","Sarang","Chunja","Haeun",
             "Yejin","Jihye","Minji","Jaehwa"],
  nomesCrM: ["Jisoo","Hoseok","Namjoon","Jungkook","Jimin","Taeyang","Dongyul",
             "Kwan","Chunghee","Dakho","Bonhwa","Suk","Dongsun","Chinhwa","Chulmoo",
             "Chinmae"],
  // Nomes chineses
  nomesChF: ["Zining","Meng","Heshibi","Ahkum","An","Bo","Li","Huan","Huo","Ji",
             "Jia","Jiao","Jie","Ju","Kueng","Le","Lei"],
  nomesChM: ["Han","ChuangChuang","Lizheng","Amem","Chan","Chao","Chen","Yixing","Cheung",
             "Chong","Daichi","Irie","Deshi","Yan","Yin","Quon","Feng","Fu"],
  // Nomes peruanos, colombianos, chilenos, venezuelanos
  nomesEsF: ["Daniela","Roberta","Dulce","Luna","Isabel","Andressa","Jade","Paloma","Inês",
             "Nayara","Anita","Carmen","Serena","Andresa","Sol","Maria","Luz","Yolanda"],
  nomesEsM: ["Ricardo","Esteván","Diego","Eduardo","Tiago","Murilo","Ruan","Pablo","Diogo",
             "Santos","Juan","Iago","Ramon","Yago","Santiago"],
  // Nomes indianos
  nomesIndF: ["Priya","Priyanca","Anushka","Deva","Durga","Indira","Lakshmi",
              "Mahara","Maya","Nayana"],
  nomesIndM: ["Raj","Ajay","Vijay","Dinesh","Hari","Indra","Kabir","Krishna","Manu",
              "Radesh","Rajesh"],
  // Nomes tailandeses
  nomesTaiF: ["Lalisa","Sorn","Anong","Kamon","Kanda","Kanya","Kulap","Lawan",
              "Malai","Mali"],
  nomesTaiM: ["Kunpimuk","Khalan","Arthit","Somchai","Preecha","Suchart","Sunan"],
  // Nomes quenianos
  nomesQuF: ["Naliaka","Abla","Abuya","Afrika","Habeebah",
             "Hadhi","Hadiya","Jaha","Jahia"],
  nomesQuM: ["Quinto","Juma","Abase","Abdalla","Abdul","Baraka","Bashiri",
             "Cheja","Chega","Chimalsi","Chuma","Daud","Dhoruba"],
  // Nomes japoneses
  nomesJpF: ["Mina","Momo","Nao","Nanami","Nara","Naomi","Mari","Akemi","Sakura",
             "Hana","Yumi","Hinata"],
  nomesJpM: ["Masaya","Tokiya","Sasuke","Yuri","Akira","Shin","Katsuo","Tatsuo",
             "Susumo","Ken","Hiroshi"],
  // Nomes vietnamitas
  nomesVietF: ["Loan","Mai","Chi","Lan","Kim","Kim-ly","Phuong","Thuy"],
  nomesVietM: ["Cam","Hong","An Dung","Cuong","Dai","Dinh"],
  // Nomes filipinos
  nomesFilF: ["Justine","Kim","Francis","Jester","Jonel","Dado","Ronil","Adriel"],
  nomesFilM: ["Ronnel","Efren","Danilo","Kimlee","Xian","Kenjie","Ojera","Jonniell"],
  // Nomes franceses
  nomesFrF: ["Mariana","Lorena","Heloísa","Isabel","Nicole","Sabrina","Alícia","Simone"],
  nomesFrM: ["Étienne","Adam","Paul","Louis","Arthur","Victor","Jules","Joseph","Antoine"],
  // Nomes italianos
  nomesItF: ["Francesca","Bianca","Milena","Luna","Giovanna","Sandra","Giovana","Andreia","Alessandra"],
  nomesItM: ["Francesco","Lorenzo","Enzo","Pietro","Alessandro","Sandro","Enrico","Luca","Costa"]
};

var sobrenomesPersonalizados = {
  // Sobrenomes brasileiros
  sobrenomesBr: ["Pinheiro","Silva","Trindade","Gomes","Ferreira","Souza","Arruda",
                 "Barros","Oliveira","Araújo"],
  // Sobrenomes americanos, canandenses, ingleses
  sobrenomesIng: ["Mosley","Stinson","Eriksen","Cyrus","Clarke","Tompson","Johnson",
                "Thomas","Roberts","Wright","Hall","Edwards","Harris","Wood","Hughes"],
  // Sobrenomes coreanos
  sobrenomesCr: ["Kim","Park","Im","Lee","Choi","Jeong","Jung","Kang","Yoong","Wang"],
  // Sobrenomes chineses
  sobrenomesCh: ["Su","Wang","Ian","Zhang","Zhao","Yang","Huang","Sol","Xu","Guo","Ma"],
  // Sobrenomes peruanos, colombianos, chilenos, venezuelanos
  sobrenomesEs: ["Martinez","Fernández","González","Rodríguez","Flores","Hernández",
                 "López","Benítez","Sanchez","Quispe","Muñoz"],
  // Sobrenomes indianos
  sobrenomesInd: ["Mainara","Mahara","Indra","Aiyra","Turmalina","Pândita","Chopra","Rai"],
  // Sobrenomes tailandeses
  sobrenomesTai: ["Manoban","Ngamsangchaikit","Paenduangnet","Sitsongpeenong"],
  // Sobrenomes quenianos
  sobrenomesQu: ["Khaemba","Saidi","Trabelsi","Ali","Ahmed","Ibrahim","Nkosi","Moyo"],
  // Sobrenomes japoneses
  sobrenomesJp: ["Todo","Sei","Watanabe","Yamamoto","Saito","Yoshida","Yamazaki","Saikou"],
  // Sobrenomes vietnamitas
  sobrenomesViet: ["Tudo","Li","Zhang","Nguyen","Hue"],
  // Sobrenomes filipinos
  sobrenomesFil: ["Abdulhamid","Abdulla","Navarro","Zyrus","Pempengco"],
  // Sobrenomes franceses
  sobrenomesFr: ["Sinclaire","Martin","Bernard","Thomas","Petit","Robert","Durand","Dubois"],
  // Sobrenomes italianos
  sobrenomesIt: ["Moretti","Rossi","Bernardi","De Luca","Lombardi","Fontana","Ferrari","Esposito","Bianchi"]
};

function geraNome() {
  if (generoAtual == 2) {
    generoAtual = aleatorio(0,1);
  }
  // Mulher brasileira
  if (generoAtual == 0 && nacionalidadeAtual == 0) {
    var indice = aleatorio(0,nomesPersonalizados.nomesBrF.length-1);
    return nomesPersonalizados.nomesBrF[indice];
  }
  // Homem brasileiro
  else if (generoAtual == 1 && nacionalidadeAtual == 0) {
    var indice = aleatorio(0,nomesPersonalizados.nomesBrM.length-1);
    return nomesPersonalizados.nomesBrM[indice];
  }
  // Mulher americana, canadense ou inglesa
  else if (generoAtual == 0 && nacionalidadeAtual >= 1 && nacionalidadeAtual <= 3) {
    var indice = aleatorio(0,nomesPersonalizados.nomesIngF.length-1);
    return nomesPersonalizados.nomesIngF[indice];
  }
  // Homem americano, canadense ou ingles
  else if (generoAtual == 1 && nacionalidadeAtual >= 1 && nacionalidadeAtual <= 3) {
    var indice = aleatorio(0,nomesPersonalizados.nomesIngM.length-1);
    return nomesPersonalizados.nomesIngM[indice];
  }
  // Mulher coreana
  else if (generoAtual == 0 && nacionalidadeAtual == 4) {
    var indice = aleatorio(0,nomesPersonalizados.nomesCrF.length-1);
    return nomesPersonalizados.nomesCrF[indice];
  }
  // Homem coreano
  else if (generoAtual == 1 && nacionalidadeAtual == 4) {
    var indice = aleatorio(0,nomesPersonalizados.nomesCrM.length-1);
    return nomesPersonalizados.nomesCrM[indice];
  }
  // Mulher chinesa
  else if (generoAtual == 0 && nacionalidadeAtual == 5) {
    var indice = aleatorio(0,nomesPersonalizados.nomesChF.length-1);
    return nomesPersonalizados.nomesChF[indice];
  }
  // Homem chines
  else if (generoAtual == 1 && nacionalidadeAtual == 5) {
    var indice = aleatorio(0,nomesPersonalizados.nomesChM.length-1);
    return nomesPersonalizados.nomesChM[indice];
  }
  // Mulher peruana, colombiana, chilena ou venezuelana
  else if (generoAtual == 0 && nacionalidadeAtual >= 6 && nacionalidadeAtual <= 9) {
    var indice = aleatorio(0,nomesPersonalizados.nomesEsF.length-1);
    return nomesPersonalizados.nomesEsF[indice];
  }
  // Homem peruano, colombiano, chileno ou venezuelano
  else if (generoAtual == 1 && nacionalidadeAtual >= 6 && nacionalidadeAtual <= 9) {
    var indice = aleatorio(0,nomesPersonalizados.nomesEsM.length-1);
    return nomesPersonalizados.nomesEsM[indice];
  }
  // Mulher indiana
  else if (generoAtual == 0 && nacionalidadeAtual == 10) {
    var indice = aleatorio(0,nomesPersonalizados.nomesIndF.length-1);
    return nomesPersonalizados.nomesIndF[indice];
  }
  // Homem indiano
  else if (generoAtual == 1 && nacionalidadeAtual == 10) {
    var indice = aleatorio(0,nomesPersonalizados.nomesIndM.length-1);
    return nomesPersonalizados.nomesIndM[indice];
  }
  // Mulher tailandesa
  else if (generoAtual == 0 && nacionalidadeAtual == 11) {
    var indice = aleatorio(0,nomesPersonalizados.nomesTaiF.length-1);
    return nomesPersonalizados.nomesTaiF[indice];
  }
  // Homem tailandes
  else if (generoAtual == 1 && nacionalidadeAtual == 11) {
    var indice = aleatorio(0,nomesPersonalizados.nomesTaiM.length-1);
    return nomesPersonalizados.nomesTaiM[indice];
  }
  // Mulher queniana
  else if (generoAtual == 0 && nacionalidadeAtual == 12) {
    var indice = aleatorio(0,nomesPersonalizados.nomesQuF.length-1);
    return nomesPersonalizados.nomesQuF[indice];
  }
  // Homem queniano
  else if (generoAtual == 1 && nacionalidadeAtual == 12) {
    var indice = aleatorio(0,nomesPersonalizados.nomesQuM.length-1);
    return nomesPersonalizados.nomesQuM[indice];
  }
  // Mulher japonesa
  else if (generoAtual == 0 && nacionalidadeAtual == 13) {
    var indice = aleatorio(0,nomesPersonalizados.nomesJpF.length-1);
    return nomesPersonalizados.nomesJpF[indice];
  }
  // Homem japonesa
  else if (generoAtual == 1 && nacionalidadeAtual == 13) {
    var indice = aleatorio(0,nomesPersonalizados.nomesJpM.length-1);
    return nomesPersonalizados.nomesJpM[indice];
  }
  // Mulher vietnamita
  else if (generoAtual == 0 && nacionalidadeAtual == 14) {
    var indice = aleatorio(0,nomesPersonalizados.nomesVietF.length-1);
    return nomesPersonalizados.nomesVietF[indice];
  }
  // Homem vietnamita
  else if (generoAtual == 1 && nacionalidadeAtual == 14) {
    var indice = aleatorio(0,nomesPersonalizados.nomesVietM.length-1);
    return nomesPersonalizados.nomesVietM[indice];
  }
  // Mulher filipina
  else if (generoAtual == 0 && nacionalidadeAtual == 15) {
    var indice = aleatorio(0,nomesPersonalizados.nomesFilF.length-1);
    return nomesPersonalizados.nomesFilF[indice];
  }
  // Homem filipino
  else if (generoAtual == 1 && nacionalidadeAtual == 15) {
    var indice = aleatorio(0,nomesPersonalizados.nomesFilM.length-1);
    return nomesPersonalizados.nomesFilM[indice];
  }
  // Mulher francesa
  else if (generoAtual == 0 && nacionalidadeAtual == 16) {
    var indice = aleatorio(0,nomesPersonalizados.nomesFrF.length-1);
    return nomesPersonalizados.nomesFrF[indice];
  }
  // Homem frances
  else if (generoAtual == 1 && nacionalidadeAtual == 16) {
    var indice = aleatorio(0,nomesPersonalizados.nomesFrM.length-1);
    return nomesPersonalizados.nomesFrM[indice];
  }
  // Mulher italiana
  else if (generoAtual == 0 && nacionalidadeAtual == 17) {
    var indice = aleatorio(0,nomesPersonalizados.nomesItF.length-1);
    return nomesPersonalizados.nomesItF[indice];
  }
  // Homem italiano
  else if (generoAtual == 1 && nacionalidadeAtual == 17) {
    var indice = aleatorio(0,nomesPersonalizados.nomesItM.length-1);
    return nomesPersonalizados.nomesItM[indice];
  }
}

function geraSobrenome() {
  switch(nacionalidadeAtual) {
    // Brasileiro
    case 0:
      var indice = aleatorio(0,sobrenomesPersonalizados.sobrenomesBr.length-1);
      return sobrenomesPersonalizados.sobrenomesBr[indice];
    // Americano, canadense e ingles
    case 1:
    case 2:
    case 3:
      var indice = aleatorio(0,sobrenomesPersonalizados.sobrenomesIng.length-1);
      return sobrenomesPersonalizados.sobrenomesIng[indice];
    // Coreano
    case 4:
      var indice = aleatorio(0,sobrenomesPersonalizados.sobrenomesCr.length-1);
      return sobrenomesPersonalizados.sobrenomesCr[indice];
    // Chines
    case 5:
      var indice = aleatorio(0,sobrenomesPersonalizados.sobrenomesCh.length-1);
      return sobrenomesPersonalizados.sobrenomesCh[indice];
    // Peruano, colombiano, chileno e venezuelano
    case 6:
    case 7:
    case 8:
    case 9:
      var indice = aleatorio(0,sobrenomesPersonalizados.sobrenomesEs.length-1);
      return sobrenomesPersonalizados.sobrenomesEs[indice];
    // Indiano
    case 10:
      var indice = aleatorio(0,sobrenomesPersonalizados.sobrenomesInd.length-1);
      return sobrenomesPersonalizados.sobrenomesInd[indice];
    // Tailandes
    case 11:
      var indice = aleatorio(0,sobrenomesPersonalizados.sobrenomesTai.length-1);
      return sobrenomesPersonalizados.sobrenomesTai[indice];
    // Queniano
    case 12:
      var indice = aleatorio(0,sobrenomesPersonalizados.sobrenomesQu.length-1);
      return sobrenomesPersonalizados.sobrenomesQu[indice];
    // Japones
    case 13:
      var indice = aleatorio(0,sobrenomesPersonalizados.sobrenomesJp.length-1);
      return sobrenomesPersonalizados.sobrenomesJp[indice];
    // Vietnamita
    case 14:
      var indice = aleatorio(0,sobrenomesPersonalizados.sobrenomesViet.length-1);
      return sobrenomesPersonalizados.sobrenomesViet[indice];
    // Filipino
    case 15:
      var indice = aleatorio(0,sobrenomesPersonalizados.sobrenomesFil.length-1);
      return sobrenomesPersonalizados.sobrenomesFil[indice];
    // Frances
    case 16:
      var indice = aleatorio(0,sobrenomesPersonalizados.sobrenomesFr.length-1);
      return sobrenomesPersonalizados.sobrenomesFr[indice];
    // Italiano
    case 17:
      var indice = aleatorio(0,sobrenomesPersonalizados.sobrenomesIt.length-1);
      return sobrenomesPersonalizados.sobrenomesIt[indice];
  }
}

function geraGenero() {
  switch(idiomaAtual) {
    case 0:
      var indice = aleatorio(0,dados.generos.length-1);
      generoAtual = indice;
      return dados.generos[indice];
    case 1:
      var indice = aleatorio(0,dados.genders.length-1);
      generoAtual = indice;
      return dados.genders[indice];
  }
}

function geraNacionalidade() {
  switch(idiomaAtual) {
    case 0:
      var indice = aleatorio(0,dados.nacionalidades.length-1);
      nacionalidadeAtual = indice;
      return dados.nacionalidades[indice];
    case 1:
      var indice = aleatorio(0,dados.nationalities.length-1);
      nacionalidadeAtual = indice;
      return dados.nationalities[indice];
  }
}

function geraIdade() {
  switch(idiomaAtual) {
    case 0:
      var indice = aleatorio(0,dados.idades.length-1);
      return dados.idades[indice];
    case 1:
      var indice = aleatorio(0,dados.ages.length-1);
      return dados.ages[indice];
  }
}

function geraSitFinanceira() {
  switch(idiomaAtual) {
    case 0:
      var indice = aleatorio(0,dados.situacoesFinanceiras.length-1);
      return dados.situacoesFinanceiras[indice];
    case 1:
      var indice = aleatorio(0,dados.financialStatus.length-1);
      return dados.financialStatus[indice];
  }
}

function geraLema() {
  switch(idiomaAtual) {
    case 0:
      var indice = aleatorio(0,dados.lemasDeVida.length-1);
      return dados.lemasDeVida[indice];
    case 1:
      var indice = aleatorio(0,dados.mottos.length-1);
      return dados.mottos[indice];
  }
}

function geraOcupacao() {
  switch(idiomaAtual) {
    case 0:
      var indice = aleatorio(0,dados.ocupacoes.length-1);
      return dados.ocupacoes[indice];
    case 1:
      var indice = aleatorio(0,dados.ocupations.length-1);
      return dados.ocupations[indice];
  }
}

function geraAlgoMarcante() {
  switch(idiomaAtual) {
    case 0:
      var indice = aleatorio(0,dados.coisasMarcantes.length-1);
      return dados.coisasMarcantes[indice];
    case 1:
      var indice = aleatorio(0,dados.importantStuff.length-1);
      return dados.importantStuff[indice];
  }
}

function geraSegredo() {
  switch(idiomaAtual) {
    case 0:
      var indice = aleatorio(0,dados.segredos.length-1);
      return dados.segredos[indice];
    case 1:
      var indice = aleatorio(0,dados.secrets.length-1);
      return dados.secrets[indice];
  }
}

function geraPersonalidade() {
  switch(idiomaAtual) {
    case 0:
      var indice = aleatorio(0,dados.personalidades.length-1);
      return dados.personalidades[indice];
    case 1:
      var indice = aleatorio(0,dados.personalities.length-1);
      return dados.personalities[indice];
  }
}

function geraHistoria() {
  switch(idiomaAtual) {
    case 0:
      var indice = aleatorio(0,dados.historiasDeFundo.length-1);
      return dados.historiasDeFundo[indice];
    case 1:
      var indice = aleatorio(0,dados.backgroundStories.length-1);
      return dados.backgroundStories[indice];
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
