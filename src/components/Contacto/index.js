import React from 'react';

const Contacto = () => {
    return(
        <div className="container-fluid">
            <div className="row justify-content-center">
            <a href="https://www.facebook.com/Rascadores-El-Gatito-azul-110299214466391/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook m-4" style={{fontSize:"1.5rem"}}> Facebook</i>
            </a>
            <a href="https://instagram.com/elgatitoazul.rascadores?igshid=1ne9yk8fzf80f/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram m-4"  style={{fontSize:"1.5rem",color:"pink"}}> Instagram</i>
            </a>
            <a href="https://wa.me/+5491158491307" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp m-4" style={{fontSize:"1.5rem",color:"green"}}> WhatsApp</i>
            </a>
            </div>
            <div className="row justify-content-center">
                <h6 style={{fontStyle: "italic", fontSize:"1.2rem", marginTop:"40px"}}>O mandanos un e-mail a:    elgatitoazul.rascadores@hotmail.com</h6>
            </div>
        </div>
    )
}

export default Contacto;