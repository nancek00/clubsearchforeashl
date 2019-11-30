import { uiH2, renderControlElement } from "./ui/elements/createelements";
import { headerMainLabel, searchTextDef } from "./ui/header";
import { converge } from "ramda"

const div2 = document.getElementById('div2') as HTMLDivElement;


div2.appendChild(renderControlElement(searchTextDef))

