import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import UsersTable from "../../components/UsersTable";
import AppLayout from '../../layout/AppLayout';
import { fetchUsers } from "../../store/redusers/ActionCreators";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { styles } from "./styles";


const UsersPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(state => state.userReduser);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <AppLayout titlePage='users'>
      <Box sx={styles.container}>
        {
          isLoading ? <CircularProgress /> : (
            <UsersTable rows={users} count={users.length} />
          )
        }
        {
          error && <h1>{error}</h1>
        }
      </Box>
    </AppLayout>
  );
};

export default UsersPage;
