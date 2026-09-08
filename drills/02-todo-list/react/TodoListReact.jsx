import { useState } from 'react';

export function TodoListReact(){
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    function addTodo(){
        if(text.trim() === '') return;
        setTodos([
            ...todos,
            {
                id:Date.now(),
                text: text.trim(),
                done: false,
            }
        ])
        setText('');
    }

    function removeList(id){
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function toggleChecked(id){
        setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo))
    }
    return(
        <div className="todo">
            <div className="flex gap-2 align-center justify-center">
                <input className="todo__input" value={text} onChange={(e) => setText(e.target.value)}/>
                <button className="todo__button" onClick={addTodo}>추가</button>
            </div>    

            <ul >
                {todos.map(todo => (
                    <li key={todo.id} className={todo.done ? 'done' : ''}>
                        <input type="checkbox" checked={todo.done} onChange={() => toggleChecked(todo.id)} />
                        <span className="todo__text">{todo.text}</span>
                        <button className="remove" onClick={() => removeList(todo.id)}>삭제</button>
                    </li>
                ))}
            </ul>
            <p>{todos.filter(todo => !todo.done).length}</p>
        </div>
    )
}
