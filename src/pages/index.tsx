import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import UserDetails from '../components/UserDetails';
import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { User } from '../types/interfaces';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

const Home: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'profile' | 'contact'>('profile');
  const [users, setUsers] = useState<[User] | []>([]);
  const [open, setOpen] = useState(false);
  const [errorMessage, setSrrorMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const getUsers = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get("https://dummyjson.com/users")
      setUsers(data.users)
    } catch (error) {
      console.log("Error while fetching users: ", error)
      setOpen(true)
      setSrrorMessage("Something went wrong while fetching users!")
      setUsers([])
    }
    setLoading(false)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Box display="flex" p={3} height="90vh" bgcolor="#f4f6f8" overflow="hidden">
      {loading ?
        <Box display="flex" justifyContent="center"width="100vw">
          <CircularProgress />
        </Box> :
        <>
          <Box width="250px" borderRight="1px solid #ccc" pr={2}>
            <UserList onSelectUser={setSelectedUser} users={users} selectedUser={selectedUser} setActiveTab={setActiveTab} />
          </Box>
          <Box padding="20px" flex={1} display="flex" flexDirection="column" overflow="hidden">
            <UserDetails
              user={selectedUser}
              activeTab={activeTab}
              onChangeTab={setActiveTab}
            />
          </Box>
        </>
      }
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message={errorMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
    </Box>
  );
};

export default Home;
