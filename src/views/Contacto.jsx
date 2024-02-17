import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import { useState } from "react";

const Contacto = () => {
  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const validateData = (e) => {
    e.preventDefault();
    if (email === "" || descripcion === "") {
      alert("Por favor, rellena todos los campos antes de enviar.");
    } else {
      setEmail("");
      setDescripcion("");
    }
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getDescripcion = (e) => {
    setDescripcion(e.target.value);
  };
  return (
    <Container className="text-center">
      <h1 className="pt-5">Cuentanos, ¿Que te parecio nuestros pasteles?</h1>
      <Form onSubmit={validateData}>
        <Form.Group className="mb-3">
          <FormLabel>Correo:</FormLabel>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={getEmail}
            placeholder="name@example.com"
            className="my-2"
          />
          <FormLabel>Descripción:</FormLabel>
          <Form.Control
            value={descripcion}
            onChange={getDescripcion}
            as="textarea"
            rows={3}
            name="descripcion"
            className="my-2"
          />
          <Button type="submit" variant="danger" className="w-10">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};
export default Contacto;
