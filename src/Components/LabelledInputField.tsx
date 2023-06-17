import './LabelledInputField.css'
import React from 'react'
type LabelledInputFieldProps = {
    label: string
    placeholder : string
    type?: string
  }
  
  const LabelledInputField:React.FC<LabelledInputFieldProps> = ({type,placeholder,label}) =>{
      return(
          <div className='input-box' >
              <div className='text'>
              <div className='label'><h4>{label}</h4></div>
              <input className='input-text' type={type} placeholder={ placeholder } ></input>
              
              </div>
          </div>
      )
  }
  
export default LabelledInputField ;