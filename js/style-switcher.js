// const styleToggler = document.querySelector('.style-toggler');
// styleToggler.addEventListener('click',()=>{
//     document.querySelector('.style-switcher').classList.toggle('open')
// })

// window.addEventListener('scroll', ()=>{
//     if(document.querySelector('.style-switcher').classList.contains('open')){
//         document.querySelector('.style-switcher').classList.remove('open')
//     }
// })
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=> {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        localStorage.setItem('theme','dark');
    }
    else{
        localStorage.setItem('theme','light');
    }
    updateIcon();
})
function thememode(){
    if(localStorage.getItem('theme') !== null){
        if(localStorage.getItem('theme') === "light"){
            document.body.classList.remove('dark');
        }
        else{
            document.body.classList.add('dark');
        }
    }
    else{
        var hour = new Date().getHours();
        var minute = new Date().getMinutes();
        var time = hour + "." + minute;
        if(time >= 4 && time <= 18.30){
            document.body.classList.remove('dark');
        }
        else{
            document.body.classList.add('dark');
        }
    }
    updateIcon();
}
thememode();
function updateIcon(){
    if(document.body.classList.contains('dark')){
        dayNight.querySelector("i").classList.remove('fa-moon');
        dayNight.querySelector("i").classList.add('fa-sun');
    }
    else{
        dayNight.querySelector("i").classList.remove('fa-sun');
        dayNight.querySelector("i").classList.add('fa-moon');
    }
}