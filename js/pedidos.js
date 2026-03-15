function finalizarPedido(){

let lista = ""

carrinho.forEach(p => {

lista += `${p.nome} - ${p.preco}\n`

})

fetch("/.netlify/functions/salvar-pedido",{
method:"POST",
body:JSON.stringify({pedido:lista})
})
.then(r=>r.json())
.then(d=>{

window.location.href="/pix.html?id="+d.id

})

}

function enviarWhatsapp(lista){

let msg = "Novo pedido:\n"+lista

window.open(
"https://wa.me/5581993221059?text="+encodeURIComponent(msg)
)

}