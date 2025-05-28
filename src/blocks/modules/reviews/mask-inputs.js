import Inputmask from 'inputmask';

export const maskInputs = () => {
    const phoneSelector = document.querySelectorAll('.js-mask-phone')

    if (!phoneSelector) return
    const IM = new Inputmask('+7 (999) 999-99-99')

    IM.mask(phoneSelector)
}