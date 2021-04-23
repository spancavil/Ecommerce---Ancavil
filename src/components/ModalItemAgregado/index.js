import React, { useState,useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

//Modal autocloseable

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const ModalItemAgregado = () =>{

    const [open, setOpen] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setOpen(false);
        }, 1500)
    }, []);

    return (
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        >
        <DialogTitle id="alert-dialog-slide-title">Producto agregado al carrito!</DialogTitle>
        </Dialog>
    )
}

export default ModalItemAgregado
