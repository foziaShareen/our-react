import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
const App=()=>{
const [count,setCount]=useState(0);
const increment=()=>{
  setCount(count+1)}
  return(
    <div> 
      <h1>Count</h1>
      <button onClick={increment}>Increment:{count}</button>
    </div>
  )
}
export default App;





// import React from 'react';
// import axios from 'axios';
// import Loading from './Loading';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       loading: false,
//       userCount: 2 // default number of users to load
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   getUsers(count) {
//     this.setState({ loading: true });
//     axios(`https://randomuser.me/api/?results=${count}`)
//       .then((response) =>
//         this.setState({ users: response.data.results, loading: false })
//       );
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.getUsers(this.state.userCount);
//     console.log("more users loaded");
//   }

//   handleInputChange(e) {
//     this.setState({ userCount: e.target.value });
//   }

//   componentDidMount() {
//     this.getUsers(this.state.userCount);
//   }

//   render() {
//     const { users, loading, userCount } = this.state;

//     return (
//       <div style={{background: "black", color: "white"}}>
//         <h1>Users List📃</h1>
//         {loading ? (
//           <Loading message="page is loading...⌛" />
//         ) : (
//           users.map((user) => (
//             <div key={user.email}>
//               <h2>
//                 {user.name.first} - {user.email}
//               </h2>
//               <hr />
//             </div>
//           ))
//         )}
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="number"
//             value={this.state.userCount}
//             onChange={this.handleInputChange}
//             min="1"
//           />
//           <input value="load users" type="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// export default App;
