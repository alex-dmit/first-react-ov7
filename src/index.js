// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'
import { useState } from 'react';

// const jsxElement = <h1>Hello world!</h1>

// React component
function HelloComponent(props) {
  console.log('Render HelloComponent');
  // const message = "what's up"
  const [message, setMessage] = useState('')
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => {
        console.log(count);
        setCount(count + 1)
      }}>+</button>
      <span>Count: {count}</span>
      <br/>
      <input type="text" value={message} onChange={(event) => {
        setMessage(event.target.value)
      }}/>
      <h1>Hello, {props.name} {props.lastname}, {message ? message : "what's up"}</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelloComponent name="John" lastname="Smith" />
);

