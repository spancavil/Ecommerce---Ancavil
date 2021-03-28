import React from 'react';

const Loading = () =>{
    return (
        <div className="spinner-border text-danger align-middle"
        role="status"
        style={{width: "5rem", height: "5rem", marginTop: "8rem"}}
        >
            <span className="visually-hidden"></span>
        </div>
    )
}

export default Loading