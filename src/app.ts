import {  renderSwitch } from "./ui/elements/createelements";
import { platformSwitchDef } from "./ui/header";
import { assoc } from 'ramda'


const defaultState = {
    platform: 'ps4'
}

const updateStatePlatform = assoc('platform');

const searchInputElement = document.getElementById('clubsearchinput') as HTMLButtonElement;
const searchInputButton = document.getElementById('clubsearchbutton') as HTMLButtonElement;

const handlePlatformChange = platform => { return () => {const d = updateStatePlatform(platform)(defaultState); console.log(d);}}

const platformContainer = document.getElementById('platform-container');

const containerAppend = container => element => {
    container.appendChild(element);
}

const platformContainerAppend = containerAppend(platformContainer);
const renderPlatformSwitch = renderSwitch(handlePlatformChange);

platformSwitchDef.radios.map(renderPlatformSwitch).forEach(platformContainerAppend);

const renderMyPlatformSwitch = objs => objs.map(renderPlatformSwitch);

const clearNode = container => () => {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
const appendToNode = container => child => {
    container.appendChild(child);
    return container;
}


const clearPlatformNode = clearNode(document.getElementById('platform-container'));
const clearBodyNode = clearNode(document.querySelector('body'));
const appendBodyNode = appendToNode(document.querySelector('body'));

let toggle = false;

searchInputButton.addEventListener('click',() => {
    toggle = !toggle;
    if(toggle)
        clearPlatformNode();
    else {
        const radioDivs = renderMyPlatformSwitch(platformSwitchDef.radios);
        radioDivs.forEach(platformContainerAppend);
    }
})

const renderAll = state => {
    const newPromise = new Promise((res,rej) => {
        const newState = state;
    });

    return newPromise;

}


interface RenderResult {
    state: State;
    dom: HTMLElement; 
}
interface State {
    platform: string;
    counter: number;
}

const defaultState2 = {platform: 'ps4', counter: 0} as State;
const createButton = callback => {
    const bodyElement = document.querySelector('body')
    const btn = document.createElement('button');
    btn.addEventListener('click',() => callback());   
    btn.innerText = "Click Me";
    return btn;
}
const renderBtn = btnFn => state => {

}
const updateStateProperty = key => newValue => state => {
    return {
        ...state,
        [key]: newValue
    }
}
const updateStateCounter = updateStateProperty("counter");

const t = (state: State) => {

    console.log(" In side t");

    const p = new Promise<State>(res => {
        clearBodyNode();
       const btn = createButton(() => res(updateStateCounter(state.counter + 1)(state)));
         const radioDivs = renderMyPlatformSwitch(platformSwitchDef.radios);
        radioDivs.forEach(appendBodyNode);
        appendBodyNode(btn);
    })

    p.then(result => {
        console.log("NewState:",result);
        t(result);
    })
   return p;
}

t(defaultState2).then(result => console.log("p",result));