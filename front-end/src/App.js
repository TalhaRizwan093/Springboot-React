
import './App.css';
import Home from './Home'
import NewData from './NewData'
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  // const title = "Welcome to my first app"
  // const updates = 50
  // const [name, setName] = useState("Talha")

  // const handleClick = (name) => {
  //   console.log(name)
  // }
  // const handleClickChangeName = () => {
  //   setName("Osama")
  // }

  return (
    <Router>
      <div className="App">
          <Navbar />
        <div className="content">
          {/* <h1>{title}</h1>
        <p>I updates it {updates} times</p>
        <p>{name}</p>
        <button onClick={handleClickChangeName}>Change Name</button>
        <button onClick={() => {
          handleClick("Talha")
        }}>Click me</button> */}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/newData'>
              <NewData />
            </Route>
          </Switch>

        </div>

      </div>
    </Router>
  );
}

export default App;
