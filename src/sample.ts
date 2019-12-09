interface RenderResult {
    state: State
    dom: string
}
interface State {
    platform: string;
    counter: number;
}

const defaultState2 = {platform: 'ps4', counter: 0} as State;

const render = state => res => {
    const r = { state: state, dom: "html"} as RenderResult;
    res(r);
}

const t = (state: State) => {

    console.log(" In side t");

    const p = new Promise<RenderResult>(res => {
        const result = {
            state: state,
            dom: "html"
        }

        res(result)
    })
    p.then(result => {
        // setup dom
        console.log("Setup Dom",result);
        // on state changes call t(newState);
        setInterval(() => {
            const s = {
                ...result.state,
                counter: result.state.counter+1
            }
            t(result.state)
        },2000)
    
    })       
    return p;
}

t(defaultState2);

