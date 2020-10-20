import React, { Component } from 'react';
import { NavbarPage } from "../../templates";
import {Album, UpdatePasswordPage} from "../index";
import {Photos} from "../index";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page:"ALBUMS",
            album: null,
            userUpdate:{},
            display:""
        }
    }

    showPage() {
        if (this.state.page === "PHOTOS") {
            return <Photos album={this.state.album}/>
        }
        else if (this.state.page === "ALBUMS") {
            return <Album user={this.props.user} goToPage={this.goToPage} album={this.state.albumSet}/>
        }
        else if (this.state.page === "UPDATEPASSWORD") {
            return <UpdatePasswordPage user={this.props.user} editUser={this.props.editUser}/>
        }
    }

    albumSet(album) {
        this.setState({
            album
        })
    }

    goToPage = (page,album) => {
        this.setState({
            page,album
        })
    }

    render() {
        return (
            <>
                <NavbarPage goToLogin={this.props.goToLogin} goToPage={this.goToPage} display={this.state.display} user={this.props.user}/>
                {
                    this.showPage()
                }
            </>
        );
    }
}

export default Home;