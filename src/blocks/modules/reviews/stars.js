import Raty from 'raty-js';

export const starsInit = () => {
    const raty = new Raty(document.querySelector('[data-raty]'), {
        starOn: 'img/star-on.svg',
        starOff: 'img/star-off.svg'
    });

    raty.init();
}