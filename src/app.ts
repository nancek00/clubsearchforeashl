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

const clearPlatformNode = clearNode(document.getElementById('platform-container'));

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


