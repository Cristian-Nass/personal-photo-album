import * as React from 'react';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
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
import ButtonGroup from '@mui/material/ButtonGroup';
import DrawerModal from './DrawerModal';

const navbarItems = [
  {menuTitle: 'Home', pageUrl: '/'},
  {menuTitle: 'About', pageUrl: '/about'},
  {menuTitle: 'Contact', pageUrl: '/contact'},
];

const NavbarView = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [hamburgerMenu, setHamburgerMenu] = React.useState<null | HTMLElement>(null);
  const [galleryDrawer, setGalleryDrawer] = useState(false);

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

  const changePage = (url: string) => {
    setHamburgerMenu(null);
    navigate(url);
  };

  const galleryDrawerToggle = () => {
    setGalleryDrawer(true);
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
                    <MenuItem key={index} onClick={() => changePage(menu.pageUrl)}>
                      {menu.menuTitle}
                    </MenuItem>
                  ))}
                  <Button
                    style={{color: 'black'}}
                    onClick={() => {
                      setHamburgerMenu(null);
                      galleryDrawerToggle();
                    }}>
                    Gallery
                  </Button>
                </Menu>
              </>
            ) : (
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                style={{boxShadow: 'none'}}>
                <Button style={{color: 'white'}} onClick={() => galleryDrawerToggle()}>
                  Gallery
                </Button>
                {navbarItems.map((menu, index) => (
                  <Button key={index}>
                    <Link to={menu.pageUrl} style={{color: 'white', textDecoration: 'none'}}>
                      {menu.menuTitle}
                    </Link>
                  </Button>
                ))}
              </ButtonGroup>
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
            <MenuItem onClick={handleClose}>Sign Up</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <DrawerModal
        galleryDrawer={galleryDrawer}
        changeWord={(word: boolean) => setGalleryDrawer(word)}
      />
    </Box>
  );
};

export default NavbarView;
