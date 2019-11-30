

const searchInputElement = document.getElementById('clubsearchinput') as HTMLButtonElement;
const searchInputButton = document.getElementById('clubsearchbutton') as HTMLButtonElement;

searchInputButton.addEventListener('click',() => {
    if(searchInputElement == null) return;
    const searchTerm = searchInputElement.value;
    console.log("SearchTerm:",searchTerm)
})