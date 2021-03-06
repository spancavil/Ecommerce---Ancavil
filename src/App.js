//import logo from './logo.svg';
import './App.css';
//import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {NavBar} from './NavBar';
import ItemDetailContainerFB from './components/ItemDetailContainerFB'
import ItemListContainerFB from './components/ItemListContainerFB';
//import ItemDetailContainer from './components/ItemDetailContainer';
import Presentacion from './components/Presentacion';
import Contacto from './components/Contacto';
import GatitosFelices from './components/GatitosFelices';
import {CartProvider} from './context/cartContext'; //Antes del browser usamos el Provider, que actúa como panel general.
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
        <BrowserRouter>
            <NavBar></NavBar>
            <Switch>
                <Route exact path = '/'>
                    <ItemListContainerFB></ItemListContainerFB>
                </Route>
            </Switch>
            <Switch>
                <Route path ='/categories/:categoriaProducto'>
                    <ItemListContainerFB></ItemListContainerFB>
                </Route>
            </Switch>
            
            <Switch>
                <Route path ='/detail/:itemId'>
                    <ItemDetailContainerFB></ItemDetailContainerFB>
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
                    <Cart></Cart>
                </Route>
            </Switch>
            
            </BrowserRouter>
    </CartProvider>
  );
}

export default App;
