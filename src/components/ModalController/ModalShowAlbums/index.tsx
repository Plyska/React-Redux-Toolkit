import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { styles } from "./styles";
import { useModalContext } from "../../../context/ModalContext";
import { TYPE_MODAL } from "../../../constants";
import { albumApi } from "../../../services/albumsService";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const ModalShowAlbums: React.FC = () => {
  const { modalParameters, handleChangeModalParameters } = useModalContext();
  const { userId, userName } = modalParameters.params;
  const { data, isLoading, error } = albumApi.useFetchAllAlbumsQuery(userId);

  const handleClose = () => {
    handleChangeModalParameters({
      isOpen: false,
      type: TYPE_MODAL.SHOW_ALBUMS,
    });
  };

  return (
    <Box sx={styles.container}>
      {
        error && <Typography align="center" variant="h3" color='error'>Something went wrong</Typography>
      }
      {isLoading ? (
        <Box sx={styles.loader}>
          <CircularProgress color='error' />
        </Box>
      ) : (
        <Box>
          <Typography
            align="center"
            id="modal-modal-title"
            variant="h5"
            component="h2"
          >
            {userName}
          </Typography>

          <Stack spacing={2} sx={styles.albumsContainer}>
            {data &&
              data.map((album) => (
                <Box sx={styles.albumBox} key={album.id}>
                  <Typography>{album.title}</Typography>
                </Box>
              ))}
          </Stack>

          <Box sx={styles.buttonBox}>
            <Button
              onClick={handleClose}
              variant="contained"
              endIcon={<CancelOutlinedIcon />}
              color="error"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ModalShowAlbums;
