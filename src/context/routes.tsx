import React, { createContext, FC } from "react";

const RoutesContext = createContext({} as RoutesContext);

const RoutesProvider: FC = ({ children }) => {
    const routes = {
        dashboard: { name: "Dashboard", path: "/dashboard" },
        analytics: { name: "Analytics", path: "/analytics" },
        messages: { name: "Messages", path: "/messages" },
    };

    const asList = (routes: NavItems) => {
        const list: NavItem[] = [];
        for (const [, route] of Object.entries(routes)) {
            list.push(route);
        }
        return list;
    };

    const context: RoutesContext = {
        routes,
        asList,
    };

    return (
        <RoutesContext.Provider value={context}>
            {children}
        </RoutesContext.Provider>
    );
};

export { RoutesContext, RoutesProvider };
