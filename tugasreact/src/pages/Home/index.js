import React, { Component } from 'react';
import { NavbarPage } from "../../templates";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idx : 0,
            page:"HOME",
            userUpdate:{},
            display:""
        }
    }

    showPage() {

    }

    goToPage = page => {
        this.setState({
            page
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