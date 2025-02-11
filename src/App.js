import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('react')
  const [url,setUrl]=useState(`https://hn.algolia.com/api/v1/search?query=${query}`)
  const fetchNews = () => {
    fetch(url)
    .then(response => response.json())
    // .then(data => console.log(data))

    .then(data => setNews(data.hits))
    .catch(err => console.log(err))
    
  
  }
  const  hadleQuery=(e)=>{
    e.preventDefault();
    setQuery(e.target.value)

  }
  const  hadleSubmit=(e)=>{
    e.preventDefault();
    setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
  }
  useEffect(() => {
    fetchNews()
  }, [url])



  return (
    <div>
      <h1>Users List📃</h1>
      <input  value={query} onChange={hadleQuery}/>
      <button onClick={hadleSubmit}>Search</button>
      {news.map((news) => (
        <div key={news.title}>
          <h2>{news.title}</h2>
          <p>{news.url}</p>
        </div>
      ))}
    </div>
  )
}
export default App;



// const App=()=>{
// const [count,setCount]=useState(0);
// const [users,setUsers]=useState([]);
// const increment=()=>{
//   setCount(count+1)}
//   // useEffect(()=>{
//   //   document.title=`title is clicked${count} times`

//   // })
//   useEffect(()=>{
//     axios(`https://randomuser.me/api/?results=${count=2}`)
//     .then((response)=>{
//       setUsers(response.data.results)
//       console.log(response.data.results)
//     })
//   },[users])
    

  
//   return(
//     <div> 
//       <p>Users List📃</p>
//       <h1>Count</h1>
//       <button onClick={increment}>Increment:{count}</button>
    
//     </div>
//   )
// }

// export default App;





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


