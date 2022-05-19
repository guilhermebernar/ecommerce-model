///////////////////////////////////////////////
//CRIAÇÃO DE CARDS
const main = document.getElementById("main")
const card = document.createElement('ul');

main.appendChild(card);
card.classList.add("cardList")

function criarCards(data){

    for (let i = 0; i < data.length; i++){
        const  item  = document.createElement("li")

        const id    = data[i].id
        const img   = data[i].img
        const name  = data[i].nameItem
        const desc  = data[i].description
        const value = data[i].value
        const add   = data[i].addCart
        const tag   = data[i].tag
        
        const  tagDiv       = document.createElement("div")
        const  tagimg       = document.createElement("img")
        const  tagName      = document.createElement("p")
        const  tagValue     = document.createElement("p")
        const  tagDescr     = document.createElement("p")
        const  tagButton    = document.createElement("button")
        const  tagtag       = document.createElement("div")

        tagimg.src           = img
        tagName.innerHTML    = `${name}`
        tagValue.innerHTML   = `Preço: R$ ${value}`
        tagDescr.innerHTML   = `${desc}`
        tagButton.innerHTML  = `${add}`
        tagButton.id = id
        tagButton.addEventListener("click", addCart)
        tagtag.innerHTML     = `${tag}`

        tagDiv.classList.add("card")
        tagName.classList.add("nameItem")
        tagDescr.classList.add("descr")
        tagValue.classList.add("value")
        tagButton.classList.add("adcButton")
        tagtag.classList.add("categoria")

        tagDiv.appendChild(tagimg)
        tagDiv.appendChild(tagName)
        tagDiv.appendChild(tagDescr)
        tagDiv.appendChild(tagValue)
        tagDiv.appendChild(tagButton)
        tagDiv.appendChild(tagtag)
        
        item.appendChild(tagDiv)
        card.appendChild(item)
    }
}
//console.log(data)
criarCards(data)

///////////////////////////////////////////////
//CARRINHO DE COMPRA:

const aside         = document.getElementById("aside")
const cart          = document.createElement('ul')
const valorDaCompra = document.createElement('h3')

cart.classList.add("carrinho")
aside.appendChild(cart);

let dataCart = []
console.log(dataCart)

function criarCart(input){
    
    dataCart.unshift(input)
    console.log(dataCart)

    const  itemIn  = document.createElement("li")
    
    const name  = input.nameItem
    const value = input.value
    
    const  tag2Div       = document.createElement("div")
    const  tag2Name      = document.createElement("p")
    const  tag2Value     = document.createElement("p")
    const  tag2RmvButton    = document.createElement("button")

    tag2Name.innerHTML       = `${name}`
    tag2Value.innerHTML      = `Preço: R$ ${value}`
    tag2RmvButton.innerHTML  = "Remover"

    tag2Div.classList.add("itemList")
    tag2Name.classList.add("nameItem")
    tag2Value.classList.add("value")
    tag2RmvButton.classList.add("rmvButton")
    tag2RmvButton.addEventListener("click", (event)=>rmvCart(event))


    tag2Div.appendChild(tag2Name)
    tag2Div.appendChild(tag2Value)
    tag2Div.appendChild(tag2RmvButton)
    
    itemIn.appendChild(tag2Div)
    cart.appendChild(itemIn)

    if (dataCart > 0){
    const button = document.createElement('button')
    button.innerText = "Finalizar"
    button.appendChild(total)
    }

    const total = document.createElement('h3')
    aside.appendChild(total)
    valorDaCompra.innerHTML = `<strong>Total  R$ ${vtotal(dataCart)} </strong>`
}

///////////////////////////////////////////////
//Adicionando ao carrinho:
function addCart(){
    const inn = event.target.id
    for (let i = 0; i < data.length; i++){
        let item = data[i]
        if (item.id == inn){
           let inn = data[i]
           criarCart(inn)
        }
    }
}

function rmvCart(event) {
    //var newArray = dataCart.filter(event => event.id);
    //return dataCart = newArray
    console.log(event.target.parentElement.parentElement.remove())
}

const totalPrice = document.createElement('h3')
aside.appendChild(totalPrice)


function vtotal(dataCart) {
    
    let total = 0
    for (let i = 0; i < dataCart.length; i++){
        total += dataCart[i].value  
    }
    return total
}

valorDaCompra.innerHTML = `<strong>Total  R$ ${vtotal(addCart)} </strong>`
aside.appendChild(valorDaCompra)
