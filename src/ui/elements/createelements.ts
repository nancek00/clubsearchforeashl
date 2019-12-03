import { compose, converge } from 'ramda'

export function createHeaderFn(container: HTMLElement) {
    const c = document.createElement('h2');
    c.innerText = 'Ken'
    container.appendChild(c);
}



export const uiH2 = createHeader(window.document);

export function createLabel(doc) {
    return obj => {
        const lbl = doc.createElement('label');
        lbl.setAttribute('for', obj.id);
        lbl.innerHTML = obj.label;
        return lbl;
    };
}

export function createRadio(doc, clickFn) {
    return obj => {
        const radio = doc.createElement('input') as HTMLElement;
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name', obj.name);
        radio.setAttribute('value', obj.value);
        radio.addEventListener('click',clickFn(obj.value));
        radio.id = obj.id;
        return radio;
    };
} 


export function createHeader(doc)  {
    return (obj):HTMLElement => {
        const hdr = doc.createElement(obj.type);
        hdr.innerHTML = obj.label;
        hdr.id = obj.id;
        return hdr;
    }}

export function createInput(doc) {
    return obj => {
        const inpt = doc.createElement('input');
        inpt.setAttribute('type', obj.inputType);
        inpt.setAttribute('id', obj.id);
        return inpt;
    };
}


export function createRadioAndLabel(doc) {
    return (radio, lbl) => {
        const div = doc.createElement('div');
        div.appendChild(radio);
        div.appendChild(lbl);
        return div;
    }
}

export function createLabelAndInput(doc) {
    return inp => lbl => {
        const div = doc.createElement('div');
        div.appendChild(inp);
        div.appendChild(lbl);
        return div;
    }
}

const makeControlElement = createLabelAndInput(window.document);
const makeInputElement = createInput(window.document);
const makeLabelElement = createLabel(window.document);
const makeRadioElement = clickFn => createRadio(window.document, clickFn);
const makeSwitchElement = createRadioAndLabel(window.document);



export const renderControlElement = converge(makeControlElement, [makeLabelElement, makeInputElement]);
export const renderSwitch = clickFn => converge(makeSwitchElement, [makeRadioElement(clickFn),makeLabelElement])


const label = createLabel(document);
const obj = { id: "1234", label: "Some Label"};
console.log("h2",label(obj));
