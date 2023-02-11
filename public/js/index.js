let scrolling = document.body
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")
const calcullateHeight = main.offsetHeight - footer.offsetHeight - 663
console.log(calcullateHeight)

window.addEventListener("scroll", function(){
	if(window.scrollY >= 577.5999755859375 && window.scrollY < calcullateHeight){
		scrolling.classList.add("__white")
		console.log(window.scrollY)
	}else{
		scrolling.classList.remove("__white")
	}
})