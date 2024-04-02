import { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap";
import './App.css'
import superstoreimg from './superstore.png';
import ListCategory from './components/ListCategory';

export const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSubmit = (event) => {

    event.preventDefault();
    // Realizar petición POST con los campos "name" y "description"
    fetch("http://localhost:4000/categories/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    })
      .then((response) => response.json())
      .then((data) => fetchCategories());

  }
  const fetchCategories = () => {
    console.log("Fetching categories");
    fetch('http://localhost:4000/categories/')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="App">
      <img src={superstoreimg} alt="Super Store" className="imagen" />

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
      <ListCategory data={categories} />

    </div>
  )
}


