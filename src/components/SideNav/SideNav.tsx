import { Item, ListBox } from "@adobe/react-spectrum";
import { useRoutes } from "hooks";
import React, { FC, Key } from "react";
import { useHistory } from "react-router-dom";

const SideNav: FC = () => {
    const history = useHistory();
    const { routes, asList } = useRoutes();

    const items = asList(routes);

    const onChange = (selection: Iterable<Key>) => {
        history.push(`${[...selection][0]}`);
    };

    return (
        <ListBox
            width="size-4800"
            items={items}
            aria-label="Alignment"
            selectionMode="single"
            disallowEmptySelection={true}
            onSelectionChange={onChange}
        >
            {item => <Item key={item.path}>{item.name}</Item>}
        </ListBox>
    );
};

export default SideNav;
