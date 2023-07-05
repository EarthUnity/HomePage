import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/";

import '../styles/mainHeader.css'
import '../styles/global.css'


let pages: { [key: string]: string } = {
    "Home": "/",
    "Guide": "/guide",
    "Staff": "/staff",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      light: "skyblue",
    },
  },
});

export function MainHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar  position="fixed" className='mainHeader' style={{width: "calc(100vw - 20px);"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/* PC用サーバーロゴ */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 0,
                padding: 0,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to="/">
                <img src="/images/logo/LargeLogo.png" height="80px" />
              </Link>
            </Typography>

            {/* スマホ用リンク一覧 */}
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
                {Object.keys(pages).map((name) => (
                  <Link to={pages[name]} style={{textDecoration: "none", color: "black"}}>
                      <MenuItem key={name}>
                          <Typography textAlign="center" style={{fontFamily: "DotGothic16"}}>{name}</Typography>
                      </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>

            {/* スマホ用サーバーロゴ */}
            <Typography
              variant="h5"
              noWrap
              component="a"
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
              <Link to="/">
                <img src="/images/logo/LargeIcon.png" height="80px" />
              </Link>
            </Typography>

            {/* PC用リンク一覧 */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {Object.keys(pages).map((name) => (
                <Button
                  key={name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, padding: 0, fontSize: "20px", fontFamily: "DotGothic16", color: 'white', display: 'block' }}
                >
                  <div style={{padding: "6px, 8px"}}>
                    <Link to={pages[name]}>
                        <span>{name}</span>
                    </Link>
                  </div>
                </Button>
              ))}
            </Box>

            {/* SNSボタン (Twitter) */}
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Button
                id='headerSnsButtons'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="https://twitter.com/EarthUnityMC"><img src='/images/snsLogo/twitter.svg' className='sns-icon' /></Link>
              </Button>
            </Box>
              
            {/* SNSボタン (Discord) */}
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Button
              id='headerSnsButtons'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link className='headerSnsButton' to="https://discord.gg/"><img src='/images/snsLogo/discord.svg' className='sns-icon' /></Link>
              </Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}