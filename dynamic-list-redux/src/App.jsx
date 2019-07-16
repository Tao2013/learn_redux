import React from 'react';
import './App.css';
import UserList from './components/UserList'
import CreateUserForm from './components/CreateUserForm'
import UserTable from './components/UserTable'
import axios from 'axios';
import {Provider as ReduxProvider} from "react-redux"
import configureStore from "./store"

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends React.Component {
  constructor(props){
    super(props);
  
  this.state={users:[]}    
  }

  componentDidMount(){
    axios.get("http://localhost:3001/users")  
    .then(response => this.setState({users: response.data}))
      .catch(() => console.log("Could not get token"))
    };

  render() {
    return(
      <ReduxProvider store={reduxStore}>
        <div>
          <header className="App-header">
            <h1>Dynamic List with redux Example</h1>    
          </header>
          <body className="App-body">

          <UserList users={this.state.users}/>
          <UserTable users={this.state.users}/>
          <CreateUserForm addUser={this.addUser}/>
          
          </body>
        </div>
      </ReduxProvider>
    )
  };
}

export default App;