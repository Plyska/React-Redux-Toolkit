import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styles } from "./styles";

interface HeaderProps {
    titlePage: 'users' | 'posts';
}

const Header: React.FC<HeaderProps> = ({ titlePage }) => {
    return (
        <Box sx={styles.container}>
            <Typography sx={styles.title} align="center" variant='h3' color='#272790'>{titlePage}</Typography>
        </Box>
    )
}

export default Header;