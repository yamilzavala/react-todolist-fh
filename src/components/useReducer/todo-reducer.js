const acionType = {
    add: 'add',
    remove: 'remove',
    update: 'update'
}

export const todoReducer = (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case acionType.add:            
            return [...state, payload];
        case acionType.remove:      
           return state.filter(todo => todo.id !== payload) 
        case acionType.update:    
            return state.map(todo => todo.id === payload.id ? {...todo, done: !todo.done} : todo)          
        default:
            return state;
    }
}