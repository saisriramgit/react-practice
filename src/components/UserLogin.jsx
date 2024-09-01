import React, { useState } from "react";

function UserLogin () {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const correctPassword = "MyPassword@12";

    const handleButton = () => {
        if(password === correctPassword) {
            setMessage(`Welcome, ${name}`);
        } else {
            setMessage(`You've entered incorrect password`);
        }
    }

    return (
        <div>
            
            <div>
                <input type="text" value={name} placeholder="Enter your name" onChange={e => setName(e.target.value)} />    
            </div>
            <div>
                <input type="text" value={password} placeholder="Enter your password" onChange={e => setPassword(e.target.value)} />    
            </div>
            <button onClick={handleButton}>Login</button>
            {message && <p style={{color: password === correctPassword ? 'green' : 'red'}}>{message}</p>}
        </div>
    )
}

export default UserLogin