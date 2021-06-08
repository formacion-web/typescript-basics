
import bmi from './bmi.js';

const getInputValues = (controls: HTMLFormControlsCollection): [number, number] => {

    let arrayValues =
        Array.from(controls)
            .filter((element: any) => element.type == 'text')
            .map((element: any) => {
                if (isNaN(parseInt(element.value))) {
                    throw new Error('not valid inputs');
                } else {
                    return parseInt(element.value);
                }
            });
    return arrayValues as [number, number];
}

const calculateBMI = (weight: number, size: number): number => {

    if (weight > 0.1 && size > 30) {
        return weight / size ** 2;
    } else {
        throw new Error('weight should be greater than 0.1kg and size greater than 30cms');
    }

}

const bmiMapping = (value: number):string =>{
    const category: string | undefined =
    bmi.find((element:any) => value > element.from && value < element.to)?.category;
    if(category){
        return category;
    } else{
        throw new Error('no category available');
    }
}

const submitBMI = (event: Event): void => {

    event.preventDefault();

    try {

        const form: HTMLFormElement = event.target as HTMLFormElement;
        const datos = getInputValues(form.elements);
        const valorBMI: number = calculateBMI(...datos);
        
        alert(bmiMapping(valorBMI));

    } catch (error) {
        
        alert(error.message);
    }


}

const initApp = (event: Event): void => {

    // const form: HTMLFormElement | null = document.querySelector('form');
    document.forms[0].addEventListener('submit', submitBMI);

}

window.addEventListener('load', initApp);