import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
  if (action.type === 'buy_ingredients') return {money:state.money - 10};
    if (action.type === "sell_ingredients") return { money: state.money + 10 };
  if (action.type === "celebrity_visit") return { money: state.money + 5000 };
  return state;
}
function App() {
  const initialState = {money:100};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "but_ingredients" })}>
          shopping for veggies!
        </button>
        <button onClick={() => dispatch({ type: "sell_ingredients" })}>
          serve a meal to the customer
        </button>
        <button onClick={() => dispatch({ type: "celebrity_visit" })}>
          celebrity_visit
        </button>
      </div>
    </div>
  );
}

export default App;
