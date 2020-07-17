import { defaultTheme, Grid, Provider, View } from "@adobe/react-spectrum";
import Header from "components/Header";
import * as React from "react";
import { FC } from "react";

interface HelloWorldProps {
    text?: string;
}

const App: FC<HelloWorldProps> = () => (
    <Provider theme={defaultTheme}>
        <Grid
            areas={["header  header", "navbar content", "footer  footer"]}
            columns={["1fr", "3fr"]}
            rows={["size-1000", "auto", "size-1000"]}
            height="size-6000"
            gap="size-100"
        >
            <Header gridArea="header" />
            <View backgroundColor="blue-600" gridArea="navbar" />
            <View backgroundColor="purple-600" gridArea="content" />
            <View backgroundColor="magenta-600" gridArea="footer" />
        </Grid>
    </Provider>
);

export default App;
