/* 

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
     Passo 1 - pegar o botão de seleção de plataformas no js pode verificar quando o usuário clicar em cima dele

     Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

     Passo 3 - pegar o clique do usuário no js

     Passo 4 - quando o usuário clicar, adicionar a classe ativo na listafgem de plataformars dentro do botão pra que o conteúdo apareça

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar no botão de fechar, o conteúdo deve ser escondido
      
     Passo 1 - verificar se o botão já está aberto, se sim, devemos remover a classse ativo pra que ele esconda o conteúdo novamente 

*/ 

//Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma

//Passo 1 - pegar o botão de seleção de plataformas no js pode verificar quando o usuário clicar em cima dele

 const botao = document.querySelector(".btn-plataforma");

 //Passo 2 - pegar o elemento do conteudo que precisa ser mostrado
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//Passo 3 - pegar o clique do usuário no js
botao.addEventListener("click", () => {
   elementoPlataformas.classList.toggle("ativo");
});