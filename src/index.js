import React from 'react';
import ReactDOM from 'react-dom/client';
import HookApp from './HookApp';
import {CounterApp} from './components/useState/CounterApp';
import {SimpleForm} from './components/useEffect/SimpleForm';
import {FormsWithCustomHook} from './components/useEffect/FormWithCustomHook';
import {MultipleCustomHook} from './components/examples/MultipleCustomHooks'
import {FocusScreen} from './components/useRef/FocusScreen'
import {Memorize} from './components/memos/Memorize'
import {TodoReducer} from './components/useReducer/TodoReducer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoReducer />
);

