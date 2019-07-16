import React from 'react'
import createUser from "../action";
import { connect } from "react-redux";
import axios from 'axios';

class CreateUserForm extends React.Component{
    state = {};

    onSubmit = e =>{
        axios.post('http://localhost:3001/users', {
          "firstName": e.target.firstName.value,
          "lastName":e.target.lastName.value,
        })
          .then(res => this.setState({ users: [...this.state.users, res.data] }));
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <label>First Name</label> 
                <input type="text" name="firstName"/>

                <label>Last Name</label>  
                <input type="text" name="lastName"/>  

                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
});
  
const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(createUser(user)),
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateUserForm);