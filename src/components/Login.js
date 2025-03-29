import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Enviar solo email y password como en tu estructura de JSON
      const response = await axios.post("http://3.145.113.231/users/login", { email, password });
      
      // Almacenar solo los datos del usuario (sin token)
      setUser(response.data.usuario); // Asumimos que la respuesta contiene un objeto 'usuario'
      
      navigate("/profile");  // Redirigir a la página del perfil
    } catch (error) {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
