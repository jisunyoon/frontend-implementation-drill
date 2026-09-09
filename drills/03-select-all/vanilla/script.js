// - [ ] **9/8(화) · 드릴 3-1 — 전체선택 + indeterminate**  ·  JS ___분 / React ___분
//     - 전체선택 체크박스
//     - 일부만 선택 시 indeterminate 표시
//     - 개별 선택하면 전체 체크박스 자동 갱신
//     - 선택 개수 표시
//     - *JS:* checked / indeterminate 프로퍼티를 직접 세팅
//     - *React:* indeterminate는 JSX 속성으로 못 줌 → useRef로 직접 세팅해야 함
//     - *비교:* React가 전부 대신해주진 않는다는 예외를 만나는 지점. 면접에서 자주 나옴
function SelectAll(){
    const selectAllBtn = document.querySelector('.select__all-input');
    const selectItem = document.querySelectorAll('.select__item');
    const selectTotal = document.querySelector('.select__total');

    selectAllBtn.addEventListener('change', function(){
        selectItem.forEach(item => {
            item.checked = selectAllBtn.checked;
        })
        selectTotal.textContent = [...selectItem].filter(item => item.checked).length;
    })

    selectItem.forEach(item => {        
        item.addEventListener('change', function(){
            const checkedItem = [...selectItem].filter(i => i.checked).length;
            selectTotal.textContent = checkedItem;
            if(checkedItem === selectItem.length){
                selectAllBtn.checked = true;
            }else{
                selectAllBtn.checked = false;
            }
            if(checkedItem > 0 && checkedItem < selectItem.length){
                selectAllBtn.indeterminate = true;
            }else{
                selectAllBtn.indeterminate = false;
            }
        })
    })
}
SelectAll();
