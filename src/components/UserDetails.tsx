import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Tabs, Tab, Button, Menu, MenuItem, capitalize } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { User } from '../types/interfaces';

interface UserDetailsProps {
  user: User | null;
  activeTab: 'profile' | 'contact';
  onChangeTab: (tab: 'profile' | 'contact') => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user, activeTab, onChangeTab }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  if (!user) return <Typography>Select a user to see details.</Typography>;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (action: string) => {
    console.log(action + " clicked for user id " + user.id)
    handleClose();
  };

  return (
    <Card elevation={3} sx={{ transition: '0.3s' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{user?.firstName + " " + user?.lastName}</Typography>
          <Button
            variant="outlined"
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Actions
          </Button>
        </Box>
        <Box>
          <Tabs value={activeTab} onChange={(e, newValue) => onChangeTab(newValue)} textColor="primary">
            <Tab label="Profile" value="profile" />
            <Tab label="Contact" value="contact" />
          </Tabs>
        </Box>
        <Box mt={2} sx={{ height: '75vh' }}>
          {activeTab === 'profile' ? (
            <>
              <img
                src={user?.image || 'https://via.placeholder.com/100'}
                alt={`${user?.firstName}'s profile`}
                style={{ borderRadius: '50%', width: '100px', height: '100px', marginRight: '16px' }}
              />
              <Typography>Gender: {capitalize(user?.gender)}</Typography>
              <Typography>Birth Date: {user?.birthDate}</Typography>
              <Typography>Address: {`${user?.address?.address}, ${user?.address?.city}, ${user?.address?.state}, ${user?.address?.country}, ${user?.address?.postalCode}`}</Typography>
            </>
          ) : (
            <>
              <Typography>Email: {user?.email}</Typography>
              <Typography>Mobile: {user?.phone}</Typography>
            </>
          )}
        </Box>
        <Box mt={3}>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={() => handleAction('Edit')}>Edit</MenuItem>
            <MenuItem onClick={() => handleAction('Delete')}>Delete</MenuItem>
            <MenuItem onClick={() => handleAction('View')}>View</MenuItem>
          </Menu>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserDetails;
