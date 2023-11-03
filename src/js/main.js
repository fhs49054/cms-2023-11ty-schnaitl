import * as MainNav from './lib/mainnav.js';
window.MainNav = MainNav;


const toggle = () => {
    const nav = document.querySelector('nav');
    if (!nav.classList.contains('hidden')) {
        setTimeout(() => {
            nav.classList.toggle('hidden');
            nav.classList.remove('slideout');
        }, 500);
        nav.classList.add('slideout');
    } else {
        nav.classList.toggle('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn_burger').forEach((btn) => {
        btn.addEventListener('click', toggle);
    });
});


