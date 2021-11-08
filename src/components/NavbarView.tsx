import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme, makeStyles} from '@mui/material/styles';
import {Link} from 'react-router-dom';

const NavbarView = () => {
  // const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [hamburgerMenu, setHamburgerMenu] = React.useState<null | HTMLElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHamburgerMenu = (event: React.MouseEvent<HTMLElement>) => {
    setHamburgerMenu(event.currentTarget);
  };

  const handleCloseHamburgerMenu = (url: string) => {
    console.log(url);
    setHamburgerMenu(null);
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <div>
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  sx={{mr: 2}}
                  onClick={handleHamburgerMenu}>
                  <MenuIcon />
                </IconButton>

                <Menu
                  id="menu-hamburger"
                  anchorEl={hamburgerMenu}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(hamburgerMenu)}
                  onClose={() => setHamburgerMenu(null)}>
                  <MenuItem onClick={() => handleCloseHamburgerMenu('/home')}>
                    <Link to="/">Home</Link>
                  </MenuItem>
                  <MenuItem onClick={() => handleCloseHamburgerMenu('/about')}>
                    <Link to="/about">About</Link>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Typography>No mobile</Typography>
            )}
          </div>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Photos
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit">
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarView;
