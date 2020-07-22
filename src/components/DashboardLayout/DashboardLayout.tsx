import { Grid, View } from "@adobe/react-spectrum";
import Footer from "components/Footer";
import Header from "components/Header";
import SideNav from "components/SideNav";
import React, { FC } from "react";

const DashboardLayout: FC = ({ children }) => {
    return (
        <Grid
            areas={["header  header", "navbar content", "footer  footer"]}
            columns={["1fr", "4fr"]}
            rows={["size-1000", "auto", "size-1000"]}
            height={"100vh"}
            gap="size-100"
        >
            <View backgroundColor="celery-600" gridArea="header">
                <Header />
            </View>

            <View backgroundColor="label-gray" gridArea="navbar">
                <SideNav />
            </View>

            <View
                backgroundColor="purple-600"
                gridArea="content"
                padding={"size-250"}
            >
                {children}
            </View>

            <View backgroundColor="magenta-600" gridArea={"footer"}>
                <Footer />
            </View>
        </Grid>
    );
};

export default DashboardLayout;
