(function (){
	let buttonMenu = document.querySelector('.aside-nav__hide-menu--closed');
let hidemenu = document.querySelector('.hide');


buttonMenu.addEventListener('click', function() {
buttonMenu.classList.toggle('aside-nav__hide-menu--opend');
hidemenu.classList.toggle('hide');
});
})();



(function (){
	let buttonMenu = document.querySelector('.main-nav__profile-button');
let hidemenu = document.querySelector('.profile-menu-popup');


buttonMenu.addEventListener('click', function() {

hidemenu.classList.toggle('popup-hide');
});
})();
(function (){
	let buttonMenu = document.querySelector('.main-header__notification');
let hidemenu = document.querySelector('.notifications-popup');


buttonMenu.addEventListener('click', function() {

hidemenu.classList.toggle('popup-hide');
});
})();
//для страницы компании
(function (){
	let companyButton = document.querySelector('.subscriptions-header-subscriptions-company');
	let companyPopup = document.querySelector('.company-popup');

companyButton.addEventListener('click', function() {

companyPopup.classList.toggle('hidemenu');

});
})();

