const placeholder = document.querySelector(".email")
const doc = document.documentElement
const attr = placeholder.getAttribute("placeholder")
placeholder.addEventListener("focus", function (event) {
	event.target.removeAttribute("placeholder")
})

placeholder.addEventListener("blur", function (event) {
	event.target.setAttribute("placeholder", attr)
})