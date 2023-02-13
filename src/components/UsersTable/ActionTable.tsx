import React from 'react'
import { GridCellParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import { useModalContext } from "../../context/ModalContext";
import { TYPE_MODAL } from '../../constants';
import { useNavigate } from "react-router-dom";

interface ActionProps {
    params: GridCellParams
}

const ActionTable: React.FC<ActionProps> = ({ params }) => {
    const { handleChangeModalParameters } = useModalContext();
    const { id, name } = params.row;
    const navigate = useNavigate();

    const openModalShowAlbums = () => {
        handleChangeModalParameters({
            isOpen: true,
            type: TYPE_MODAL.SHOW_ALBUMS,
            params: {
                userId: id,
                userName: name,
            }
        })
    }

    const openPosts = () => {
        navigate('/posts', {
            state: {
                userId: id,
                userName: name
            }
        });
    }

    return (
        <Stack direction="row" spacing={1}>
            <Button
                size='small'
                variant="outlined"
                startIcon={<MarkAsUnreadOutlinedIcon />}
                onClick={openPosts}
            >
                Posts
            </Button>
            <Button
                size='small'
                variant="contained"
                endIcon={<CollectionsOutlinedIcon />}
                onClick={openModalShowAlbums}
            >
                Albums
            </Button>
        </Stack>
    )
}

export default ActionTable