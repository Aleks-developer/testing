import {formValidate} from "./form-validate";
import {maskInputs} from "./mask-inputs";
import {inputFile} from "./input-file";
import {starsInit} from "./stars";
import {stickyBlock} from "./sticky-block";

export const blocksFull = () => {
    formValidate()
    maskInputs()
    inputFile()
    starsInit()
    stickyBlock()
}

document.addEventListener('DOMContentLoaded', () => {
    blocksFull()
})