// Header toggle 

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(c){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!','Freelancher!','Student!','Developer!', 'Youtuber!', 'Programmer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDealy: 200,
    loop: true,
})

// Active Link State On Scroll

// Get All Links 
let navlinks = document.querySelectorAll(' nav ul li a')
console.log(navlinks)