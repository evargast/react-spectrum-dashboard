import { RoutesContext } from "context";
import { useContext } from "react";

const useRoutes = (): RoutesContext => {
    const routesCtx = useContext(RoutesContext);
    return routesCtx;
};

export { useRoutes };
