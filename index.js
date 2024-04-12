let div=document.querySelector("#box");
let inp=document.createElement("input");
div.appendChild(inp);
inp.type="range"
inp.min=0;
inp.max=10;
let ballon = document.querySelector("#ballon");



inp.oninp=addstar;
inp.value=0;
   
function addstar( ) {

    let h1=document.createElement("h1");
    
for (  let i =1;i<= this.value;i++) { 
    console.log(i);
    if (i==1) {
        h1.append("⚽️");  
    }
    if (i==2) {
        h1.append("️️🥎");  
    }
    if (i==3) {
        h1.append("🏈");  
    } 
    if (i==4) {
        h1.append("🥏");  
    }
    if (i==5) {
        h1.append("⚙️");  
    } 
    if (i==6)  {
        h1.append("️️🏓️");  
    }
    if (i==7)  {
        h1.append("️️🪀️");  
    }
    if (i==8)  {
        h1.append("️️🏉");  
    }
    if (i==9)  {
        h1.append("️🏐️");  
    }
    if (i==10)  {
        h1.append("️️🎱️");  
    }
}
    ballon.innerText=this.value;


ballon.appendChild(h1);






}

