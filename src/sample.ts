interface RenderResult {
    state: State
    dom: string
}
interface State {
    platform: string;
}

const defaultState2 = {platform: 'ps4'} as State;

const render = state => res => {
    const r = { state: state, dom: "html"} as RenderResult;
    res(r);
}

const t = (state: State) => {
    return new Promise<RenderResult>(render(state));
}

t(defaultState2).then(console.log);
