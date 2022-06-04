import React, { useContext, useState } from 'react';
import {useMutation} from '@apollo/client';
import {useNavigate } from 'react-router-dom';
import {TextField, Button, Container, Stack, Alert, Box} from '@mui/material'

import {AuthContext} from '../../../context/authContext'
import { LOGIN } from '../../../graphql/mutations';
import '../auth.css'

const Login = () => {
  const context = useContext(AuthContext);
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([])

  const [login, {loading}] = useMutation(LOGIN, {
    update(proxy, {data: {login: userData}}) {
      context.login(userData);
      navigate('/')
    },
    onError({ graghQLErrors}){
      setErrors(graghQLErrors)
    },

    variables: {
      loginData: {
        email,
        password
      }
    }
  });


  return (
    <Container spacing={2}>
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}} >
        <h3> Login</h3>
        <Stack spacing={2} paddingBottom={2}>
          <TextField 
            label="Email"
            name="email"
            onChange={
              event =>{
                setEmail(event.target.value)
              }
            }
          />
          <TextField 
            label="Password"
            name="password"
            onChange={
              event =>{
                setPassword(event.target.value)
              }
            }
          />
        </Stack>
        {console.log(errors)}
        {/* {errors.map(function(error) {
          return (
            <Alert severity='error'>
              {error.message}
            </Alert>
          )
        })} */}
        <Button variant="contained" onClick={login}>Login</Button>
      </Box>
    </Container>
  )
}

export default Login