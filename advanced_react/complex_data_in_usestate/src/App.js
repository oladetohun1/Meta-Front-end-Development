import logo from './logo.svg';
import {useState} from 'react';

import './App.css';

function App() {


  const [greeting, setGreeting] = useState({greet: "Hello World", place: "world"});
  console.log(greeting, setGreeting);
  // not the recommended way to use useState
  function updateGreeting() {
    setGreeting({greet: "Hello, world-wide-web" });
  }
  // the mroe correct way will be to copy the state object and then update the copy using the spread operator
  function updateGreeting2() {
    const newGreeting = {...greeting};
    newGreeting.greet = "Hello, world-wide-web";
    setGreeting(newGreeting);
  }
  // incorrect way of trying to update the state object;
  function updateGreeting3(){
    greeting = { greet: "Hello, world-wide-web" };
    setGreeting(greeting);
  } //would give a assignment error

  function updateGreeting4() {
    setGreeting(prevState => {
      return {...prevState, place: "World-Wide web"}
    });
  }

  return (
    <div className="App">
      <header className="App-header">
    <h1>{greeting.greet}</h1>
    <button onClick={updateGreeting4}>Update Greeting</button>
      </header>
    </div>
  );
}

export default App;
