
function modal3(){

// Get modal element
var modal3 = document.getElementById('modal03', );
// Get open modal button
var modalBtn3 = document.getElementById('modal3');
// Get close button
var closeBtn3 = document.getElementsByClassName('closeBtn3')[0];

// Listen for open click
modalBtn3.addEventListener('click', openModal3);
// Listen for close click
closeBtn3.addEventListener('click', closeModal3);
// Listen for outside click
window.addEventListener('click', outsideClick3);

// Function to open modal
function openModal3(){
  modal3.style.display = 'block';
}

// Function to close modal
function closeModal3(){
  modal3.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick3(e){
  if(e.target == modal3){
    modal3.style.display = 'none';
  }
}

modal4();

};