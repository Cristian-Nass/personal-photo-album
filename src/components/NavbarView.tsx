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
import {useTheme} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom';

const navbarItems = [
  {menuTitle: 'Home', pageUrl: '/'},
  {menuTitle: 'About', pageUrl: '/about'},
  {menuTitle: 'Contact', pageUrl: '/about'},
];

const NavbarView = () => {
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

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <div>
            {isMobile ? (
              <>
                <IconButton
                  size="small"
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
                  {navbarItems.map((menu, index) => (
                    <MenuItem key={index}>
                      <Link to={menu.pageUrl} style={{textDecoration: 'none', color: 'black'}}>
                        {menu.menuTitle}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Stack direction="row" spacing={2}>
                {navbarItems.map((menu, index) => (
                  <Link to={menu.pageUrl} style={{textDecoration: 'none'}} key={index}>
                    <Button style={{color: 'white'}} onClick={() => console.log('TEST')}>
                      {menu.menuTitle}
                    </Button>
                  </Link>
                ))}
              </Stack>
            )}
          </div>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}></Typography>
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
