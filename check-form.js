const myForm = document.querySelector(".form");
const send = document.querySelector(".button_send");
const clearField = document.querySelector(".btn_clear");
const popupTrue =document.querySelector(".popup-order-true");
const popupFalse =document.querySelector(".popup-order-false");



clearField.addEventListener("click", event =>{
    event.preventDefault();
    const data = {
            name : myForm.elements.name.value= '' ,
            telefon : myForm.elements.telefon.value='' ,
            comment : myForm.elements.comment.value='' ,
            to :'test@mail.ru',
            street : myForm.elements.street.value='',
            house : myForm.elements.house.value='',
            corpus : myForm.elements.corpus.value='',
            flat : myForm.elements.flat.value='',
            floor : myForm.elements.floor.value=''

        };
});

send.addEventListener("click", event =>{
    event.preventDefault();

    if(!validateForm(myForm)){
        const data = {
            name : myForm.elements.name.value ,
            telefon : myForm.elements.telefon.value ,
            comment : myForm.elements.comment.value ,
            to :'test@mail.ru'
        };

        xhr = new XMLHttpRequest();
        xhr.responseType ='json';
        xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.send(JSON.stringify(data));

        xhr.addEventListener("load", ()=>{
            if(xhr.response.statusText<=200){
                var timerId = setInterval(function goodMessage(){
                popupTrue.classList.remove("non-open");  
            }, 500);
            setTimeout(function() {
            clearInterval(timerId);
                popupTrue.classList.add("non-open");
            }, 3000);
            }
                else{
                var timerId = setInterval(function badMessage(){
                popupFalse.classList.remove("non-open");  
            }, 500);
            setTimeout(function() {
            clearInterval(timerId);
                popupFalse.classList.add("non-open");
            }, 3000);
            }
        });
    }
});

function validateForm(form){
    let valid =true;

    if(!validateField(form.elements.name)){
        valid = false;
    }
    if(!validateField(form.elements.telefon)){
        valid = false;
    }
    if(!validateField(form.elements.comment)){
        valid = false;
    }
}

function validateField(field){
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}

















