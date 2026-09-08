// - [ ] **9/7(월) · 드릴 2-1 — 할 일 목록**  ·  JS ___분 / React ___분
//     - 엔터/버튼으로 추가
//     - 빈 값이면 추가 안 됨
//     - 개별 삭제
//     - 완료 토글 (취소선)
//     - 남은 개수 표시
//     - *JS:* createElement + appendChild. 삭제는 remove(). 이벤트 위임 써보기
//     - *React:* 배열 state. map으로 렌더, filter로 삭제, map으로 토글
//     - *비교:* DOM 조작이 통째로 사라지고 배열 다루기만 남음. 이벤트 위임도 필요 없어짐

function TodoList(){
    const addTodo = document.querySelector('.todo__button');
    const list = document.querySelector('.todo__list');
    const input = document.querySelector('.todo__input');
    const total = document.querySelector('.todo__total');

    addTodo.addEventListener('click', function(){
        const value = input.value.trim();
        if (value === '') return null;
        const li = document.createElement('li');

        const label = document.createElement('span');
        label.classList.add('todo__text');
        label.textContent = value;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', function(){
            li.classList.toggle('done', checkbox.checked);
            updateContent();
        })

        const delButton = document.createElement('button');
        delButton.textContent = '삭제';
        delButton.classList.add('remove');
        delButton.addEventListener('click', function(){
            li.remove();
            updateContent();
        })
        

        li.prepend(checkbox);
        list.appendChild(li);
        li.appendChild(label);
        li.appendChild(delButton);

        input.value = '';
    })
    function updateContent(){
        total.textContent = list.querySelectorAll('li:not(.done)').length;
    }
}
TodoList();