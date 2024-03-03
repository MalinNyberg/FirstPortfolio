
function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
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