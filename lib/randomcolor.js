(function(){
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
      };
    debugger
    const $ =function $(selector){
 const elements=document.querySelectorAll(selector)
    
 obj={}
 obj.randomColor=()=>{
 for (const element of elements){
     element.style.background='rgb(' + randomInteger(0, 255) + ',' + randomInteger(0, 255) + ',' + randomInteger(0, 255) +' )';
 }
 return obj
}
obj.randomColorToggle=()=>{
  for (const element of elements){
    element.addEventListener('click', ()=>{
      if(!element.style.background||element.style.background==="none"){
      element.style.background='rgb(' + randomInteger(0, 255) + ',' + randomInteger(0, 255) + ',' + randomInteger(0, 255) +' )';
        }
        else{
          element.style.background="none"

        }
      })
        }
  return obj
 }
obj.mouseEnterRandomColor=()=>{
    let intervalID;
    for (const element of elements){
        element.addEventListener('mouseenter', ()=>{
            intervalID=setInterval(function() {
            element.style.backgroundColor = 'rgb(' + randomInteger(0, 255) + ',' + randomInteger(0, 255) + ',' + randomInteger(0, 255) +' )';
          }, 500)
                                                  
          })
          element.addEventListener('mouseleave', ()=>{
            clearInterval(intervalID);
            element.style.backgroundColor = 'rgb(255,255,255)'
              } )
    }
    return obj
   }
 return obj
 
}
window.$=$
})()
