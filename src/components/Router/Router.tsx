import { useRoutes } from "hooks";
import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Router: FC = () => {
    const { routes } = useRoutes();
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={routes.dashboard.path} />
            </Route>

            <Route path={routes.dashboard.path}>
                <div>Hello {routes.dashboard.name}</div>
            </Route>
            <Route path={routes.analytics.path}>
                <div>Hello {routes.analytics.name}</div>
            </Route>
            <Route path={routes.messages.path}>
                <div>Hello {routes.messages.name}</div>
            </Route>
        </Switch>
    );
};

export default Router;
