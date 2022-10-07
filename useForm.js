import { useState } from "react";

export const useForm = ( initialform = {} ) => {

    const [formState, setFormState] = useState( initialform );
    
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetChange = () => {
       setFormState(initialform) 
    }

    return {
        formState,
        onInputChange,
        onResetChange
    }


}
