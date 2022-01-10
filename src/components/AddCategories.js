import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategories = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')
    
    // Último valor actualizado que la persona escribió
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);    
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log('handleSubmit llamado', inputValue)

        if(inputValue.trim().length > 2){
            
            setCategories(((cats)=>[inputValue, ...cats ]));
            setInputValue('')           
        }
    }

    return (
        <form onSubmit = {handleSubmit}>
           
            <input 
                type="text"
                value={inputValue}
                onChange= {handleInputChange}
            />
        </form>
    )
}
AddCategories.propsTypes = {
    setCategories: PropTypes.func.isRequired
}
