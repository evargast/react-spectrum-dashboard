type NavItem = { name: string; path: string };
type NavItems = { [key: string]: NavItem };

interface RoutesContext {
    routes: NavItems;
    asList: (NavItems) => NavItem[];
}
