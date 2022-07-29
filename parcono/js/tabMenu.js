


const lis = document.querySelectorAll('#main_product #list li');
const prds = document.querySelectorAll('#main_product .product');

lis.forEach((li,index)=> {
    li.addEventListener('click', (e) => {
        e.preventDefault();
        prds.forEach(prd => {
            prd.classList.remove('active');
        });
        lis.forEach(li => {
            li.classList.remove('activeFont');
        });
        prds[index].classList.add('active');
        lis[index].classList.add('activeFont');
    });
});
