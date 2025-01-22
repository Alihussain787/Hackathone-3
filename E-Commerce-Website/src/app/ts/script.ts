

export function openMenu(){
    const navManu = document.getElementById("nav_menu");
    if(navManu){
        navManu.style.marginTop = "0%";
    }
}

export function closeMenu(){
    const navManu = document.getElementById("nav_menu");
    if(navManu){
        navManu.style.marginTop = "-200%";
    }
}