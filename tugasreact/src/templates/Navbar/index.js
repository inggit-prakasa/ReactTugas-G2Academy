import React, { Component } from "react";
import {Navbar,Nav, DropdownButton, Dropdown,NavLink} from "react-bootstrap";

class NavbarPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>
                    <strong className="white-text">Tugas Bootcamp React</strong>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink onClick={() => this.props.goToPage("ALBUMS")}>Albums</NavLink>
                </Nav>
                <Nav>
                    <DropdownButton
                        alignRight
                        variant={'primary'}
                        title={
                            <span> <img
                                src={`https://ui-avatars.com/api/?name=${this.props.user.name}&background=0D8ABC&color=fff&rounded=true`}
                                alt="userProfile"
                                height={30}
                                width={30}
                            /> </span>
                        }
                    >
                        <Dropdown.Item onClick={() => this.props.goToPage("PROFILE")}>User Profile</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.goToPage("UPDATEPASSWORD")}>Update Password</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={this.props.goToLogin}>Logout</Dropdown.Item>
                    </DropdownButton>
                </Nav>
            </Navbar>
        );
    }
}

export default NavbarPage;