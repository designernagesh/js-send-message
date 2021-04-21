let    btn=document.querySelector("button"),
       input = document.querySelector("input"),
       msgDelivered =document.getElementById("msg-delivered"),
       p = document.querySelector("#showMsg p"),
       error = document.querySelector('.error');

p.style.display = 'none';
btn.style.textTransform = 'uppercase';


sendMessage = () => {
       if(input.value){
              p.style.display = 'block'
              msgDelivered.innerHTML = input.value
       }
       else{
              error.innerHTML = 'Please, write some Message!';
              error.classList.add('text-danger', 'mb-4');
       }
       input.value = ''

       setTimeout(() => document.getElementById('showMsg').remove(), 3000);
}    

btn.addEventListener('click', sendMessage);