import { Fragment, useState } from 'react';
import { AddCategory } from './componets/AddCategory';
import { GiftRead } from './componets/GiftRead';


const GiftExpertApp = () => {
   
    //const categorias = ['High school DxD']
    const [categorias , setCategorias] = useState(['High school DxD'])
   
    /*const handleAdd = () => {
        setCategorias(['Rule34', ...categorias  ] );
    }*/

    return (
        < Fragment> 
            <h2> Gift Expert App </h2>
            <AddCategory setCategorias = { setCategorias}/>
            <hr/>
           
            <ol>
                {
                    categorias.map( category => (
                        <GiftRead 
                            key = {category }
                            category = { category } />
                     ))  
                }
            </ol>

        </Fragment>
        
      

    )

}

export default GiftExpertApp;