
function modal2(){

// Get modal element
var modal2 = document.getElementById('modal02', );
// Get open modal button
var modalBtn2 = document.getElementById('modal2');
// Get close button
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

// Listen for open click
modalBtn2.addEventListener('click', openModal2);
// Listen for close click
closeBtn2.addEventListener('click', closeModal2);
// Listen for outside click
window.addEventListener('click', outsideClick2);

// Function to open modal
function openModal2(){
  modal2.style.display = 'block';
}

// Function to close modal
function closeModal2(){
  modal2.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick2(e){
  if(e.target == modal2){
    modal2.style.display = 'none';
  }
}

modal3();

};