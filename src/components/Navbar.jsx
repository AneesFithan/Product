import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"green"}}>
        <Toolbar>
          <Typography color={'yellow'} fontFamily={'revert'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products
            </Typography>
            <Link to={'/'}>
          <Button style={{color:'red'}} color="inherit">View Products</Button>
          </Link>
          <Link to={'/add'}>
          <Button style={{color:'red'}} color="inherit">Add Products</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar