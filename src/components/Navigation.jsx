import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () =>{
    return(
        <Navbar
        bg="danger"
        >
            <Container className="justify-content-start">
                
                <Link
                to="/"
                className="text-white ms-3 text-decoration-none"
                >
                🏠 Home
                </Link>
                <Link
                to="/contacto"
                className="text-white ms-3 text-decoration-none"
                >
                📒 Contacto
                </Link>
            </Container>
            <Navbar.Brand className="text-white">Pastel Feliz 🍰</Navbar.Brand>
        </Navbar>

    )
}
export default Navigation;