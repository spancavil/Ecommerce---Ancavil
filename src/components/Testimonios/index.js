import React from 'react'

const Testimonios = () => {
    return (
        <div className="container">
            <div className="card-deck mx-auto">

                <div className="card border-secondary">
                    <img className="card-img-top" src="/img/Testimonios/Donatella.jpeg" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Donatella</h5>
                    <h6 className="card-text">Contentísima Dona con su individual!</h6>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Marzo de 2021</small>
                </div>
                </div>

            <div className="card border-secondary">
                <img className="card-img-top" src="/img/Testimonios/Michi.jpeg" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Michi</h5>
                    <h6 className="card-text">También los bebés se divierten :)</h6>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Marzo de 2021</small>
                </div>
            </div>

        <div className="card border-secondary">
            <img className="card-img-top" src="/img/Testimonios/Selma.jpeg" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Selma</h5>
                <h6 className="card-text">Encontró su vocación de poledancer</h6>
            </div>
            <div className="card-footer">
                    <small className="text-muted">Marzo de 2021</small>
            </div>
        </div>
    </div>
        
    </div>
    )
}

export default Testimonios
