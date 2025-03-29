import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom"; // Agregamos Navigate
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import UserList from './components/UserList';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/login">Login</Link> | 
            <Link to="/register">Register</Link> | 
            <Link to="/users">Users</Link>
          </nav>

          <Routes>
            <Route path="/" element={<h1>Bienvenido a la aplicación</h1>} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            {/* Mostrar la lista de usuarios si hay un usuario autenticado */}
            <Route path="/users" element={user ? <UserList /> : <Navigate to="/login" />} />
            {/* Si el usuario no está autenticado, redirigir al login */}
            <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
