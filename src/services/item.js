import {getFirestore} from '../firebase'

const getItems = () => {
    const db = getFirestore();
    const itemsCollection = db.collection('Items');
    //console.log ("No Filter.");
    return itemsCollection.get();
}

export const getItemsFilter = (categoriaProducto) =>{
    const db = getFirestore();
    const itemsCollection = db.collection('Items');
    //console.log("Filtrado.")
    return itemsCollection
                    .where('categoria', '==', categoriaProducto)
                    .get();
}

export const getItem = (itemId) => {
    const db = getFirestore();
    const itemsCollection = db.collection('Items'); //Items con MAYUSCULA porque ASI ESTA EN FIREBASE
    const item = itemsCollection.doc(itemId);
    return item.get();
}

export default getItems;
