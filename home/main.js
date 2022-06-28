alert("Seja Bem Vindo")
var ul = document.querySelector('nav ul');
var menubt = document.querySelector('.menu-bt i');

function menuShow(){
    if (ul.classList.contains('open')){
       ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}