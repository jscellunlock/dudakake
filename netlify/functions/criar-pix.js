exports.handler = async function(event){

const dados = JSON.parse(event.body)

return {
statusCode:200,
body:JSON.stringify({
pix:"00020126360014BR.GOV.BCB.PIX..."
})
}

}