import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// 확인하고 싶은 드릴을 여기서 바꿔 끼우세요.
import { TodoListReact } from '../drills/02-todo-list/react/TodoListReact.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TodoListReact />
    </StrictMode>
);
