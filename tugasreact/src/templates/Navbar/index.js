import React, { Component } from "react";
import {Navbar,Nav, DropdownButton, Dropdown,NavLink} from "react-bootstrap";

class NavbarPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>
                    <strong className="white-text">HRD Management System</strong>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink to="#!">Home</NavLink>
                </Nav>
                <Nav>
                    <DropdownButton
                        alignRight
                        variant={'primary'}
                        title={
                            <span> <img
                                src="https://ui-avatars.com/api/?name=M%20Inggit%20Prakasa&background=0D8ABC&color=fff&rounded=true"
                                alt="userProfile"
                                height={30}
                                width={30}
                            /> </span>
                        }
                    >
                        <Dropdown.Item onClick={() => this.props.goToPage("PROFILE")}>User Profile</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={this.props.goToLogin}>Logout</Dropdown.Item>
                    </DropdownButton>
                </Nav>
            </Navbar>
        );
    }
}

export default NavbarPage;