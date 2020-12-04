
nav = document.querySelector("header");

document.querySelector(".nav-toggle").onclick=function(){
nav.classList.toggle("nav-open");
}

document.querySelector(".nav").onclick=function(){
nav.classList.toggle("nav-open");
}

document.querySelector(".nav-background").onclick=function(){
nav.classList.toggle("nav-open");
}




//отправка формы 



var form = document.querySelectorAll('.order-form');

const modal = document.getElementById("modal");
function ajaxform(evt){
  gtag('event','submit', {'event_category' : 'Form'});
  evt.preventDefault();
  var formstatus = this.querySelector('.formstatus');
  formstatus.innerHTML = '<class="load-form">Соедиенеие ...';

  var formData = {
    desc:this.querySelector('input[name="description"]').value,
    name:this.querySelector('input[name="name"]').value,
     
    phone: this.querySelector('input[name="phone"]').value
    
  };
  console.log(formData);
  var request = new XMLHttpRequest();

  request.addEventListener('load', function() {
    
    formstatus.innerHTML = 'Ваша заявка успешно отправлена, ожидайте звонка';
    
  });

  request.open('POST', '/mail.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&phone=' + encodeURIComponent(formData.phone) + '&desc=' + encodeURIComponent(formData.desc));


};



for (i=0 ;i<form.length; i++){
  form[i].addEventListener('submit', ajaxform);
}



//отправка формы




//popup2

function popup2(desc){
  console.log(document.querySelector(".input-description"));
  document.querySelector(".input-description").value="Пакет все включено Программа "+ desc;
  document.getElementById('overlay2').style.display='block';
}


//popup2


