import logo from '../logo.svg';
import React, { Component } from 'react'
import {
    Container,
    Image,
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
    render(props) {
        return (
            <div className="col-md-12">
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Image src={logo} width="50"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/"><Nav.Link><NavItem>Home</NavItem></Nav.Link></LinkContainer>
                            <LinkContainer to="/create"><Nav.Link><NavItem>Restaurant Create</NavItem></Nav.Link></LinkContainer>
                            <LinkContainer to="/detail"><Nav.Link><NavItem>Restaurant Detail</NavItem></Nav.Link></LinkContainer>
                            <LinkContainer to="/list"><Nav.Link><NavItem>Restaurant List</NavItem></Nav.Link></LinkContainer>
                            <LinkContainer to="/search"><Nav.Link><NavItem>Restaurant Search</NavItem></Nav.Link></LinkContainer>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
