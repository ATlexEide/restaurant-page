import './style.css';
import { printHeader } from './pageload';
import { loadHome } from './pageload';
import { homePage } from './home';
import { aboutPage } from './about';
import { menuPage } from './menu';

const home = homePage;
const about = aboutPage;
const menu = menuPage;
let currentPage = home;

printHeader();
loadHome();

function getClickedButton() {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute('id', `${buttons[i].innerHTML}`)
        buttons[i].addEventListener('click', () => {
            let value = buttons[i].id.toLowerCase()
            changePage(value); console.log(`click ${buttons[i].id}`); return buttons[i].id;
        })
    }
}
const container = document.getElementById('container');
function changePage(value) {
    value === 'home' ? value = home :
        value === 'about' ? value = about :
            value === 'menu' ? value = menu : console.log('oh no')
    if (value !== currentPage) {
        container.innerHTML = value;
        currentPage = value;
    }
}

getClickedButton()
console.log('yipp')