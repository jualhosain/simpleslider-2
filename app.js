let item = document.querySelectorAll(".item"); 
setInterval(function(){    
    for(let m=0; m<item.length; m++){
        if(item[m].className=="item active"){
            item[m].classList.remove("active");
            item[m].style.left="100%";
            item[m].style.zIndex="0";
             
            if(m==item.length-1){
                    item[0].classList.add("active");
                    item[0].style.left="0";
                    item[0].style.zIndex="5";
                    item[1].style.left="-100%";
                    item[1].style.zIndex="0";

            }else{
                    item[m+1].classList.add("active");

                        if(m==item.length-2){
                            item[m+1].style.left="0"
                            item[m+1].style.zIndex="5"
                            item[0].style.left="-100%"
                            item[0].style.zIndex="0"
                        }else{
                            item[m+2].style.left="-100%";
                            item[m+2].style.zIndex="0";
                            item[m+1].style.left="0";
                            item[m+1].style.zIndex="5";
                        }

                    
            }    

            break;
        }
    }
},2000);