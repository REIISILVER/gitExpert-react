import React, { Fragment } from 'react';
import { useFetchGifts } from '../hooks/useFetchGifs';
//import { getGits } from '../helpers/getGifs';
import { GiftGridItem } from './GiftGridItem';

export const GiftRead = ( { category }) => {
  
    const { data:images, loading  } = useFetchGifts( category );

  /*  //este hook te permite usar las imagenes
    const [images, setImages ] = useState([]);   
  //use effect se usa para que getGits solo se ejecute una vez
    useEffect( ()=>{
        //se puso then despues de usar el helpers getGits por que es una promesa
        getGits( category).then(imgs => setImages( imgs))
    }, [ category ] )
*/

    

   // getGits();

    return (
        <Fragment>
        <h3> { category }</h3>
        { loading && <h3 className='animate__animated  animate__bounce'> Loading </h3>}

        
        <div className='card-grid'>
            
            <ol>
                {
        //aqui capturas y usas los titulos e id de images
                images.map( img => ( 
                    <GiftGridItem
                    key = { img.id } 
                    {...img }
                    />
                    
                ))}
            </ol>

           
        </div>
                 
        </Fragment>
        
    )
}

