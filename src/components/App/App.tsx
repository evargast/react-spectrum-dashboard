import { defaultTheme, Provider } from "@adobe/react-spectrum";
import DashboardLayout from "components/DashboardLayout";
import Router from "components/Router";
import { RoutesProvider } from "context";
import * as React from "react";
import { FC } from "react";
import { HashRouter } from "react-router-dom";

const App: FC = () => (
    <Provider theme={defaultTheme}>
        <HashRouter>
            <RoutesProvider>
                <DashboardLayout>
                    <Router />
                </DashboardLayout>
            </RoutesProvider>
        </HashRouter>
    </Provider>
);

export default App;
