import React, { useState } from 'react'
import {Box, Container, TextField, Button } from '@mui/material';


function AddCategory() {
    const [headline, setHeadline] = useState('');
  return (
    <Container sx={{margin: '5px', backgroundColor: '#f3f3f3', padding: '20px', borderRadius: '15px'}}>
        <Box>
            <h3>Add a Category*</h3>
            <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="HeadLine"
                multiline
                maxRows={4}
                value={headline}
                onChange={
                event =>{
                    setHeadline(event.target.value)
                }
                }
            />
        </Box>
        <Button sx={{backgroundColor: "blue", color: "white", marginTop: '10px', right: '0'}}>Add</Button>
    </Container>
  )
}

export default AddCategory
