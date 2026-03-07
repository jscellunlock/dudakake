 function toggleMenu(){
document.getElementById("menuLinks").classList.toggle("ativo");
}

const produtos = {

1:{
nome:"Bolo Chocolate com Ninho ",
desc:"Bolo caseiro fofinho com recheio de chocolate e ninho. - (Tamanho: M)",
preco:"R$ 45,00",
imagem:"img/ninho.jpeg",
prazo:"60 minutos"
},

2:{
nome:"Bolo Chocolate",
desc:"Bolo de Chocolate cremoso e delicioso. - (Tamanho: M)",
preco:"R$ 35,00",
imagem:"img/cho2.jpeg",
prazo:"60 minutos"
},

3:{
nome:"Bolo de Limão",
desc:"Bolo de limão cremoso e delicioso. - (Tamanho: M)",
preco:"R$ 30,00",
imagem:"img/brigadeiro.png",
prazo:"60 minutos"
},

4:{
nome:"Bolo Chocolate Brigadeiro",
desc:"Bolo de chocolate com brigadeiro cremoso. - (Tamanho: M)",
preco:"R$ 50,00",
imagem:"img/limao2.png",
prazo:"60 minutos"
},

5:{
nome:"Tortas por tamanho Sabor: Abacaxi (P)",
desc:"Tortas por tamanho Sabor: Abacaxi tamnho (P)",
preco:"R$ 40,00",
imagem:"img/tama P.png",
prazo:"60 minutos"
},

6:{
nome:"Tortas por tamanho Sabor: Abacaxi (M)",
desc:"Tortas por tamanho Sabor: Abacaxi tamanho (M)",
preco:"R$ 60,00",
imagem:"img/tama M.png",
prazo:"60 minutos"
},

7:{
nome:"Tortas por tamanho Sabor: Banana (P)",
desc:"Tortas por tamanho Sabor: Banana tamanho(P)",
preco:"R$ 35,00",
imagem:"img/bana P.png",
prazo:"60 minutos"
},

8:{
nome:"Tortas por tamanho Sabor: Banana (M)",
desc:"Tortas por tamanho Sabor: Banana tamanho(M)",
preco:"R$ 50,00",
imagem:"img/bana M.png",
prazo:"60 minutos"
},

9:{
nome:"Bolo caseiro simples",
desc:"Simples: trigo)",
preco:"R$ 20,00",
imagem:"img/bana",
prazo:"60 minutos"
},

10:{
nome:"Bolo caseiro simples",
desc:"Sabor: Chocolate)",
preco:"R$ 20,00",
imagem:"img/bana",
prazo:"60 minutos"
},

11:{
nome:"Bolo caseiro simples",
desc:"Simples: Formiqueiro)",
preco:"R$ 20,00",
imagem:"img/bana",
prazo:"60 minutos"
},

12:{
nome:"Bolo caseiro simples",
desc:"Simples: Fuba)",
preco:"R$ 20,00",
imagem:"img/bana",
prazo:"60 minutos"
},

13:{
nome:"Bolo caseiro simples",
desc:"Simples: Mesclado)",
preco:"R$ 23,00",
imagem:"img/bana",
prazo:"60 minutos"
},

14:{
nome:"Mine bolo vulcao",
desc:"Sabor: Limao)",
preco:"R$ 12,00",
imagem:"img/bana",
prazo:"60 minutos"
},

15:{
nome:"Mine bolo vulcao",
desc:"Sabor: Paçoca)",
preco:"R$ 12,00",
imagem:"img/bana",
prazo:"60 minutos"
},

16:{
nome:"Mine bolo vulcao",
desc:"Sabor: Chocolate)",
preco:"R$ 14,00",
imagem:"img/bana",
prazo:"60 minutos"
},

17:{
nome:"Mine bolo vulcao",
desc:"Sabor: Bem casado)",
preco:"R$ 14,00",
imagem:"img/bana",
prazo:"60 minutos"
},

18:{
nome:"Mine bolo vulcao",
desc:"Sabor: Chocolate com musse de maracuja)",
preco:"R$ 15,00",
imagem:"img/bana",
prazo:"60 minutos"
},

19:{
nome:"Mine bolo vulcao",
desc:"Sabor: Ninho com morango)",
preco:"R$ 15,00",
imagem:"img/bana",
prazo:"60 minutos"
},

20:{
nome:"Mine bolo vulcao",
desc:"Sabor: Chocolate com morango)",
preco:"R$ 15,00",
imagem:"img/bana",
prazo:"60 minutos"
},

21:{
nome:"Mine bolo vulcao",
desc:"Sabor: Ninho com geleia de morango)",
preco:"R$ 15,00",
imagem:"img/bana",
prazo:"60 minutos"
}

}


function abrirProduto(id){

const produto = produtos[id]

document.getElementById("modalNome").textContent = produto.nome
document.getElementById("modalDesc").textContent = produto.desc
document.getElementById("modalPreco").textContent = produto.preco
document.getElementById("modalPrazo").textContent = "Prazo: " + produto.prazo
document.getElementById("modalImg").src = produto.imagem

const numero = "5581993221059"

const msg = `Olá gostaria de pedir: ${produto.nome} - ${produto.preco}`

document.getElementById("whatsappLink").href =
`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`

document.getElementById("modal").style.display = "flex"

}


function fecharModal(){
document.getElementById("modal").style.display = "none"
}


window.onclick = function(e){

if(e.target.id === "modal"){
fecharModal()
}

}