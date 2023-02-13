import React from "react";
import { Modal, Box } from "@mui/material";
import { useModalContext } from "../../context/ModalContext";
import { TYPE_MODAL } from "../../constants";
import ModalShowAlbums from "./ModalShowAlbums";

export const ModalController = () => {
  const { modalParameters } = useModalContext();
  switch (modalParameters.type) {
    case TYPE_MODAL.SHOW_ALBUMS:
      return <ModalShowAlbums />;

    default:
      return <div />;
  }
};

export const BasicModal = () => {
  const { modalParameters, handleChangeModalParameters } = useModalContext();

  const handleCloseModal = () =>
    handleChangeModalParameters({
      isOpen: false,
    });

  return (
    <Modal
      open={modalParameters?.isOpen}
      onClose={handleCloseModal}
    >
      <Box>
        <ModalController />
      </Box>
    </Modal>
  );
};