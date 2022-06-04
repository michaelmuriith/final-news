import React, { useContext } from 'react'

import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

export const Navbar = () => {

    let navigate = useNavigate();
    const {user,logout} = useContext(AuthContext);

    const onLogout = () => {
        logout();
        navigate('/');
    }
    console.log(user);
  return (
    <Box>
        <AppBar position='static'>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant='h5' component='div'  sx={{  flexGrow: 1,}}>
                    <Link to="/" style={{textDecoration: "none", color: "white"}}>Enews</Link>
                </Typography>
                <Box alignItems="right" sx={{ flexGrow: 1, textAlign: "right", justifySelf: 'flex-end'  }} >
                    { user ? 
                        <>
                            <Link to="/user" style={{textDecoration: "none", color: "white", marginRight: "10px"}}>{user.display_name}</Link>
                            <Button onClick={onLogout} style={{textDecoration: "none", color: "white"}}>Logout</Button>
                        </> : <>
                            <Link to="/login" style={{textDecoration: "none", color: "white", marginRight: "10px"}}>Login</Link>
                            <Link to="/register" style={{textDecoration: "none", color: "white"}}>Register</Link>
                        </>
                    }
                    
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
