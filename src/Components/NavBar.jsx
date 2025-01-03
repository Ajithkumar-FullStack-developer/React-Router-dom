import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              All
            </Link>
          </Typography>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
