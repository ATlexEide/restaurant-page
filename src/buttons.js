import { pageload } from "./pageload";
import { printHeader } from "./pageload";


export function addEventListeners() {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute('id', `${buttons[i].innerHTML}`)
        buttons[i].addEventListener('click', () => {
            console.log(`this is ${buttons[i].id}`)
        })
    }
    console.log(buttons)
}