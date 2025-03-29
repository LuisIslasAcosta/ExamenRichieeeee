import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [nombre, setNombre] = useState("");  // Cambiar a "nombre"
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");  // Agregar el estado para teléfono
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Modificar los datos enviados para que coincidan con la estructura JSON
      await axios.post("https://3.145.113.231/users/", { 
        nombre, 
        email, 
        telefono,  // Incluir teléfono
        password 
      });
      alert("Registro exitoso. Ahora inicia sesión.");
      navigate("/login");
    } catch (error) {
      alert("Error al registrar usuario.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="text"  // Cambié a "text" para teléfono
        placeholder="Teléfono" 
        value={telefono} 
        onChange={(e) => setTelefono(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
