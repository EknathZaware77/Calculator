let string="";
let button=document.querySelectorAll('.button');
Array.from(button).forEach((button)=>{
button.addEventListener('click',(e)=>{

   try{
    if(e.target.innerHTML=== "C"){
     string="0"
     document.querySelector('input').value=string;
    }
     else  if(e.target.innerHTML=== "x"){
     string=string.slice(0,string.length-1) ;
    // console.log("in the string "+string)  
     document.querySelector('input').value=string;
      }


    else if(e.target.innerHTML=== "="){
   string=eval(string);
   document.querySelector('input').value=string;
    }
    else{
//console.log(e.target)
string=string+e.target.innerHTML;
document.querySelector('input').value=string;
    }
}
catch(error){
    string="invalid input ";
    document.querySelector('input').value=string;
}



})


})