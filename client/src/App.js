// client/src/App.js
import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setLoggedInUser(null); // Set logged-in user to null
    };

    return (
        <div className="App">
            
            {loggedInUser ? (
                <div>
                    <p>Welcome {loggedInUser}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <Register />
                    <Login setLoggedInUser={setLoggedInUser} />
                </div>
            )}
        </div>
    );
};

export default App;
