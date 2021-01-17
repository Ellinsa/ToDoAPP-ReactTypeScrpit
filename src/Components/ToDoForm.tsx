import React, {useRef} from 'react';

interface ToDoFormProps{
    onAdd(title: string): void;
}

export const ToDoForm: React.FC<ToDoFormProps> = (props) =>{
    const ref = useRef<HTMLInputElement>(null);

    const keyPressedHandler = (event: React.KeyboardEvent) =>{
        if(event.key === 'Enter'){
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
        }  
    }

    return (
    <div className="input-field mt2">
       <input ref={ref} onKeyPress={keyPressedHandler} type="text" id="title" placeholder="Type your task here"/>
       <label htmlFor="title" className="active">What are you going to do?</label> 
    </div>
    )
}