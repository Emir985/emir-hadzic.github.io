console.log('blabla')
const svalegaarden=document.querySelector('.svalegaarden')
const svalegaardenPic=document.querySelector('.svalegaarden-pic')
const diabetes=document.querySelector('.diabetes')
const diabetesPic=document.querySelector('.diabetes-pic')
const ungdomsringen=document.querySelector('.ungdomsringen')
const ungdomsringenPic=document.querySelector('.ungdomsringen-pic')
const leftButton=document.querySelector('.left-arrow')
const rightButton=document.querySelector('.right-arrow')
svalegaarden.style.display="block"
leftButton.addEventListener('click', ()=>{
    console.log("left arrow clicked")
    if (svalegaarden.style.display=="block") {
        svalegaarden.style.display="none"
        svalegaardenPic.style.display="none"
        ungdomsringen.style.display="block"
        ungdomsringenPic.style.display="block"
    }else if(ungdomsringen.style.display=="block"){
        ungdomsringen.style.display="none"
        ungdomsringenPic.style.display="none"
        diabetes.style.display="block"
        diabetesPic.style.display="block"
    }else{
        diabetes.style.display="none"
        diabetesPic.style.display="none"
        svalegaarden.style.display="block"
        svalegaardenPic.style.display="block"
        
    }
}

)
rightButton.addEventListener('click', ()=>{
    console.log("right arrow clicked")
    if (svalegaarden.style.display=="block") {
        svalegaarden.style.display="none"
        svalegaardenPic.style.display="none"
        diabetes.style.display="block"
        diabetesPic.style.display="block"
    }else if(ungdomsringen.style.display=="block"){
        ungdomsringen.style.display="none"
        ungdomsringenPic.style.display="none"
        svalegaarden.style.display="block"
        svalegaardenPic.style.display="block"
    }else{
        diabetes.style.display="none"
        diabetesPic.style.display="none"
        ungdomsringen.style.display="block"
        ungdomsringenPic.style.display="block"
        
    }

})
