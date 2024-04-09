import { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import './App.css'
import superstoreimg from './superstore.png';

export const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [data2, setData2] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar petición GET sin incluir el cuerpo
    fetch("https://ideal-couscous-gwr97x56596fvwg-4000.app.github.dev/categories/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    .then(response => response.json())
    .then(data => {
      setData2(data);
      console.log(data);
    });
  }

  return (
    <div className="App">
      <img src={superstoreimg} alt="Super Store" className="imagen" />

      <Form onSubmit={handleSubmit}>
        <Button variant="primary" type="submit">
          LISTAR 
        </Button>
      </Form>

      {data2.length > 0 && (
        <div>
          <h2>Tabla de usuarios</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Cargo</th>
              </tr>
            </thead>
            <tbody>
              {data2.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.name}</td>
                  <td>{producto.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default App;
