


import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      loading:false
  }
  }
  getUsers(){
    this.setState({loading:true})
    axios("https://randomuser.me/api/?results=10").then((response) =>
     
    this.setState({users: response.data.results
      ,loading:false})
    ); 
    



  }
  componentWillMount() {
    this.getUsers()
  }
    
  render() {
    return (
      <div>
        <h1>Users List📃</h1>
        {this.state.loading ? <h1>Loading...</h1> : this.state.users.map((user) => <div key={user.email}><h2>{user.name.first} - {user.email}</h2><hr/></div>)}
      </div>
    );
  }
}
export default App;
