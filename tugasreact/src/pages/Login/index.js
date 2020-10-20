import React, {Component} from 'react';
import  {Button,Alert,Form} from 'react-bootstrap';
import "./style.css"

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            show: false,
            variant: "",
            messageAlert: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.goLogin = this.goLogin.bind(this);
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

    goLogin(event) {
        event.preventDefault();
        const { username, password } = this.state
        let user = this.props.users.find(user => user.username === username)
        if (user === undefined) {
            this.setShow(true,'danger','Wrong Username')
            return
        }
        if (user.password === undefined) {
            if (password !== "admin") {
                this.setShow(true,'danger','Wrong Password')
                return
            }
        } else {
            if (user.password !== password ){
                this.setShow(true,'danger','Wrong Password')
                return
            }
        }
        this.props.selectedUser(user)
        this.props.goToHome()
    }

    render() {
        return (
            <div className="App" style={{backgroundColor: '#1C8EF9'}}>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Form onSubmit={this.goLogin}>
                            <h3>Sign In</h3>
                            <Alert variant={this.state.variant} show={this.state.show} onClose={() => this.setShow(false)} dismissible>
                               <p>{this.state.messageAlert}</p>
                            </Alert>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password || ''} onChange={this.handleChange} placeholder="Password" />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;