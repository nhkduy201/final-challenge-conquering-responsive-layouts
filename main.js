document.addEventListener('DOMContentLoaded', () => {
	let hamberger = document.querySelector('.hamberger');
	let nav_list = document.querySelector('.nav-list');

	hamberger.addEventListener('click', toggle);

	function toggle() {
		this.classList.toggle('open');
		nav_list.classList.toggle('nav-list--visible');
	}
});
