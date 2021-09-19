import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
   <LoadUsers></LoadUsers>

    </div>
  );
}
function LoadUsers(){
  const [users, setUsers] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <h1>User loaded: {users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div className ="user">
      <h2>Name:{props.name}</h2>
      <p>Working with React {props.phone}</p>
    </div>
  )
}


// function Counter(){
//   const [count, setCount] = useState(0);
//   // console.log(count, setCount);

//   const handleIncrease = () => setCount(count + 1);
//   const handledecrease = () => setCount(count - 1);
//     // console.log('increased')

//   return (
//     <div>
//      <h1>Count:{count}</h1>
//      <button onClick={handleIncrease}>Increase</button>
//      <button onClick={handledecrease}>decrease</button>
//   </div>
//   );
// }


// function Person(props){
//   console.log = (props);
//   const person ={
//     backgroundColor: 'lightblue',
//     border: '3px solid lightcoral',
//     borderRadius: '10px',
//     margin: '20px'
    
//   }
//   return (
//     <div style={person}>
//      <h1>Name: {props.name}</h1>
//      <h4>Profession: {props.job}</h4>
//   </div>
//   );
// }

// // <Person name={nayoks[0]} job="Software developer"></Person>
// //      <Person name={nayoks[1]} job="SQA Enginieer"></Person>
// //      <Person name={nayoks[2]} job="Deep learning Enginieer"></Person>

export default App;
