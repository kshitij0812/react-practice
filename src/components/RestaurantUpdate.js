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

export default class RestaurantUpdate extends Component {
    constructor() {
        super();

        this.restaurant_id = null;
        this.state = {
            id: null,
            name: null,
            owner:  null,
            address:  null,
            rating:  null,
            email:  null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3000/restaurant/${this.restaurant_id}`).then(
            response => response.json()
        ).then(
            data => {
                this.setState(data);
            }
        );
    }

    submitForm() {
        fetch(`http://localhost:3000/restaurant/${this.restaurant_id}`, {
            method: 'Put',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            response => response.json()
        ).then(
            response => {
                alert('Updated Successfully');
        });
    };

    render() {
        this.restaurant_id = this.props.match.params.id;
        return (
            <div className="col-md-12">
                <Container className="mt-4">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link>Restaurant Update</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>{this.state.name ? this.state.name : ''}</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
                <Container className="mt-4">
                    <Form onSubmit={(e) => {this.submitForm(); e.preventDefault();}}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="name">
                                <Form.Label>Restaurant Name</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name ? this.state.name : ''} onChange={(e) => {this.setState({name: e.target.value})}} placeholder="Enter Restaurant Name"  />
                            </Form.Group>

                            <Form.Group as={Col} controlId="owner">
                                <Form.Label>Owner Name</Form.Label>
                                <Form.Control type="text" name="owner" value={this.state.owner ? this.state.owner : ''} onChange={(e) => {this.setState({owner: e.target.value})}} placeholder="Enter Owner Name"  />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Email-Id</Form.Label>
                                <Form.Control type="email" name="email" value={this.state.email ? this.state.email : ''} onChange={(e) => {this.setState({email: e.target.value})}} placeholder="Email-Id"  />
                            </Form.Group>
                            <Form.Group as={Col} controlId="rating">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control type="number" min="0" step="0.01" name="rating"  value={this.state.rating ? this.state.rating : ''} onChange={(e) => {this.setState({rating: e.target.value})}} placeholder="Rating"  />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address" value={this.state.address ? this.state.address : ''} onChange={(e) => {this.setState({address: e.target.value})}} placeholder="Address"  />
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
