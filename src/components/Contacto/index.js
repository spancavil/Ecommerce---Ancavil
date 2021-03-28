import React from 'react';

const Contacto = () => {
    return(
        <div className = "container">

        <div className="row row-cols-1">
            <div className="col-12 my-3">
            <a href="https://www.facebook.com/Rascadores-El-Gatito-azul-110299214466391/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook m-4" style={{fontSize:"1.75rem"}}> Facebook</i>
            </a>
            </div>

            <div className="col-12 my-3">
            <a href="https://instagram.com/elgatitoazul.rascadores?igshid=1ne9yk8fzf80f/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram m-4"  style={{fontSize:"1.75rem",color:"pink"}}> Instagram</i>
            </a>
            </div>

            <div className="col-12 my-3">
            <a href="https://wa.me/+5491158491307" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp m-4" style={{fontSize:"1.75rem",color:"green"}}> WhatsApp</i>
            </a>
            </div>
            
            <div className="col-12 my-3">
                <h5>O mandanos un e-mail a:    elgatitoazul.rascadores@hotmail.com</h5>
            </div>

        </div>
        </div>
    )
}

export default Contacto;