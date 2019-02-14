function accordionTeam(){
    const workers = document.querySelectorAll(".accordeon__item");
    const teamAccord = document.querySelector(".accordeon");
    
    teamAccord.addEventListener("click" , function(event){
        event.preventDefault();
        const target =event.target;

        if(target.classList.contains("accordeon__link")){
            const worker = target.parentNode;
            const content = target.nextElementSibling;
            const contentHeight = content.firstElementChild.clientHeight;

                for (const iterator of workers) {
                    if(iterator !==worker){
                        iterator.classList.remove("accordeon__item-active");
                        iterator.lastElementChild.style.height= 0;
                    }
                }

                if(worker.classList.contains("accordeon__item-active")){
                    worker.classList.remove("accordeon__item-active");
                    content.style.height = 0;
                }else{
                    worker.classList.add("accordeon__item-active");
                    content.style.height = contentHeight + "px";
                }
            
        
        }
    });
}


accordionTeam();




