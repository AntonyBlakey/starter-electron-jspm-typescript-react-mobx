import * as React from "react";
import * as ReactDOM from "react-dom";

import { appState } from "./AppState";
import { RootView } from "./RootView";

ReactDOM.render(<RootView appState={appState} />, document.getElementById("container"));
