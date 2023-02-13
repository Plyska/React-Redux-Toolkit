import React from 'react'
import { postApi } from '../../services/postsService'
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styles } from "./styles";
import PostCard from "./PostCard";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from "@mui/material/Typography";
import AppLayout from '../../layout/AppLayout';

const PostsPage: React.FC = () => {
  const location = useLocation();
  const { userId, userName } = location.state;
  const { data: posts, isLoading, error } = postApi.useFetchAllPostsQuery(userId);

  console.log(userName);
  return (
    <AppLayout titlePage='posts'>
      {
        isLoading ? <Box sx={styles.loader}><CircularProgress /></Box> : (
          <>
            <Box sx={styles.container}>
              <Typography color='#272790' align="left" variant='h3'>{userName}</Typography>
              {
                posts && posts.map(post => <PostCard key={post.id} post={post} />)
              }
            </Box>
          </>
        )
      }
      {
        error && <Typography align="center" variant="h3" color='error'>Something went wrong</Typography>
      }
    </AppLayout>
  )
}

export default PostsPage