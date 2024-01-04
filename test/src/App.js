import "./App.css";
import { useReducer } from "react";
import List from "./List";

const initState = {
  todo: "",
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      throw new Error("Invalid item");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { todo, todos } = state;
  function handleAdd() {
    dispatch({ type: "ADD_TODO", payload: todo });
  }
  return (
    <div className="App">
      <input
        value={todo}
        onChange={(e) =>
          dispatch({ type: "SET_TODO", payload: e.target.value })
        }
      />
      <button onClick={handleAdd}>Add</button>
      <List todos={todos} />
    </div>
  );
}

export default App;
