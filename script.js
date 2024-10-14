// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Selecionando o botão que altera as frases
const changePhrases = document.getElementById("btn-mudar-frases");

const mensagem2 = document.getElementById("mensagem2");
const mensagem3 = document.getElementById("mensagem3");
const mensagem4 = document.getElementById("mensagem4");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

changePhrases.addEventListener("click", function(){
    mensagem2.textContent = "Frase modificada 1";
    mensagem3.textContent = "Frase modificada 2";
    mensagem4.textContent = "Frase modificada 3";
}); 