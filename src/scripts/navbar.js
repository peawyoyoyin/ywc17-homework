

/**
 * @param {string} label 
 * @param {string} href 
 */
function createNavbarItem(label, href) {
  const navbarElement = document.getElementById("nav-list-item-proto").cloneNode(true);
  const linkElement = navbarElement.querySelector("a");

  // remove the "nav-list-item-proto" id attribute
  navbarElement.id = "";
  linkElement.innerText = label;
  linkElement.href = href;

  return navbarElement;
}
/**
 * @typedef NavbarItem
 * @type {object}
 * @property {string} label
 * @property {string} href
 */

/**
 * @param {NavbarItem[]} navbarItems 
 */
export function setNavbarItems(navbarItems) {
  const navbarList = document.getElementById("nav-list")
  navbarItems.map(item => createNavbarItem(item.label, item.href))
    .forEach(navbarItemElement => {
      navbarList.appendChild(navbarItemElement);
    })
  // remove the "nav-list-item-proto" prototype element
  document.getElementById("nav-list-item-proto").remove();
}
