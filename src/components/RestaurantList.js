import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { 
    Breadcrumb,
    Container,
    Table
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export default class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    getRestaurantList() {
        fetch('http://localhost:3000/restaurant').then(
            response => response.json()
        ).then(
            data => {
                this.setState({list: data});
            }
        );
    }

    componentDidMount() {
        this.getRestaurantList();
    }
    
    deleteRestaurant(restaurant_id) {
        if(window.confirm('Confirm?')) {
            fetch(`http://localhost:3000/restaurant/${restaurant_id}`, {
                method: 'Delete',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(
                response => response.json()
            ).then(
                response => {
                    alert('Deleted successfully');
                    this.getRestaurantList();
            });
        }
    };

    render() {
        return (
            <div className="col-md-12">
                <Container className="mt-4">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Restaurant Listing</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
                <Container className="mt-4">
                    <Table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Owner</th>
                                <th>Rating</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        {
                            this.state.list.length ? 
                                <tbody>
                                    {
                                        this.state.list.map((resto, index)=>
                                            <tr key={index}>
                                                <td>{resto.id}</td>
                                                <td>{resto.name}</td>
                                                <td>{resto.owner}</td>
                                                <td>{resto.rating}</td>
                                                <td>{resto.address}</td>
                                                <td>{resto.email}</td>
                                                <td>
                                                    <Link to={`/update/${resto.id}`} title="Edit">
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </Link>
                                                </td>
                                                <td>
                                                    <span variant="danger" onClick={()=>this.deleteRestaurant(resto.id)} title="Delete">
                                                        <FontAwesomeIcon icon={faTrash} color="red" />
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            :
                                <tbody>
                                    <tr>
                                        <td colSpan="7">Data Not Found</td>
                                    </tr>
                                </tbody>
                        }
                    </Table>
                </Container>
            </div>
        )
    }
}
