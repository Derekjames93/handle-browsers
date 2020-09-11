const newButton = document.querySelector(".one")

function logClick(){
    console.log("Button Pressed");
}
function rightClick(event){
    event.preventDefault();
    console.log('you right clicked')
}


function logLeftClick(event){
    event.preventDefault();
    if (event.button === 0){
        console.log("You left clicked");
    }else if (event.button === 1){
        console.log('You middle clicked');
    }else if (event.button === 2){
        console.log('You right clicked');
    }
    ;
}



newButton.addEventListener('click',logLeftClick)
newButton.addEventListener('contextmenu', logLeftClick)


// window.addEventListener('resize', () => {
//     console.log('You Change the size of the Window!')
// })
