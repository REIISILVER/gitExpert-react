//Esto es un custom hooks
import { cleanup } from "@testing-library/react";
import { useEffect, useState } from "react"
import { getGits } from "../helpers/getGifs";


export const useFetchGifts = ( category ) =>{

   const [state, setstate] = useState({
        data: [],
        loading: true

   });

   useEffect(() =>{
        getGits( category  ).then ( imgs =>{
            setstate({
                data: imgs,
                loading:false
            });
        })    
   }, [category])


   return state;  // el state es: {data[], loading: true}


} 