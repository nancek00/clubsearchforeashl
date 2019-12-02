export const headerMainLabel = {
    type: "h2",
    label: "Club Search for EASHL",
    id: "main-logo-header"
}


export const searchTextDef = {
    inputType: "text",
    id: "searchBox",
    label: 'Club Name'
}

export const searchBoxInputDef = {
    elementType: 'input',
    inputType: 'text',
    id: 'intxt-club-name-input'
}
export const searchBoxLabelDef = {
    elementType: 'label',
    label: 'Club Name',
    forId: 'intxt-club-name-input',
    id: 'lbl-club-name-input'
}

export const platformSwitchDef = {
    radios: [
        {
            id: 'switch-platform-ps4',
            name: 'switch-platform',
            value: 'PS4',
            label: 'PS4'
        }, 
        {
            id: 'switch-platform-xboxone',
            name: 'switch-platform',
            value: 'xboxone',
            label: 'XBOXOne'
        }
    ]
}
