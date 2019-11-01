import { setNavbarItems } from './navbar';
import { setDurationText, setDetailText, setConditionText } from './details';
import { setupHamburgerMenu } from './hamburger';

const apiUrl = 'https://panjs.com/ywc.json';

fetch(apiUrl)
  .then((res) => res.json())
  .then(apiData => {
    setNavbarItems(apiData.navbarItems);
    setDurationText(apiData.duration);
    setDetailText(apiData.detail);
    setConditionText(apiData.condition);
  })
setupHamburgerMenu();
