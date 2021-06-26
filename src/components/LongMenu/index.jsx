import React from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useUsers } from '../../Hooks/useUsers';

const options = [
  {
    label: 'Meus pets',
    value: '/list',
  },
  {
    label: 'Agendamentos',
    value: '/appointments',
  },
  {
    label: 'Sair',
    value: '/home',
  },
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const { logout } = useUsers();
  const history = useHistory();
  const [selectedOption, setSelectedOption] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, url) => {
    if (url === '/home') {
      logout();
    } else {
      history.push(url);
      setSelectedOption(url);
    }

    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon style={{ fill: '#E8F3F1' }} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map(({ label, value }) => (
          <MenuItem
            key={value}
            selected={value === selectedOption}
            onClick={(event) => handleMenuItemClick(event, value)}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
