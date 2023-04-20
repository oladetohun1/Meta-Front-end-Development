import './App.css';
import {useState} from 'react';

// keys in react are used to identify each element in a list, 
// so that react can update the list efficiently when the list changes 
// (e.g. when an item is added or removed from the list).

//using keys in react

const ToDo = props => {
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input/>
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
};
function App() {
    const [todos, setTodos] = useState([{
      id: 'todo1',
      createdAt: '18:00',
    }, {
      id: 'todo2',
      createdAt: '20:30',
    }]);
    const reverseOrder = () => {
      setTodos([...todos].reverse());
    }
    return (
      <div>
        <button onClick={reverseOrder}>Reverse Order</button>
        <table>
          <tbody>
            {todos.map((todo, index) => (
              <ToDo key = {index} id={todo.id} createdAt = {todo.createdAt} /> 
              ))}
          </tbody>
        </table>    
      </div>      
);

}

export default App;

