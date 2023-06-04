import "./App.css";
import React from "react";
function App() {
  const [toggle, setToggle] = React.useState(false);

  const handleCLick = () => {
    setToggle(!toggle);
  };

  React.useEffect(() => {
    document.title = toggle ? "Welcome to Little Lemon" : "Using useEffect"
  }, [toggle]);

  return (
    <div className="App">
      <h1>Using the useEffect hook</h1>
      <button onClick={handleCLick}>Toggle message</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
}

export default App;
