//import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/navbar";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
      <h2>Desafío clase 7</h2>
    </div>
  );
}

export default App;
