const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');


inputs.forEach(input => {
    const idx = input.dataset['index'];
    input.addEventListener('keyup', () => {
        labels[idx].style.color = '#cabe89';
    });
    input.addEventListener('blur', () => {
        labels[idx].style.color = '#353e4b';
    })
});

const btn = document.querySelector('button');
    btn.addEventListener('click', (e) => {
        const checkConfirm = confirm('작성한 내용으로 문의하시겠습니까?');
        if (checkConfirm === false) {
            e.preventDefault();
        }
    });

const nan = document.querySelector('#nan');
    const tels = document.querySelectorAll('[name="user_tel"]');
    tels.forEach((tel) => {
        tel.addEventListener('keyup', (e) => {
            e.preventDefault();
            const num = tel.value;
            if (isNaN(num)) {
                nan.textContent = '*전화번호는 숫자만 입력해주세요';
                nan.style.color = 'red';
                nan.style.marginBottom = '2vw';
                nan.style.fontSize = '1.5vw';
            } else {
                nan.textContent = '';
            } 
        });
    });


/* name 불러오기 
const txt = document.forms.txt;
// textarea color 변경
txt.addEventListener('keyup', () => {
    labels[3].style.color = '#cabe89';
});
*/
