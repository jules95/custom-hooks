import { useEffect, useState } from "react"


export const useFecth = (url) => {

    
   const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
   }) 
    
    
    const getFecth = async () => {

        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url)
        const data = await resp.json()

        setState({
            data: data,
            isLoading: false,
            hasError: null
        })
    }
    
    useEffect(() => {
        getFecth();
    }, [url]) //cada vez que cambie el url se dispara el useEffect
    
  
  
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };

}
