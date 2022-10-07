import { useEffect, useReducer } from 'react'
import { toDoReducer } from './toDoReducer'

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar piedra alma',
        done: false,
    },
   
]

const init = () => { // con esto se conserva los ToDos cuando se refresca la pag
    return JSON.parse(localStorage.getItem('To Dos')) || [];
}

export const useToDo = () => {
  

    const [toDos, dispatch] = useReducer(toDoReducer, initialState, init)

    useEffect(() => {
        
        localStorage.setItem('To Dos', JSON.stringify(toDos)); // guardo los ToDos en local storage

    }, [toDos])
  
    const handleNewToDo = (todoxxx) => {
            const action = {
                type: '[ToDo] Add ToDo',
                payload: todoxxx,
            }

            dispatch(action); 
    }

    const handleDeleteToDo = (id) => {
            const action = {
                type: '[ToDo] Remove ToDo',
                payload: id,
            }

            dispatch(action);
    }

    const handleToggleToDo = (id) => {
            const action = {
                type: '[ToDo] Toggle ToDo',
                payload: id,
            }

            dispatch(action);
    }

    const toDosCount = toDos.length;

    const pendingToDosCount = toDos.filter(todo => !todo.done).length
        
    return {
        handleNewToDo,
        handleDeleteToDo,
        handleToggleToDo,
        toDosCount,
        pendingToDosCount,
        toDos
    }
}
