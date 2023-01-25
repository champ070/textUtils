import React from 'react'

function Alert(props) {

    const resetAlert = () =>{
        setTimeout(() => {
          props.showAlert();
          
        }, 2000);
    } 
    return (
        props.alert && <div><div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">            
        <strong>{props.alert.type}</strong> : <strong>{props.alert.msg}</strong>        
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={resetAlert}></button>
        </div></div>

    )
}

export default Alert