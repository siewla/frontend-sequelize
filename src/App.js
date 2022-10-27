import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Register />
      <Login />
    </div>
  );
}

export default App;
