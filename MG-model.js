const cards = document.querySelectorAll(".model-card");

cards.forEach(card => {

card.addEventListener("click",function(e){

e.preventDefault()

const link=this.getAttribute("href")

document.body.style.opacity="0"

setTimeout(()=>{

window.location.href=link

},400)

})

})