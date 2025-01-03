import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { IconButton, Menu, MenuItem, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  
  const isMobile = useMediaQuery('(max-width: 600px)'); // For mobile view

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              All
            </Link>
          </Typography>
          
          {isMobile ? (
            // Hamburger menu for mobile view
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ display: { xs: 'block', sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              
              <Drawer
                anchor="right"
                open={openDrawer}
                onClose={handleDrawerToggle}
              >
                <List>
                  <ListItem button onClick={handleDrawerToggle}>
                    <ListItemText>
                      <Link to="/fullStackDevelopment" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Full Stack Development
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem button onClick={handleDrawerToggle}>
                    <ListItemText>
                      <Link to="/Datascience" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Data Science
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem button onClick={handleDrawerToggle}>
                    <ListItemText>
                      <Link to="/cyberSecurity" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Cyber Security
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem button onClick={handleDrawerToggle}>
                    <ListItemText>
                      <Link to="/Career" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Career
                      </Link>
                    </ListItemText>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            // Horizontal links for desktop view
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/fullStackDevelopment" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Full Stack Development
                </Link>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/Datascience" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Data Science
                </Link>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/cyberSecurity" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Cyber Security
                </Link>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/Career" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Career
                </Link>
              </Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
