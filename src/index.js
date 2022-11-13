import './pages/index.css';

const buttonMenu = document.querySelector('.header__button');
const modalNav = document.querySelector('.modal-nav');
const buttonModal = document.querySelector('.modal-nav__button');
const schowModalNav = () => {
  modalNav.classList.add('modal-nav_function_open');
};
const closeModalNav = () => {
  modalNav.classList.add('modal-nav_function_close');
  setTimeout(() => {
    modalNav.classList.remove('modal-nav_function_open');
    modalNav.classList.remove('modal-nav_function_close');
  }, 400);
};
const closeModalNavUsingLink = (e) => {
  if (e.target.classList.contains('nav-list__link')) {
    closeModalNav();
  }
};
buttonMenu.addEventListener('click', schowModalNav);
buttonModal.addEventListener('click', closeModalNav);
modalNav.addEventListener('click', closeModalNavUsingLink);
