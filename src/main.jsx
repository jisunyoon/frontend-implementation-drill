import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// 확인하고 싶은 드릴을 여기서 바꿔 끼우세요.
import { SelectAll } from '../drills/03-select-all/react/SelectAll.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SelectAll />
    </StrictMode>
);
