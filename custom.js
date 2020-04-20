let loading = document.querySelector('.loading');
let close_menu = document.querySelector('#close');
let html = document.querySelector('html');
let menu_burger = document.querySelector('.menu_burger');
let navbar_burger = document.querySelector('.navbar_burger');

html.scrollTop = (0, 0);
let i = 0;
hide_menu = () => {
	menu_burger.classList.add('close');
	menu_burger.classList.remove('show');
}
window.onload = () => {
	loading.classList.add('disable');
	close_menu.addEventListener('click', hide_menu)
	menu_burger.addEventListener('click', hide_menu)

	navbar_burger.addEventListener('click', () => {
		menu_burger.classList.remove('close');
		menu_burger.classList.add('show');
	})
	window.addEventListener('click', () => {
		if (i==6) {
			i = -1;
		}
		i++;
		window.scrollTo(0, i* window.innerHeight);
	})
}

