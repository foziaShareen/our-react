


import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[]
  }
  }
  componentWillMount() {
    axios("https://randomuser.me/api/?results=10").then((response) =>this.setState({users: response.data.results})); 
    
  }
    
  render() {
    return (
      <div>
        <h1>hello world</h1>
        {this.state.users.map((user) => <h2 key="user.name" >I am-{user.name.first}</h2>)}
      </div>
    );
  }
}
export default App;
