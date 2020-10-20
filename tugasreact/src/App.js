import React, {Component} from 'react';
import './App.css';
import {LoginPage , Home} from "./pages";

class App extends Component {
 constructor(props) {
     super(props);
     this.state = {
         click: true,
         page: "LOGIN",
         userSelected: {},
         album: null,
         users: null,
         result : null
     }
 }

    selectedUser = userSelected => {
        this.setState({
            userSelected
        })
    }

    deleteRow = (idx) => {
        const lastData = this.state.users
        lastData.splice(idx, 1)
        this.setState({
            contacts: lastData
        })
    }

    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => this.setUsers(result));
    }

    setUsers(result) {
        this.setState({ users : result });
    }

    componentDidMount() {
        this.fetchData();
    }

    updateUser = user => {
        let newData = this.state.users
        newData.push(user)
        this.setState({
            users: newData
        })
    }

    editUser = (user) => {
        const newData = this.state.users
        newData[user.id - 1] = user
        this.setState({
            users: newData
        })
        console.log(this.state.users)
    }

    showPage = () => {
        if (this.state.page === "HOME")
            return <Home goToLogin={() => this.goToPage("LOGIN")} editUser={this.editUser} updateUser={this.updateUser} user={this.state.userSelected} users={this.state.users} deleteRow={this.deleteRow}/>

        return <LoginPage users={this.state.users}  goToHome={() => this.goToPage("HOME")} selectedUser={this.selectedUser}/>
    }

    goToPage = (page) => {
        this.setState({
            page
        })
    }

  render() {
      return (
          <>
              {
                  this.showPage()
              }
          </>
      );
  }
}

export default App;
