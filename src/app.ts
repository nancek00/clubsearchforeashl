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

platformSwitchDef.radios.map(renderPlatformSwitch).map(platformContainerAppend);

searchInputButton.addEventListener('click',() => {
    if(searchInputElement == null) return;
    const searchTerm = searchInputElement.value;
})