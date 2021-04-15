import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp ({
        apiKey: "AIzaSyCe0lgtFyxGa7w9Mv_r3TThlr4NchAN1s4",
        authDomain: "e-commerce-ancavil.firebaseapp.com",
        projectId: "e-commerce-ancavil",
        storageBucket: "e-commerce-ancavil.appspot.com",
        messagingSenderId: "1080883805034",
        appId: "1:1080883805034:web:2e1a03df6f69c4e6030313",
        measurementId: "G-8916XTN6XM"
})

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app)
}