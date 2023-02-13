import React from 'react'
import { Post } from '../../types/Post';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styles } from './styles';

interface PostCardProps {
    post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const { title, body } = post;

    return (
        <Stack direction='column' sx={styles.postCard}>
            <Typography variant='h5' color='#0071bc'>{title}</Typography>
            <Typography variant='body1' color='#5b616b'>{body}</Typography>
        </Stack>
    )
}

export default PostCard;