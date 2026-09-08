// - [ ] **9/3(목) · 드릴 1-1 — 글자수 카운터**  ·  JS ___분 / React ___분
//     - textarea 100자 제한
//     - 남은 글자수 실시간 표시
//     - 90자 넘으면 주황, 100자면 빨강 + 입력 차단
//     - *JS:* input 이벤트 → textContent 갱신 → classList 토글
//     - *React:* value/onChange 한 쌍. 남은 글자수는 state 아님 (파생값)
//     - *비교:* DOM 선택과 수동 갱신이 사라짐. 화면이 상태의 결과가 됨

function countText(){
    const count = document.querySelector('.count');
    const remainText = document.querySelector('.remain__text');
    count.addEventListener('input', function(){
        
        if(count.value.length > 100){
            count.value = count.value.slice(0,100);
        }
        remainText.textContent = count.value.length;
        
        remainText.classList.remove('remain__text--danger', 'remain__text--warning');
        if(count.value.length >= 100){
            remainText.classList.add('remain__text--danger')
        }else if(count.value.length >= 90){
            remainText.classList.add('remain__text--warning')
        }
    })
}
countText();
