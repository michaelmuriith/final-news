import React from 'react'
import {Container} from '@mui/material'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <Container sx={{margin: '5px', backgroundColor: '#f3f3f3', padding: '20px', borderRadius: '15px', display: 'flex', flexDirection: 'column', position: 'sticky', top: '0px'}}>
        <h3><u>Categories</u></h3>
        <Link to="/" style={{textDecoration: "none", color: "black", marginRight: "10px", marginBottom: '10px'}}>Politics</Link>
        <Link to="/" style={{textDecoration: "none", color: "black", marginRight: "10px", marginBottom: '10px'}}>Sports</Link>
        <Link to="/" style={{textDecoration: "none", color: "black", marginRight: "10px", marginBottom: '10px'}}>Fashon</Link>
        <Link to="/" style={{textDecoration: "none", color: "black", marginRight: "10px", marginBottom: '10px'}}>Entertainment</Link>
    </Container>
  )
}

export default SideBar