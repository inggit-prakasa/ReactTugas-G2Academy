import React, { Component } from 'react';
import {Card, Col, Container, Form, Row, Button, Alert} from "react-bootstrap";

class UpdatePasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirmpassword: "",
            show: false,
            variant: "",
            messageAlert: ""
        }
        this.updatePassword = this.updatePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    updatePassword(e) {
        e.preventDefault()
        let { user,password,confirmpassword } = this.state
        if (password !== confirmpassword ) {
            this.setShow(true,'danger','Different password')
            return
        }
        user = this.props.user
        user.password = this.state.password
        this.props.editUser(user)
        this.setShow(true,'success','Password updated')
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    setShow(show, variant,messageAlert) {
        this.setState ({
            show,
            variant,
            messageAlert
        },)
    }

    render() {
        return (
            <Container>
                <Card>
                    <Card.Header>
                        <Row>
                            <Col>Edit Password</Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Alert variant={this.state.variant} show={this.state.show} onClose={() => this.setShow(false)} dismissible>
                            <p>{this.state.messageAlert}</p>
                        </Alert>
                        <Form onSubmit={this.updatePassword}>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={3}>
                                    Email
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" placeholder="Email" defaultValue={this.props.user.username} disabled />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={3}>
                                    Password
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalConfirmsPassword">
                                <Form.Label column sm={3}>
                                    Confirm Password
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="password" placeholder="Confirm Password" name="confirmpassword" onChange={this.handleChange} value={this.state.confirmpassword}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col>
                                    <Button type="submit">Update Password</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default UpdatePasswordPage;