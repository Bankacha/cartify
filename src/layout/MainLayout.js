import { Header } from "./components/Header";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from "react-router-dom";
import '../components/styles/header.css'

export function MainLayout(props) {

    return (
        <Router>
            <Header className='navbar'></Header>
            <Container>
                { props.children }
            </Container>
        </Router>
    )
}
