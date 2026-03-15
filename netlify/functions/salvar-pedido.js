exports.handler = async function(event){

const pedido = JSON.parse(event.body)

const id = Date.now()

return {
statusCode:200,
body:JSON.stringify({
id:id
})
}

}