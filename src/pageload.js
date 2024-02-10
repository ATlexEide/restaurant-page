import { home } from "./home";

export function printHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
<button>Home</button>
<button>About</button>
<button>Menu</button>`;
    document.body.appendChild(header);
};
export function pageload(value) {
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    document.body.appendChild(container);
    container.innerHTML = value;
};

export const loadHome = () => { pageload(home) }