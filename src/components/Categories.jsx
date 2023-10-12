import React from 'react'
import CategoreyComponent from './CategoreyComponent'
import './Categories.css'

const Categories = ({SetSpecific_Category}) => {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%'}}>
        <div className='Category_Horizontal'>
            <CategoreyComponent SetSpecific_Category={SetSpecific_Category} text="All" color="#974EC3"/>
            <CategoreyComponent SetSpecific_Category={SetSpecific_Category} text="Work" color="#279EFF"/>
            <CategoreyComponent SetSpecific_Category={SetSpecific_Category} text="Fun" color="#F39F5A"/>
            <CategoreyComponent SetSpecific_Category={SetSpecific_Category} text="Study" color="#176B87"/>
            <CategoreyComponent SetSpecific_Category={SetSpecific_Category} text="Rest" color="#AE445A"/>
            <CategoreyComponent SetSpecific_Category={SetSpecific_Category} text="Health" color="#47A992"/>
        </div>
    </div>
  )
}

export default Categories