if(performance.getEntriesByType("navigation")[0].type === "reload"){
window.location.href="index.html";
}


function iniciarQuiz(){

let nome = document.getElementById("nomeUsuario").value.trim();

if(nome === ""){

alert("Digite seu nome completo para participar do quiz!");

return;

}

localStorage.setItem("nomeUsuario", nome);

window.location.href="quiz.html";

}



const perguntas = [

{
p:"Qual gás aumenta o efeito estufa?",
r:["Oxigênio","Dióxido de Carbono (CO₂)","Nitrogênio","Hidrogênio"],
c:1
},

{
p:"O que significa ESG?",
r:["Environmental, Social and Governance","Energia Global","Estudo Social","Economia Geral"],
c:0
},

{
p:"Qual energia é renovável?",
r:["Carvão","Petróleo","Eólica","Diesel"],
c:2
},

{
p:"Reciclagem ajuda a:",
r:["Aumentar lixo","Reduzir impactos ambientais","Poluir rios","Gastar recursos"],
c:1
},

{
p:"A energia solar vem do:",
r:["Vento","Sol","Carvão","Petróleo"],
c:1
},

{
p:"Desmatamento causa:",
r:["Mais árvores","Perda de biodiversidade","Mais água","Menos poluição"],
c:1
},

{
p:"Economizar água é uma atitude:",
r:["Sustentável","Errada","Perigosa","Inútil"],
c:0
},

{
p:"ODS são objetivos da:",
r:["ONU","NASA","Escola","Empresa"],
c:0
},

{
p:"Lixo eletrônico deve ser:",
r:["Jogado no rio","Reciclado corretamente","Queimado","Abandonado"],
c:1
},

{
p:"Florestas ajudam a:",
r:["Produzir oxigênio","Aumentar lixo","Poluir","Acabar água"],
c:0
},

{
p:"Aquecimento global acontece pelo aumento de:",
r:["Gases de efeito estufa","Árvores","Água","Reciclagem"],
c:0
},

{
p:"Uma atitude sustentável é:",
r:["Reutilizar materiais","Desperdiçar água","Poluir rios","Jogar lixo"],
c:0
},

{
p:"Biodiversidade significa:",
r:["Variedade de vida","Quantidade de lixo","Construções","Máquinas"],
c:0
},

{
p:"Transporte menos poluente:",
r:["Bicicleta","Avião","Carro velho","Moto"],
c:0
},

{
p:"Consumir conscientemente é:",
r:["Evitar desperdício","Comprar tudo","Jogar fora","Gastar mais"],
c:0
},

{
p:"A água potável deve ser:",
r:["Protegida","Desperdiçada","Poluída","Ignorada"],
c:0
},

{
p:"Plantar árvores ajuda:",
r:["O meio ambiente","A poluição","O lixo","O desperdício"],
c:0
},

{
p:"Sustentabilidade envolve:",
r:["Ambiente, sociedade e economia","Somente dinheiro","Somente tecnologia","Nada"],
c:0
},

{
p:"Coleta seletiva separa:",
r:["Tipos de lixo","Pessoas","Animais","Água"],
c:0
},

{
p:"O plástico demora para:",
r:["Se decompor","Nascer","Crescer","Sumir rápido"],
c:0
},

{
p:"O planeta precisa de:",
r:["Preservação","Poluição","Desperdício","Descuidado"],
c:0
},

{
p:"ESG incentiva empresas a:",
r:["Responsabilidade","Poluição","Ignorar ambiente","Desperdício"],
c:0
},

{
p:"Qual recurso é essencial?",
r:["Água","Plástico","Petróleo","Ferro"],
c:0
},

{
p:"A reciclagem diminui:",
r:["Impactos ambientais","Árvores","Água","Energia"],
c:0
},

{
p:"Cuidar do planeta é responsabilidade:",
r:["De todos","De ninguém","Só empresas","Só escolas"],
c:0
}

];



let perguntaAtual = 0;

let pontos = 0;

function misturarRespostas(pergunta){

let respostas = pergunta.r.map((texto,index)=>{

return {

texto:texto,

correta:index === pergunta.c

};

});



respostas.sort(()=>Math.random()-0.5);



pergunta.r = respostas.map(item=>item.texto);



pergunta.c = respostas.findIndex(item=>item.correta);


}

function carregarPergunta(){

let pergunta = document.getElementById("pergunta");

if(!pergunta)return;


let dados = perguntas[perguntaAtual];
let porcentagem =
((perguntaAtual) / perguntas.length) * 100;

document.getElementById("progresso").style.width =
porcentagem + "%";
misturarRespostas(dados);

document.getElementById("contador").innerHTML =
"Pergunta " + (perguntaAtual + 1) + " de 25";


pergunta.innerHTML = dados.p;


let respostas = document.getElementById("respostas");

respostas.innerHTML="";


dados.r.forEach((texto,index)=>{


let botao = document.createElement("button");

botao.className="resposta";

botao.innerHTML=texto;


botao.onclick=function(){

responder(index);

};


respostas.appendChild(botao);


});


}



function responder(escolha){


if(escolha === perguntas[perguntaAtual].c){

pontos++;

}



perguntaAtual++;


if(perguntaAtual < perguntas.length){

if(document.getElementById("pergunta")){
    carregarPergunta();
}


}else{


localStorage.setItem("pontuacao", pontos);


if(pontos >= 15){

localStorage.setItem("resultado","APROVADO");

}else{

localStorage.setItem("resultado","REPROVADO");

}


window.location.href="certificado.html";


}


}



if(document.getElementById("pergunta")){
    carregarPergunta();
}

// =========================
// ACESSIBILIDADE
// =========================


let tamanhoFonte = 100;



function aumentarFonte(){

if(tamanhoFonte < 140){

tamanhoFonte += 10;

document.body.style.fontSize =
tamanhoFonte + "%";

}

}




function diminuirFonte(){

if(tamanhoFonte > 80){

tamanhoFonte -= 10;

document.body.style.fontSize =
tamanhoFonte + "%";

}

}





function contraste(){

document.body.classList.toggle(
"alto-contraste"
);

}





function lerPagina(){


let texto =
document.body.innerText;


let fala =
new SpeechSynthesisUtterance(texto);


fala.lang="pt-BR";


speechSynthesis.speak(fala);


}

const btnProjeto = document.getElementById("btnProjeto");

if(btnProjeto){
    btnProjeto.addEventListener("click", function(){

        document.getElementById("sobre").scrollIntoView({
            behavior:"smooth"
        });

    });
}
