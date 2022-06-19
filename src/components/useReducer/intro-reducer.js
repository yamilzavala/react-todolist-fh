//reducer -- fn(state: {},action: {type: string, payload: {}}): state
//actions -- {type: string, payload: {}}
//state   -- {}

const initialState =[ {
    id: 1,
    done: false,
    todo: 'buy bread'
}]

const reducer = (state = initialState, action) => {
    switch(action) {
        case 'add':
            return [...state, action.payload];
        default:
            return state;
    }    
}

const actionAdd = {
    type: 'add',
    payload: {
        id: 2,
        done: false,
        todo: 'buy milk'
    }
}

let todos = reducer()

todos = reducer(todos,actionAdd)
console.log(todos)