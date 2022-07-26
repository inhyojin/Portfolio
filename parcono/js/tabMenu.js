const lis = document.querySelectorAll('#main_product #list li');
const prds = document.querySelectorAll('#main_product .product');
let activeCont = '';

for (var i = 0; i < lis.length; i++) {
    lis[i].querySelector('.listBtn').addEventListener('click', function(e) {
        e.preventDefault();
        for (var j = 0; j < prds.length; j++) {
            lis[j].classList.remove('activeFont');
            prds[j].classList.remove('active');
        }

        this.parentNode.classList.add('activeFont');

        activeCont = this.getAttribute('href');
        document.querySelector(activeCont).classList.add('active');
    });
    
}