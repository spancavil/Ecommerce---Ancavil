import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import {getFirestore} from '../../firebase';
import firebase from 'firebase/app';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));

const ModalForm = ({open, handleClose, cart, total}) => {
    
    const [loading, setLoading] = useState(false)
    const classes = useStyles();

    const emailJS = (ordenMailJS) => {
        emailjs.send('service_230byqi', 'template_id40f8f', ordenMailJS, 'user_FbqXQoN5uTXwCJvFBd3qm')
                .then((result) => {
                    console.log("Email enviado: ", result.text);
                }, (error) => {
                    console.log("Error en el envío de emailJS: ", error.text);
                }).finally(()=>{
                    setLoading(false);
                    handleClose();
                })
        }

    const generarOrden = () => {

        setLoading(true); //Generamos pantalla de carga

        //Captura de datos
        let comprador = document.querySelector('#nombreApellido').value
        let telefono = document.querySelector('#phone').value
        let email = document.querySelector('#emailAddress').value

        //Setteo de paramétros que serán enviados a emailjs y Firebase respectivamente
        let newOrderFireBase = {}; //Firebase
        let ordenMailJS = {}; //emailjs

        newOrderFireBase.buyer = {name: comprador, phone: telefono};
        newOrderFireBase.items = cart.map(cartItem => {
                            const id = cartItem.item.id;
                            const title = cartItem.item.description;
                            const price = cartItem.item.precio * cartItem.quantity;
                            return {id, title, price}})
        newOrderFireBase.total = total;
        newOrderFireBase.fecha = firebase.firestore.Timestamp.fromDate(new Date())

        ordenMailJS.message = `Comprador: ${comprador}, Teléfono: ${telefono}, email: ${email}, Pedido: 
                                ${cart.map(cartItem=> {
                                    const title = cartItem.item.description;
                                    const price = cartItem.item.precio;
                                    const quantity = cartItem.quantity;
                                    return (`Descripcion: ${title} Precio: ${price} Cantidad: ${quantity}`)
                                })},
                                Total: ${total}`;

        //Observamos que se hayan generado correctamente los objetos a enviar
        console.log(newOrderFireBase);
        console.log (JSON.stringify(ordenMailJS));

        //Conectamos con Firebase y traemos la collection de orders.
        const db = getFirestore();
        const orders = db.collection('orders');

        orders.add(newOrderFireBase).then(({id})=>{
            console.log("Se agrego el item con id:", id, " a la base de datos."); // SUCCESS
        }).catch (err => {
            console.log("Hubo un error: ", err); //ERROR
        }).finally(()=>{
            emailJS(ordenMailJS);
        })
        
    }

    const loader = () => {
        return(
        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <   CircularProgress color="inherit" />
        </Backdrop>)
    }

    const showForm = () => {
        return(
        <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Contacto</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Ingresá tus datos, nos contactaremos con vos a la brevedad:
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="nombreApellido"
                label="Nombre y apellido"
                type="string"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Teléfono"
                type="number"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="emailAddress"
                label="Email"
                type="email"
                fullWidth
            /> 
            <TextField
                disabled
                margin = "dense"
                id="filled-disabled"
                label="Su pedido"
                defaultValue={cart.map(elemento => elemento.item.description + ": $" + elemento.item.precio + ". ")}
                fullWidth
                size="small"
                variant="outlined"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancelar
            </Button>
            <Button onClick={generarOrden} color="primary">
                Enviar Pedido
            </Button>
            </DialogActions>
        </Dialog>
        </div>

        )
    }

    return (
        <>
            {loading ? loader() : showForm()}
        </>
      )
}

export default ModalForm
