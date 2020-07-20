import { Grid, View } from "@adobe/react-spectrum";
import Header from "components/Header";
import SideNav from "components/SideNav";
import React, { FC } from "react";

const DashboardLayout: FC = ({ children }) => {
    return (
        <Grid
            areas={["header  header", "navbar content", "footer  footer"]}
            columns={["1fr", "3fr"]}
            rows={["size-1000", "auto", "size-1000"]}
            height="size-6000"
            gap="size-100"
        >
            <Header gridArea="header" />

            <SideNav />

            <View backgroundColor="purple-600" gridArea="content">
                {children}
            </View>

            <View backgroundColor="magenta-600" gridArea="footer" />
        </Grid>
    );
};

export default DashboardLayout;
