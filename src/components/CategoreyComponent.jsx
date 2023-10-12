import React from 'react'
import './CategoreyComponent.css'

const CategoreyComponent = ({SetSpecific_Category, text, color}) => {
  function Func_SetSpecific_Category(){
      SetSpecific_Category(text);
  }
  return (
    <div className='Category_tag' style={{backgroundColor:color}} onClick={Func_SetSpecific_Category}>{text}</div>
  )
}

export default CategoreyComponent