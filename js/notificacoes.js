function notificarNovoPedido(){

if(Notification.permission === "granted"){

new Notification("Novo pedido recebido")

}

else if(Notification.permission !== "denied"){

Notification.requestPermission().then(function(permission){

if(permission === "granted"){

new Notification("Novo pedido recebido")

}

})

}

}