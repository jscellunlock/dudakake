let carrinho = []

function adicionarCarrinho(id){

const produto = produtos[id]

carrinho.push(produto)

alert(produto.nome + " adicionado ao carrinho")

}