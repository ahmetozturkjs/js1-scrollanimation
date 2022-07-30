
function divolustur(){
    
    let bordersinir=document.getElementById("border");
    let row=document.querySelector(".row");
    let i;
    console.log(bordersinir.getBoundingClientRect().top);
    
    window.addEventListener("scroll", boxkontrol)

    for(i=0;i<20;i++){
        let div=document.createElement("div");
        div.innerText="yeni oluşturuldu";
        row.appendChild(div);
        div.classList.add("col-4", "offset-4", "border", "py-3", "fs-1", "border-danger", "text-center","my-3", "bg-info" ,"box")
        console.log(div);
        }        
        function boxkontrol(){
            const sinir=window.innerHeight/5*4;
            console.log(sinir);  
            console.log("çalıştı");  
            const boxes=document.querySelectorAll(".box");
             boxes.forEach(box=>{
                let boxsolkoseuzaklik=box.getBoundingClientRect().top;
                console.log(boxsolkoseuzaklik);
                if(boxsolkoseuzaklik<sinir){
                   box.classList.add("show") 
                   
                }
                else{
                    box.classList.remove("show")
                    
                }
         })
            
        
        
        
        }
        boxkontrol() 
          
}







