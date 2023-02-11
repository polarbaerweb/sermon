const scrollItem = document.body

window.addEventListener("scroll", function(){
	if(window.scrollY >= 559.2000122070312){
		scrollItem.classList.add("__white")
	}else{
		scrollItem.classList.remove("__white")
	}
})