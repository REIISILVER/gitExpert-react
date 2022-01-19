import React,{ Fragment, useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategorias }) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //permite que lo que este en el input se guarde en la lista 
        if(inputValue.trim().length > 2){
            setCategorias( (cats) => [inputValue, ...cats  ]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit } >
            
            <input 
            placeholder='Buscar'
            type= 'text'
            value={ inputValue }
            onChange={ handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
}