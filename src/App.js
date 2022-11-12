// import logo from './logo.svg';

// Write a function that receives a name argument and returns a h1 tag with the name variable appended to the "Hello, " string.

import "./App.css";

const promptName = (name) => <h1>Hello, {name}</h1>;

function App() {
  return promptName("Sama, Aiman and Obafemi");
}

export default App;
