const hamburgerMenuSelector = '#nav-mobile-hamburger';
const navLinksSelector = '#nav-list';

const navListExpandedClass = 'expanded';

export function setupHamburgerMenu() {
  const hamburgerMenuEl = document.querySelector(hamburgerMenuSelector);
  const navLinksSelectorEl = document.querySelector(navLinksSelector);

  hamburgerMenuEl.addEventListener('click', function() {
    hamburgerMenuEl.classList.toggle(navListExpandedClass);
    navLinksSelectorEl.classList.toggle(navListExpandedClass);
  });
}
