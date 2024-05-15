//Oradaki elemanları id olarak çağrırız 

let buttonIncerase=document.getElementById('increase');

let buttonDecrease=document.getElementById('decrease');

let buttonReset=document.getElementById('reset');

let counterShow=document.getElementById('counter');


//ordaki sayı çağrırız

let count=0;

//addEventListener = tıklayınca ne olacağına söyleriz

//Artırma işlemini bu fonksiyonu ile yapıyoruz

buttonIncerase.addEventListener('click',()=>{
    count+=1;
    counterShow.innerHTML=count;
})

//Azaltma işlemini bu fonksiyonu ile yapıyoruz

buttonDecrease.addEventListener('click',()=>{
    if(count==0){
    
    }
    else{
        count-=1;
    counterShow.innerHTML=count;

    }
    
    )

//Resetleme işlemini bu fonksiyonu ile yapıyoruz

buttonReset.addEventListener('click',()=>{
    if(confirm('Resetlemek istiyor musunuz?')==true){
        count=0;
    counterShow.innerHTML=count;
    }
    else{
        return false;
    }
})
