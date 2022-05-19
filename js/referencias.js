//Criando a productList
const productList = document.createElement('ul');
//h3 do total
const valorDaCompra = document.createElement('h3')

//Aplicando a productList ao aside
aside.appendChild(productList);

//Função que lista produtos e botão
function listarProdutos(data){

    productList.innerHTML = ""
    for(let i = 0; i<data.length; i++){
        const produto = data[i]
        
        details(produto)
    }


    const button = document.createElement('button')
    button.innerText = "Finalizar"
    button.classList.add('btnEnviar')
    productList.appendChild(button)
}

//carrinho existente:
listarProdutos(data)

//Criação de evento de evenvio de produto 
const inputList = document.querySelector("")
inputList.addEventListener("submit", incluir)

//Cadastro de produto:
function incluir(event){
    
}


//Listar item
const ProductDetails = document.createElement('div')
aside.productList.appendChild(ProductDetails);
 
function details(produto){
    const  productItem  = document.createElement("li")
    const name  = produto.name
    const price = produto.price

    const  tagDiv       = document.createElement("div")
    const  tagName      = document.createElement("p")
    const  tagPrice     = document.createElement("p")

    tagName.innerHTML    = `Produto: ${name}`
    tagPrice.innerHTML   = `Preço: R$ ${price}`

    tagDiv.classList.add("infos")
    tagDiv.appendChild(tagName)
    tagDiv.appendChild(tagPrice)
    productItem.appendChild(tagDiv)
    productList.appendChild(productItem)

}

//Mostrando o resultado total
const totalPrice = document.createElement('h3')
main.appendChild(totalPrice)


function vtotal (data) {
    
    let total = 0

    for (let i = 0; i < data.length; i++){
        total += data[i].price  
    }
    
    return total
}

valorDaCompra.innerHTML = `<strong>Total  R$ ${vtotal(carrinho)} </strong>`
aside.appendChild(valorDaCompra)