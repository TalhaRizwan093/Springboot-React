
import { useState } from 'react';
import './App.css';
import Home from './Home'

function App() {
  const title = "Welcome to my first app"
  const updates = 50
  const [name, setName] = useState("Talha")

  const handleClick = (name) => {
    console.log(name)
  }
  const handleClickChangeName = () => {
    setName("Osama")
  }

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>I updates it {updates} times</p>
        <p>{name}</p>
        <button onClick={handleClickChangeName}>Change Name</button>
        <button onClick={() => {
          handleClick("Talha")
        }}>Click me</button>
        <Home></Home>
        
      </div>

    </div>
  );
}

export default App;
