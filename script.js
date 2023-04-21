let search = document.querySelector('.search_box');

document.querySelector('#search_icon').onclick = () =>{
    search.classList.toggle('active');
    user.classList.remove('active');
    navbar.classList.remove('active');

}

let user = document.querySelector('.user');

document.querySelector('#user_icon').onclick = () =>{
     user.classList.toggle('active');
     search.classList.remove('active');
     navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu_icon').onclick = () =>{
     navbar.classList.toggle('active');
     search.classList.remove('active');
     user.classList.remove('active');
     
}

