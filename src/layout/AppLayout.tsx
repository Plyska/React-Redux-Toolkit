import React from "react";
import Header from "../components/Header";
import Box from "@mui/material/Box";

type ModalLayoutType = {
    children: React.ReactNode;
    titlePage: 'users' | 'posts';
};

const AppLayout = ({ children, titlePage }: ModalLayoutType) => {
    return (
        <Box>
            <Header titlePage={titlePage} />
            {children}
        </Box>
    );
};

export default AppLayout;
