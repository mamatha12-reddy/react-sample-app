
import React, { useReducer, useState } from 'react';
const initialState = {
  name: '',
  email: '',
  message: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'updateField':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function UseReducerHook() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("the form submission",state)
  const handleChange = (e) => {
    dispatch({
      type: 'updateField',
      field: e.target.name,
      value: e.target.value,
    });
   // console.log("updarte===",e)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    console.log(state);
    dispatch({ type: 'reset' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={state.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

/*function UseReducerHook() {
  const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'toggle':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'remove':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error();
  }
}

  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'add', text });
          setText('');
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {state.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => dispatch({ type: 'toggle', id: todo.id })}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'remove', id: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}*/



/*function UseReducerHook(){
  console.log("useReducerHook")

  const intialState={count:0}

  const reducer=(state,action)=>{
    switch(action.type)
    {
      case 'increment':
        return {count:state.count+1}
      
      case 'decrement':
        return {count:state.count-1}

      default:
        throw new Error()


    }

  }

  const [state,dispatch]=useReducer(reducer,intialState)
  return(
    <div>
      <h1>count:{state.count}</h1>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
    </div>
  )
}*/
export default UseReducerHook