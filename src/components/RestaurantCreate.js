import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {
    Form,
    Row,
    Col,
    Breadcrumb,
    Container,
    Button
} from 'react-bootstrap'

export default class RestaurantCreate extends Component {
    submitForm(e) {
        e.preventDefault();
        let data = {
            name: e.target.name.value,
            owner:  e.target.owner.value,
            address:  e.target.address.value,
            rating:  e.target.rating.value,
            email:  e.target.email.value
        }
        console.log(JSON.stringify(data));
        fetch('http://localhost:3000/restaurant', {
            method: 'Post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            response => response.json()
        ).then(
            response => {
            console.log('response');
            console.log(response);
        });
    };

    render() {
        return (
            <div className="col-md-12">
                <Container className="mt-4">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Restaurant Create</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
                <Container className="mt-4">
                    <Form onSubmit={this.submitForm}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="name">
                                <Form.Label>Restaurant Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter Restaurant Name" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="owner">
                                <Form.Label>Owner Name</Form.Label>
                                <Form.Control type="text" name="owner" placeholder="Enter Owner Name" required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Email-Id</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Email-Id" required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="rating">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control type="number" min="0" step="0.01" name="rating" placeholder="Rating" required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address" placeholder="Address" required />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
