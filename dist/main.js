import bmi from './bmi.js';
const getInputValues = (controls) => {
    let arrayValues = Array.from(controls)
        .filter((element) => element.type == 'text')
        .map((element) => {
        if (isNaN(parseInt(element.value))) {
            throw new Error('not valid inputs');
        }
        else {
            return parseInt(element.value);
        }
    });
    return arrayValues;
};
const calculateBMI = (weight, size) => {
    if (weight > 0.1 && size > 30) {
        return weight / size ** 2;
    }
    else {
        throw new Error('weight should be greater than 0.1kg and size greater than 30cms');
    }
};
const bmiMapping = (value) => {
    const category = bmi.find((element) => value > element.from && value < element.to)?.category;
    if (category) {
        return category;
    }
    else {
        throw new Error('no category available');
    }
};
const submitBMI = (event) => {
    event.preventDefault();
    try {
        const form = event.target;
        const datos = getInputValues(form.elements);
        const valorBMI = calculateBMI(...datos);
        alert(bmiMapping(valorBMI));
    }
    catch (error) {
        alert(error.message);
    }
};
const initApp = (event) => {
    // const form: HTMLFormElement | null = document.querySelector('form');
    document.forms[0].addEventListener('submit', submitBMI);
};
window.addEventListener('load', initApp);
