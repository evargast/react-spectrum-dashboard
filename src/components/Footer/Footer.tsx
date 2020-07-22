import { Button, Flex, Text } from "@adobe/react-spectrum";
import Email from "@spectrum-icons/workflow/Email";
import React, { FC } from "react";

const CustomFooter: FC = () => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            margin="size-150"
            gap="size-25"
        >
            <Button
                variant="overBackground"
                isQuiet
                onPress={() => {
                    window.open(
                        "https://eduardovargas.io/",
                        "_blank",
                        "noreferrer",
                    );
                }}
            >
                <Email />
            </Button>
            <Text>&copy; All rights reserved.</Text>
        </Flex>
    );
};

export { CustomFooter as Footer };
