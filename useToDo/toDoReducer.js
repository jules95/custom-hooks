

export const toDoReducer = ( initialState, action ) => {

    switch (action.type) {
        case '[ToDo] Add ToDo':
          return [...initialState, action.payload];      
          
        case '[ToDo] Remove ToDo':
          return initialState.filter(todo => todo.id !== action.payload);

        case '[ToDo] Toggle ToDo':
          return initialState.map( todo => {

            if (todo.id === action.payload) {
                return {
                    ...todo,
                    done: !todo.done
                }
            }

            return todo;
            
          });

        default:
            return initialState;
    }
}