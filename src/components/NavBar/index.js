import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Slide from '@mui/material/Slide';

import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SignOut from "../../components/SignOut"
import { Button } from '@mui/material';


function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

  function HideOnScroll(props) {
    const { children, window } = props;
    return (
      <Slide appear={false} direction="down" in={!window}>
        {children}
      </Slide>
    );
  }

export default function ElevateAppBar(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      
    <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <MailIcon />
      </IconButton>
      <p>Tickets</p>
    </MenuItem>

    <MenuItem>
    <Link to={'/livestream'}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <SlowMotionVideoIcon />
        </IconButton>
        <p>Livestream</p>
      </Link>
    </MenuItem>
    
    <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <MailIcon />
        </IconButton>
      <Link to={'/tickets'}>
        <p>Tickets</p>
      </Link>
      </MenuItem>
    
      {
        localStorage.getItem("token") ? (
          <Button onClick={(props) => {SignOut(props); window.location.reload()}}>
          <MenuItem> 
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <MailIcon />
            </IconButton>
            <p>Sign Out</p>
          </MenuItem>
          </Button>
        ) : (
          <></>
        )
      }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <HomeIcon />
        </IconButton>
      <Link to={'/'}>
        <p>Home</p>
      </Link>
    </MenuItem>

    <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <SlowMotionVideoIcon />
        </IconButton>
      <Link to={'/livestream'}>
        <p>Livestream</p>
      </Link>
    </MenuItem>
    
    <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <MailIcon />
        </IconButton>
      <Link to={'/tickets'}>
        <p>Tickets</p>
      </Link>
      </MenuItem>

      {
        localStorage.getItem("token") ? (
          <Button onClick={(props) => {SignOut(props); window.location.reload()}}>
          <MenuItem> 
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <MailIcon />
            </IconButton>
            <p>Sign Out</p>
          </MenuItem>
          </Button>
        ) : (
          <></>
        )
      }
    </Menu>
  );
    return (
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar>
              <Typography variant="h6" component="div">
                OYW21
              </Typography>
              <IconButton
                sx={{ marginLeft: "auto" }}
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar id="back-to-top-anchor" />

        
        {renderMobileMenu}
        {renderMenu}

        <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      </React.Fragment>
    );
  }