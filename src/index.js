import './pages/index.css';

const buttonMenu = document.querySelector('.header__button');
const modalNav = document.querySelector('.modal-nav');
const buttonModal = document.querySelector('.modal-nav__button');
const buttonLinkStart = document.querySelector('.main__link_form_button');
const textContainer = document.querySelector('.main__text-container')
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
const showCloseButtonLinkStart = () => {
  if(textContainer.scrollTop > 700) {
    buttonLinkStart.classList.add('main__link_show');
  } else {
    buttonLinkStart.classList.remove('main__link_show');
  }
};
buttonMenu.addEventListener('click', schowModalNav);
buttonModal.addEventListener('click', closeModalNav);
modalNav.addEventListener('click', closeModalNavUsingLink);
textContainer.addEventListener('scroll', showCloseButtonLinkStart)
