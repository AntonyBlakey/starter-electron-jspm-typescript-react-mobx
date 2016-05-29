import { observable } from "mobx";

export class AppState {
    @observable timer = 0;
    resetTimer() { this.timer = 0; }
};

export const appState = new AppState();

setInterval(() => appState.timer += 1, 1000);

function serializeState(s) {
    return { timer: s.timer };
}

function deserializeState(s) {
    appState.timer = s.timer;
}


// Hot Reloading Support

import HotReloader from "systemjs-hot-reloader";
let hrRenderer = new HotReloader('http://localhost:5777');
let hrCommon = new HotReloader('http://localhost:5778');
export function __reload(m) {
    deserializeState(serializeState(m.appState));
}
