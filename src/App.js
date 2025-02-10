


import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[]
  }
  }
  getUsers(){
    axios("https://randomuser.me/api/?results=10").then((response) =>this.setState({users: response.data.results})); 


  }
  componentWillMount() {
    this.getUsers()
  }
    
  render() {
    return (
      <div>
        <h1>Users List📃</h1>
        {this.state.users.map((user) =><div> <h2 key="user.name" >{user.name.first}-{user.email}<hr/></h2></div>)}
      </div>
    );
  }
}
export default App;
