import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener el token de acceso almacenado en el almacenamiento local (localStorage o sessionStorage)
    const token = localStorage.getItem("access_token");

    if (!token) {
      setError("No se ha encontrado un token de acceso. Por favor, inicie sesión.");
      return;
    }

    // Realizar la solicitud con el token JWT en los encabezados
    axios.get("http://localhost:5000/users/obtener", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => setUsers(response.data))
      .catch(error => {
        console.error("Error cargando usuarios:", error);
        setError("Error al cargar la lista de usuarios.");
      });
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {error && <p>{error}</p>}
      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id}>
              {user.nombre} - {user.email}
            </li>
          ))
        ) : (
          <p>No hay usuarios para mostrar.</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;
