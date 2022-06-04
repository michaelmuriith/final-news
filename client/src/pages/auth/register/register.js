import React, { useContext, useState } from 'react';
import {useMutation} from '@apollo/client';
import {useNavigate } from 'react-router-dom';

import {AuthContext} from '../../../context/authContext'
import { REGISTER } from '../../../graphql/mutations';
import '../auth.css'


const Register = () => {

    const context = useContext(AuthContext);
    let navigate = useNavigate();

    const [userName, setUsername] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [registerUser, {loading, error, data}] = useMutation(REGISTER, {
        update(proxy, {data: {registerUser: userData}}) {
            context.login(userData);
            navigate('/')
        },
        variables: {
            userInput: {
                full_name: userName,
                display_name: displayName,
                image: userName,
                email: email,
                password: password
            }
        }
    });

 

    if (loading) return 'Submitting...';
    if (error) {console.log(error)}
    
    
    //{console.log(error)}

    return (
        <form>
            <div className='header'>
                <h3>Register</h3>
            </div>
            <div className="form_body">
                <div className="mb-3">
                    <label>Full names:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        name="userName" 
                        onChange={
                            event =>{
                                setUsername(event.target.value)
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label>Display name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Display name" 
                        name="displayName" 
                        onChange={
                            event =>{
                                setDisplayName(event.target.value)
                            }
                        }                       
                    />
                </div>
                <div className="mb-3">
                    <label>Email address:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                        onChange={
                            event =>{
                                setEmail(event.target.value)
                            }
                        }                        
                    />
                </div>
                <div className="mb-3">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password" 
                        onChange={
                            event =>{
                                setPassword(event.target.value)
                            }
                        }   
                    />
                </div>
                <div className="mb-3">
                    <label>Confirm password:</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                        name="confirmPassword" 
                        // onChange={onChange}
                    />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary bg-slate-500" onClick={registerUser}>
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </div>
            {/* {errors.map((error) => {
                return (
                    <Alert>
                    {error.message}
                    </Alert>
                )
            })}, */}
        </form>  
    )
}

export default Register