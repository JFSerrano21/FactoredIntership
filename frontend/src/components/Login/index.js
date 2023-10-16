import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle the login logic here (like sending a request to your backend)
        console.log('Login details:', username, password);

        // Navigate to the profile page after successful login (or button click in this example)
        navigate('/profile');
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="login-input">
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="login-input">
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
