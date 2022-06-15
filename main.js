const menuItems = document.querySelectorAll(".navItems"); 
const wrapper = document.querySelector(".sliderWrapper"); 
// console.log(menuItems); 



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



const productTitle = document.querySelector(".productTitle"); 
const productPrice = document.querySelector(".productPrice"); 
const productDescription = document.querySelector(".productDescription"); 
const productImage = document.querySelector(".productImage"); 
const productColors = document.querySelectorAll(".color"); 
const productSizes = document.querySelectorAll(".size")

let chosenProduct = products[0]; 
menuItems.forEach((item, index) =>{
    item.addEventListener("click", ()=>{
    
        wrapper.style.transform = `translateX(${-100 * index}vw)`; 
        
        chosenProduct = products[index]; 
        
        productTitle.innerHTML = chosenProduct.title;
        productPrice.innerHTML = "$" + chosenProduct.price;
        productImage.src = chosenProduct.colors[0].img; 


        productColors.forEach((color, index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code; 
        })
        
    })
})

productColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        productImage.src = chosenProduct.colors[index].img; 
        console.log(color.style.backgroundColor)
    })
})

productSizes.forEach((size) =>{
    size.addEventListener("click", ()=>{
        productSizes.forEach((size)=>{
            size.style.backgroundColor = "white"; 
            size.style.color = "black"; 
            
        })
        size.style.backgroundColor = 'black'; 
        size.style.color = "white";
    })
})
