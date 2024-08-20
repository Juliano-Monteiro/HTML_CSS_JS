// navbar_cell
let menu_list= document.querySelector(".navbar_cell");
let menu = document.querySelector("#menu");
menu.addEventListener("click",()=>{
    let menu_list_verification = menu_list.getAttribute("class").split(" ")[1];     
    console.log(menu.getAttribute("src"));
    if(menu_list_verification=="open_close"){
        menu_list.classList.remove("open_close");
        menu.setAttribute("src","imgs/Nova pasta/close_menu.png");
    }
    else{
        menu_list.classList.add("open_close");
        menu.setAttribute("src","imgs/Nova pasta/menu.png");
    }
})
