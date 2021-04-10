import React, {useState} from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({children}) =>{

    
    const [cart, setCart] = useState([]) //Declara a cart como un estado.
    const [cantidadTotal, setcantidadTotal] = useState(0)
    //Updatea la cantidad en caso de existir el elemento en el carrito
    //Orden de eventos: 1)Sacar el indice del elemento repetido, 2) Updatear la cantidad de ese índice 3)Setear el estado
    const cambiarCantidad = (auxCart,elementoExistente, nuevaCant) => {
        const index= cart.indexOf(elementoExistente);
        console.log("Indice del elemento repetido: ", index);
        auxCart[index].quantity += nuevaCant;
        setcantidadTotal(nuevaCant + cantidadTotal);
        setCart(auxCart);
    }
    //Siempre la lógica y los cambios respectivos los hacemos en una copia de Cart, no en Cart directamente
    //ya que está asociada a un estado.
    const pushItem = (nuevoItem, nuevaCant, auxCart) => {
        auxCart.push({item: nuevoItem, quantity: nuevaCant})
        setcantidadTotal(nuevaCant + cantidadTotal);
        setCart(auxCart)
    }

    const addItem = (nuevoItem, nuevaCant) => { //Recibe item y recibe la cantidad.    
        const elementoExistente = cart.find(e=>e.item.id ===nuevoItem.id)
        const auxCart = [...cart]; //Copiamos la cart en un auxCart con un spread Operator, para poder trabajar
        (elementoExistente === undefined) ? 
            pushItem(nuevoItem, nuevaCant, auxCart)
            :
            cambiarCantidad(auxCart,elementoExistente, nuevaCant)
    }

    const removeItem = (itemId) => { //Recibe el itemId y lo borra
        const itemElegido = cart.filter(e=> e.item.id === itemId);
        console.log (itemElegido[0]);
        const auxCantidad = cantidadTotal - itemElegido[0].quantity;
        const newCart = cart.filter(e => e.item.id !== itemId)
        setCart(newCart)
        setcantidadTotal(auxCantidad)
    }

    const clear = () => { //Limpia el carrito.
        setCart([]);
        setcantidadTotal(0);
    }

    const isInCart = (id) => { //Pregunta si el item está dentro del carrito.
        const currentItem = cart.find(e=> e.item.id === id)

        return currentItem ? true : false
    }
    //Actúa como proveedor global.
    return <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, cantidadTotal}}>{children}</CartContext.Provider>
}