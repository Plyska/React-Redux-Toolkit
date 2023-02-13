import React from "react";
import { BasicModal } from "../components/ModalController";
import Box from "@mui/material/Box";

type ModalLayoutType = {
  children: React.ReactNode;
};

const ModalLayout = ({ children }: ModalLayoutType) => {
  return (
    <Box>
      {children}
      <BasicModal />
    </Box>
  );
};

export default ModalLayout;
