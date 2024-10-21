// import React from "react";

// import {
//   AppBar,
//   Toolbar,
//   CssBaseline,
//   Typography,

// } from "@mui/material";
// import { Link } from "react-router-dom";
// import "./Header.css";
// // import Logo from "../../assets/logo2.jpg";


// const Navbar =() =>{

//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
    
//       <CssBaseline />
//       <Toolbar>
//         {/* <Typography variant="h4" className="logo">
//         <Link to="/" className="link">
//           Amazon
//           </Link>
//         </Typography> */}
//           <div className="navlinks">
//             <Link to="/" className="link">
//               Home
//             </Link>
//             <Link to="/electronics" className="link">
//               Electronics
//             </Link>
//             <Link to="/fashion" className="link">
//             Fashion
//             </Link>
//             <Link to="/householdAppliances" className="link">
//             Household Appliances
//             </Link>
//             <Link to="/Login" className="link">
//             Login
//             </Link>
//             <Link to="/cart" className="link">
//             Cart
//             </Link>
//             <Link to="/Phones" className="link">
//             Phones
//             </Link>
//             <Link to="/Register" className="link">
//             Register
//             </Link>
//             <Link to="/VideoGames" className="link">
//             Video Games
//             </Link>
//            <Link>
//             <img src="	https://m.media-amazon.com/images/G/42/Sunrise/Eve…S24_GW_SWM_Generic_LU_400x39_EN._CB557841875_.jpg" alt="Sipping" />
//            </Link>
//           </div>
//       </Toolbar>
//     </AppBar>
//     )
//   }
// export default Navbar;



import * as React from 'react';
import "./Header.css";
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import {Link} from "react-router-dom";
// import Logo from "../../assets/logo.png";

const pages = ['Home','Mobile Phones', 'Electronics', 'Fashion', 'Appliances' , 'Video Games'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="mainNav">
    <AppBar position="static">
    <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             <div className="logo">
                        <Link to="/">
                            <img src="https://th.bing.com/th/id/OIP.BPGuMxbx_Zyin_FUqyca0gHaE8?pid=ImgDet&w=191&h=127&c=7" alt='Logo' className='logoImg' />
                        </Link>
                    </div> 

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`/${page}`} >
                    {page}
                    </Link>
                   
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="https://th.bing.com/th/id/OIP.BPGuMxbx_Zyin_FUqyca0gHaE8?pid=ImgDet&w=191&h=127&c=7" alt='Logo' className="logo" />

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 <Link to={`/${page}`} >
                    {page}
                  </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default Navbar;