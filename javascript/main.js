// Check if there's   local Storage Color Option 
let mainColors=localStorage.getItem("option-box") 
//  اذا كانت القيمة غير فارغة اضيفها على root  
if (mainColors!==null){
document.documentElement.style.setProperty('--main--color',localStorage.getItem("option-box"))
// Check for Active class
 // Remove active class from All ColoR Lis Item 
document.querySelectorAll(".colors li").forEach(el=>{
        el.classList.remove("active") 
    // add active class on Element with Data-Color ===local Storage Item 
    if (el.dataset.color===mainColors){
        // add Active class 
        el.classList.add("active")
    }
    })}


// let Background Option 
let backgroundOption =true
// virable To Control Background Interval 
let backgroundIntervel;

// check if there's local storage  random Background  Item
let backgoundLocaltem=localStorage.getItem("background_Option")
// check if Random Background local Storage is not empty 
if (backgoundLocaltem !==null){
    console.log("not empty")
    if(backgoundLocaltem==='true'){
        backgroundOption=true
    }else{
        backgroundOption=false
    }
// remove Active class from all spans
document.querySelectorAll(".Random-Background span").forEach(el=>
    {
        el.classList.remove("active")
    })
    if(backgoundLocaltem==='true'){
        document.querySelector(".Random-Background .yes").classList.add("active")
    }else {
        document.querySelector(".Random-Background .no ").classList.add("active")
    }
}






// toggle spin class on icon
document.querySelector(" .taggles  .fa-cogs").onclick=function(){
    // Toggle Class fa-spin for rotation on Self
    this.classList.toggle("fa-spin")
    // Toggle class open On  Main setting box
    document.querySelector(".setting-box").classList.toggle("open")
}

// switch Colors
const colorLi=document.querySelectorAll(".colors li ")
// Loop On All List items
colorLi.forEach(li=>{
// Click On Every List Items
    li.addEventListener('click',(e)=>{
        // set Color in root
        document.documentElement.style.setProperty('--main--color',e.target.dataset.color)
        // Set Color On local Storage
        localStorage.setItem("option-box",e.target.dataset.color)
        // Remove active class from All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(el=>{
           el.classList.remove("active") 
        })
        // add active class on Self 
        e.target.classList.add("active");
    })
})

// *************************************************************************
// switch random Background option
const randomBackgroundEl=document.querySelectorAll(".Random-Background span")
// Loop On All Span 
randomBackgroundEl.forEach(span=>{
// Click On Every Span
    span.addEventListener('click',(e)=>{
        // Remove active class from All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(el=>{
           el.classList.remove("active") 
        })
        // add active class on Self 
        e.target.classList.add("active");
        if (e.target.dataset.background==="yes"){
            backgroundOption =true;
            randomImge();
            localStorage.setItem("background_Option",true)
        }else{
            backgroundOption =false;
            clearInterval(backgroundIntervel);
            localStorage.setItem("background_Option",false)
        }
    })
})


// **********************************************************************

// randomly Change background
// Select Landing page Element

let landingPage=document.querySelector('.landing-page')

// Get array of imges

let imgArray=["landpage1.jpg","landpage2.jpg","landpage3.jpg","landpage4.jpg"]
// Get Random Number 


function randomImge(){
    if (backgroundOption===true){
setInterval(()=> {
// Get Random Number
let randomNumber=Math.floor(Math.random()*imgArray.length)
// Change Background Image Url
landingPage.style.backgroundImage='url("/img/'+imgArray[randomNumber]+'")'
},1000)
}
}