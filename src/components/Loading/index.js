import React from 'react';

const Loading = () =>{
    return (
        <div className="d-flex justify-content-center">
                <div className="spinner-border text-danger"
                style ={{width:"8rem", height:"8rem", marginTop:"8rem"}}
                role="status"
                >
                    <span className="visually-hidden"></span>
                </div>
        </div>
    )
}

export default Loading