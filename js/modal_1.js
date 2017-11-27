
window.onload = function() {
	
// Get modal element
var modal1 = document.getElementById('modal01', );
// Get open modal button
var modalBtn1 = document.getElementById('modal1');
// Get close button
var closeBtn1 = document.getElementsByClassName('closeBtn1')[0];

// Listen for open click
modalBtn1.addEventListener('click', openModal1);
// Listen for close click
closeBtn1.addEventListener('click', closeModal1);
// Listen for outside click
window.addEventListener('click', outsideClick1);

// Function to open modal
function openModal1(){
  modal1.style.display = 'block';
}

// Function to close modal
function closeModal1(){
  modal1.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick1(e){
  if(e.target == modal1){
    modal1.style.display = 'none';
  }
}




modal2();



};