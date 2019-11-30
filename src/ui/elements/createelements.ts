import { compose, converge } from 'ramda'

export function createHeaderFn(container: HTMLElement) {
    const c = document.createElement('h2');
    c.innerText = 'Ken'
    container.appendChild(c);
}



export const uiH2 = createHeader(window.document);


export function createHeader(doc)  {
    return (obj):HTMLElement => {
        const hdr = doc.createElement(obj.type);
        hdr.innerHTML = obj.label;
        hdr.id = obj.id;
        return hdr;
    }}
export function createLabel(doc) {
    return obj => {
        const lbl = doc.createElement('label');
        lbl.setAttribute('for', obj.id);
        lbl.innerHTML = obj.label;
        return lbl;
    };
}

export function createInput(doc) {
    return obj => {
        const inpt = doc.createElement('input');
        inpt.setAttribute('type', obj.inputType);
        inpt.setAttribute('id', obj.id);
        return inpt;
    };
}

export function createLabelAndInput(doc) {
    return (inp,lbl) => {
        const div = doc.createElement('div');
        div.appendChild(inp);
        div.appendChild(lbl);
        return div;
    }
}

const makeControlElement = createLabelAndInput(window.document);
const makeInputElement = createInput(window.document);
const makeLabelElement = createLabel(window.document);


export const renderControlElement = converge(makeControlElement, [makeLabelElement, makeInputElement]);



const label = createLabel(document);
const obj = { id: "1234", label: "Some Label"};
console.log("h2",label(obj));
