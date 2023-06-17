import './InputField.css'
import React from 'react'

type InputFieldProps = {
  label:string 
  placeholder : string
  type?: string
}

const InputField:React.FC<InputFieldProps> = ({type,placeholder,label}) =>{
    return(
        <div className='input-box' id='asd'>
            <div className='text'>
            <div className='label'><h4>{label}</h4></div>
            <input className='input-text' type={type} placeholder={ placeholder } ></input>
            <hr />
            </div>
        </div>
    )
}

export default InputField;