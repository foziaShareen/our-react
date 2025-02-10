import React from 'react';
import axios from 'axios';
import Loading from './Loading';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
      userCount: 10 // default number of users to load
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getUsers(count) {
    this.setState({ loading: true });
    axios(`https://randomuser.me/api/?results=${count}`)
      .then((response) =>
        this.setState({ users: response.data.results, loading: false })
      );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers(this.state.userCount);
    console.log("more users loaded");
  }

  handleInputChange(e) {
    this.setState({ userCount: e.target.value });
  }

  componentDidMount() {
    this.getUsers(this.state.userCount);
  }

  render() {
    return (
      <div>
        <h1>Users List📃</h1>
        {this.state.loading ? (
          <Loading message="page is loading...⌛" />
        ) : (
          this.state.users.map((user) => (
            <div key={user.email}>
              <h2>
                {user.name.first} - {user.email}
              </h2>
              <hr />
            </div>
          ))
        )}
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.userCount}
            onChange={this.handleInputChange}
            min="1"
          />
          <input value="load users" type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
