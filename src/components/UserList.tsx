import React from 'react';
import { List, ListItem, ListItemText, Typography, Divider, Button } from '@mui/material';
import { User } from '../types/interfaces';

interface UserListProps {
  onSelectUser: (user: User) => void;
  setActiveTab: (tab: 'profile' | 'contact') => void;
  users: [User] | [],
  selectedUser: User | null
}

const UserList: React.FC<UserListProps> = ({ onSelectUser, users, selectedUser, setActiveTab }) => {

  return (
    <div>
      <Typography variant="h6" gutterBottom>User List</Typography>
      <List sx={{ maxHeight: '75vh', overflowY: 'auto' }}>
        {users.map((user) => (
          <div key={user.id}>
            <ListItem component={Button} onClick={() => {onSelectUser(user); setActiveTab('profile')}} sx={{
              backgroundColor: selectedUser && selectedUser.id === user.id ? '#e3f2fd' : 'transparent',
              '&:hover': { backgroundColor: '#e3f2fd' },
              fontSize: '0.875rem'
            }}>
              <ListItemText primary={user.firstName + " " + user.lastName} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default UserList;
