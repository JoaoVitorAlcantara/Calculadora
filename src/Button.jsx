import React from 'react'
import './Button.css'


export default props => {
    return <button onClick={() => 
        props.click && props.click(props.value)
    }   
    className={props.class}>{props.value}  
    </button>
}