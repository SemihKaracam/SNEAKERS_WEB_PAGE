const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const productImg = document.querySelector(".productImg")
const productTitle = document.querySelector(".productTitle")
const productPrice = document.querySelector(".productPrice")
const productColors = document.querySelectorAll(".color")
const productSizes = document.querySelectorAll(".size")
menuItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault()
        wrapper.style.transform = `translateX(${-index * 100}vw)`
        choosenProduct = products[index]
        productImg.src = choosenProduct.colors[0].img
        productTitle.textContent = choosenProduct.title
        productPrice.textContent = `$${choosenProduct.price}`
        productColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code
        })      
       
    })
})

productColors.forEach((color,index)=>{
    color.addEventListener(("click"),()=>{
        productImg.src = choosenProduct.colors[index].img
    })
})

productSizes.forEach((size,index)=>{
    size.addEventListener("click",(e)=>{
        productSizes.forEach((size)=>{          
            size.style.backgroundColor = "white"
            size.style.color = "black"         
        })
        e.currentTarget.style.backgroundColor = "black"
        e.currentTarget.style.color = "white"
        
    })
    
})



/*MODAL*/

const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".closeBtn")
const buyBtn = document.querySelector(".btnProductBuy")


buyBtn.addEventListener("click",()=>{
    modal.style.display = "block"
})
closeBtn.addEventListener("click",()=>{
    modal.style.display = "none"
})