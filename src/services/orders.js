import {getFirestore} from '../firebase'
import firebase from 'firebase/app';

const getOrders = () => {
    const db = getFirestore();
    return db.collection('orders');
}

export const getFechaFirebase = () => {
    return firebase.firestore.Timestamp.fromDate(new Date())
}

export default getOrders;