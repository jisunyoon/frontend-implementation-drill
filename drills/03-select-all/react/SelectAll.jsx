// - [ ] **9/8(화) · 드릴 3-1 — 전체선택 + indeterminate**  ·  JS ___분 / React ___분
//     - 전체선택 체크박스
//     - 일부만 선택 시 indeterminate 표시
//     - 개별 선택하면 전체 체크박스 자동 갱신
//     - 선택 개수 표시
//     - *React:* indeterminate는 JSX 속성으로 못 줌 → useRef로 직접 세팅해야 함

import { useState, useRef, useEffect } from 'react';

const MOCK_ITEM = [
    { id: 1, name: '사과', checked: false },
    { id: 2, name: '바나나', checked: false },
    { id: 3, name: '딸기', checked: false },
    { id: 4, name: '포도', checked: false },
]

export function SelectAll(){
    const [items, setItems] = useState(MOCK_ITEM);
    const allRef = useRef(null);

    const allChecked = items.every(item => item.checked);
    const someChecked = items.some(item => item.checked);
    const checkedCount = items.filter(item => item.checked).length;

    useEffect(() => {
        if(someChecked && !allChecked){
            allRef.current.indeterminate = true;
        }else{
            allRef.current.indeterminate = false;
        }
    })

    function handleCheck(id){
        setItems(items.map(item => item.id === id ? {...item, checked: !item.checked} : item));
    }

    function handleCheckAll(){
        setItems(items.map(item => ({...item, checked: !allChecked})))
    }

return(
    <div className="select">
        <label className="select__all">
            <input ref={allRef} checked={allChecked} type="checkbox" className="select__all-input" onChange={handleCheckAll}/>
            전체선택
        </label>

        <ul className="select__list">
            {items.map(i => (
                <li key={i.id}>
                    <label>
                        <input checked={i.checked} type="checkbox" className="select__item" onChange={() => handleCheck(i.id)} /> 
                        {i.name}
                    </label>
                </li>
            ))
            }
        </ul>

        <p className="select__count">선택<span className="select__total">{checkedCount}</span>개</p>
    </div>
)
}