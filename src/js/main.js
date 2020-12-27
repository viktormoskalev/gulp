body=document.querySelector("body");
html=document.querySelector("html");
header=document.querySelector("header");

window.onload= function(){
  pagescroll();
}

// мобильное меню
nav = document.querySelector(".nav");
document.querySelector(".btn-menu").onclick = toglenav;
document.querySelector(".nav-menu").onclick = toglenav;

document.querySelector(".nav-background").onclick = toglenav;
let scrolid = 0 ;
function toglenav() {
  nav.classList.toggle("nav-open");
  togglescroll();
}
// мобильное меню


// отключить прокрутку

function togglescroll(){
  if (scrolid==0){
    body.style.paddingRight=window.innerWidth-html.offsetWidth +"px";
    body.style.overflow="hidden";
    scrolid=1;
  } else{
    body.style.paddingRight=0;
    body.style.overflow="visible"
    scrolid=0;
  }
}

// отключить прокрутку


//плавный скрол к якорю 

let anchors = document.querySelectorAll('a[href*="#"]')
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', function (e) {
    e.preventDefault()
    let blockID = this.getAttribute('href');
    if (blockID == "#") {
      document.querySelector("body").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
}
//плавный скрол к якорю  





 // Появление меню при прокрутке
function pagescroll(){
  let pscroll = 0;
  let timeout;
  window.addEventListener('scroll', function() {
 clearTimeout(timeout);
   function debounce(){ 
       if (pscroll<pageYOffset||pscroll<header.offsetHeight){
         body.style.paddingTop=0;
         header.classList.remove("appear");
       }else {
         if(pageYOffset>header.offsetHeight){
           header.classList.add("appear");
           body.style.paddingTop=header.offsetHeight+"px";
         }
       }  
   pscroll=pageYOffset;
   }
   timeout= setTimeout(debounce,100);
 });
}



 //Появление меню при прокрутке






//отправка формы 





let form = document.querySelectorAll('.order-form');

const modal = document.getElementById("modal");

function ajaxform(evt) {
  gtag('event', 'submit', {
    'event_category': 'Form'
  });
  evt.preventDefault();
  let formstatus = this.querySelector('.formstatus');
  formstatus.innerHTML = '<class="load-form">Соедиенеие ...';

  let formData = {
    desc: this.querySelector('input[name="description"]').value,
    name: this.querySelector('input[name="name"]').value,

    phone: this.querySelector('input[name="phone"]').value

  };
  console.log(formData);
  let request = new XMLHttpRequest();

  request.addEventListener('load', function () {

    formstatus.innerHTML = 'Ваша заявка успешно отправлена, ожидайте звонка';

  });

  request.open('POST', '/mail.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&phone=' + encodeURIComponent(formData.phone) + '&desc=' + encodeURIComponent(formData.desc));


};



for (i = 0; i < form.length; i++) {
  form[i].addEventListener('submit', ajaxform);
}



//отправка формы




//popup2

function popup2(desc) {
  console.log(document.querySelector(".input-description"));
  document.querySelector(".input-description").value = "Пакет все включено Программа " + desc;
  document.getElementById('overlay2').style.display = 'block';
}


//popup2