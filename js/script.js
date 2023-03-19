//Header плашка
/*
const headerElem = document.querySelector(".header");

const callback = function (entries, observer) {
	if (entries[0].isInteresting) {
		headerElem.classList.remove('scroll')
	} else {
		headerElem.classList.add("scroll")
	}
};

const headerObserver = new IntersectionObserver(callback)
headerObserver.observe(headerElem)
*/

const headerBurger = document.querySelector(".header__burger");
headerBurger.addEventListener("click", function (e) {
	const headerMenu = document.querySelector(".header__menu");
	headerMenu.classList.toggle("active");
	const headerBurgerIcon = document.querySelector(".icon-menu")
	console.log(headerBurgerIcon);
	headerBurgerIcon.classList.toggle("active");
	document.body.classList.toggle("scroll-lock")
})


//Отправка формы


const form = document.forms.form_footer;
const formArrow = document.querySelector(".form-footer__arrow");

if (form.elements.emailInput.value > 0) {
	formArrow.addEventListener("click", function (e) {
		form.submit()
	})

}
//Фокус
const formContact = document.forms.formContact;
const inputs = document.querySelectorAll(".form-contact-us__input");

if (inputs.length > 0) {
	Array.from(inputs).forEach((input) => {
		const placehold = input.placeholder;
		input.addEventListener("focus", function (e) {
			input.classList.add("active");
			input.placeholder = '';
		})
		input.addEventListener("blur", function (e) {
			input.classList.remove("active")
			input.placeholder = placehold;
		})
	})
}