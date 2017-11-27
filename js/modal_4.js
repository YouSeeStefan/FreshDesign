
function modal4(){

// Get modal element
var modal4 = document.getElementById('modal04', );
// Get open modal button
var modalBtn4 = document.getElementById('modal4');
// Get close button
var closeBtn4 = document.getElementsByClassName('closeBtn4')[0];

// Listen for open click
modalBtn4.addEventListener('click', openModal4);
// Listen for close click
closeBtn4.addEventListener('click', closeModal4);
// Listen for outside click
window.addEventListener('click', outsideClick4);

// Function to open modal
function openModal4(){
  modal4.style.display = 'block';
}

// Function to close modal
function closeModal4(){
  modal4.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick4(e){
  if(e.target == modal4){
    modal4.style.display = 'none';
  }
}

vacature();

};