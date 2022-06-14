const menuItems = document.querySelectorAll(".navItems"); 
const wrapper = document.querySelector(".sliderWrapper"); 
// console.log(menuItems); 

menuItems.forEach((item, index) =>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`; 
         
        
    })
})