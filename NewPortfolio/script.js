
function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

/*Easter egg with a modal that pops-up if the user presses some of the combinations below*/
let pressedKeys = '';

window.addEventListener('keyup', (e) => {
    pressedKeys += e.key;

    checkKeys(pressedKeys);

    console.log(pressedKeys);
});

function checkKeys(keys){
    if(keys === "1337") {
        popUpAlert("Amigo, du är Eliiiit");
    }
    else if (keys === "net23"){
        popUpAlert("The best class in the entire world");
    }
    
}

function popUpAlert(message){
    alert(message);
}



/*easter egg popup modal*/
document.getElementById('button').addEventListener('click', function(){

    document.querySelector('.llamaModal').style.display = 'flex';

});

document.querySelector('.close').addEventListener('click', function(){
    
    document.querySelector('.llamaModal').style.display ='none';
});

/*easter egg that changes color on background*/
let result = document.getElementById("imgbox");
 
        function changeColor(color) {
            document.body.style.background = color;
        }
 
        function myFunc() {
            changeColor('green');
        }


