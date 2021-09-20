import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { buildQueries } from '@testing-library/react';

function App() {
  return (
    <div className="App">
        <StateChange></StateChange>
    </div>
  );
}

function StateChange(){
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div className="dev-list">
      {
        users.map(user => <User name={user.name} email={user.email} phone={user.phone}></User>)
      }
    </div>

  )
}

function User(props) {
  const [count, setCount] = useState(1)

  const increaseMarks = () => {
    const newCount = count + 1
    setCount(newCount)
  }
  
  const cardParentStyle = {
    padding: "20px",
    border: "4px solid #649fa9",
    backgroundColor: "#2c78b9",
    color: "white"
  }

  return (
    <div style={cardParentStyle}>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>Marks he has got: {count}</p>
      <button onClick={increaseMarks}>Give marks</button>
    </div>
  )
}

export default App;
