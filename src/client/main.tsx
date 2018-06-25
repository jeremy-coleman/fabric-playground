import "core-js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { initializeIcons } from "@uifabric/icons";
import { Fabric } from "office-ui-fabric-react";
import {ThemeProvider} from 'theming'

import {loadTheme} from 'office-ui-fabric-react'
import { EmotionPage, JssPage, StyledComponentsPage } from "./playground";

initializeIcons(AppConfig.env.fabricIconBasePath);


let theme = loadTheme({})

ReactDOM.render(
    <Fabric>
    <ThemeProvider theme={theme}>
    <div>
    <EmotionPage/>
    <JssPage/>
    <StyledComponentsPage/>
    </div>
    </ThemeProvider>
    </Fabric>,
    document.getElementById("main")
);