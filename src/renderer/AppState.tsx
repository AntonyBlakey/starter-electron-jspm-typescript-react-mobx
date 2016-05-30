import { observable } from "mobx";

export class AppState {
    @observable timer = 0;
    resetTimer() { this.timer = 0; }
};

export const appState = new AppState();

setInterval(() => appState.timer += 1, 1000);

// Hot Reloading Support

import socketIO from 'socket.io-client';
import HotReloader from 'systemjs-hot-reloader';
let hotReloader = new HotReloader(socketIO('http://localhost:5776'));
export function __reload(m) {
    appState.timer = m.appState.timer;
}
