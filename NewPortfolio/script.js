
function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

document.getElementById('button').addEventListener('click', function(){

    document.querySelector('.llamaModal').style.display = 'flex';

});

document.querySelector('.close').addEventListener('click', function(){
    
    document.querySelector('.llamaModal').style.display ='none';
});