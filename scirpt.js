let buttonIncerase=document.getElementById('increase');
let buttonDecrease=document.getElementById('decrease');
let buttonReset=document.getElementById('reset');
let counterShow=document.getElementById('counter');

let count=0;

buttonIncerase.addEventListener('click',()=>{
    count+=1;
    counterShow.innerHTML=count;
})

buttonDecrease.addEventListener('click',()=>{
    if(count==0){
        
    }else{
        count-=1;
        counterShow.innerHTML=count;
    }
})

buttonReset.addEventListener('click',()=>{
    if(confirm('Resetlemek istiyor musunuz?')==true){
        count=0;
    counterShow.innerHTML=count;
    }
    else{
        return false;
    }
})
