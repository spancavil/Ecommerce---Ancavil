//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {NavBar} from './NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Presentacion from './components/Presentacion';
import Contacto from './components/Contacto';
import GatitosFelices from './components/GatitosFelices';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <NavBar></NavBar>
            <Switch>
                <Route exact path = '/'>
                    <ItemListContainer></ItemListContainer>
                </Route>
            </Switch>
            <Switch>
                <Route path ='/categories/:categoriaProducto'>
                    <ItemListContainer></ItemListContainer>
                </Route>
            </Switch>
            
            <Switch>
                <Route path ='/detail/:productoId'>
                    <ItemDetailContainer></ItemDetailContainer>
                </Route>
            </Switch>

            <Switch>
                <Route path='/nosotros'>
                    <Presentacion></Presentacion>
                </Route>
            </Switch>

            <Switch>
                <Route path ='/contacto'>
                    <Contacto></Contacto>
                </Route>
            </Switch>

            <Switch>
                <Route path = '/gatitosfelices'>
                    <GatitosFelices></GatitosFelices>
                </Route>
            </Switch>

            <Switch>
                <Route path ='/cart'>
                    <p className="p-5">En construcción ... </p>
                </Route>
            </Switch>
            
        </BrowserRouter>
    </div>
  );
}

export default App;
