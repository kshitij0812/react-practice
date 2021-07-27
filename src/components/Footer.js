import React, { Component } from 'react'
import {
    Navbar
} from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <Navbar fixed="bottom" expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Copyright &copy; 2021</Navbar.Brand>
            </Navbar>
        )
    }
}
