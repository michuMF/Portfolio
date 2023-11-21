const menu = document.querySelector(".menu-links")
const icon = document.querySelector(".hamburger-icon")

const toogleMenu = () => {
	menu.classList.toggle("open")
	icon.classList.toggle("open")
}

icon.addEventListener("click", toogleMenu)
menu.addEventListener("click", toogleMenu)
