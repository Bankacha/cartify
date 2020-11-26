import { Header } from "./components/Header";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from "react-router-dom";

export function MainLayout(props) {

    return (
        <Router>
            <Header></Header>
            <Container>
                { props.children }
            </Container>
        </Router>
    )
}
