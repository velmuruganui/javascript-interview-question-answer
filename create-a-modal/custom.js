const button = document.querySelector('#openModalButton');
const modal = document.querySelector('#myModal');
const close = document.querySelector('.close');
 
const audioElement = new Audio('audio/error.mp3');

function openModal() {
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
    
    document.addEventListener('keydown', function (event) { 
        console.log(event);
           if(event.key === "Escape"){
             modal.style.display = 'none';
             document.body.classList.add('modal-open');
           }else{
            audioElement.play();
           }
    })
}
  
function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}
  
  // Event listeners
  button.addEventListener('click', openModal);
  close.addEventListener('click', closeModal);
  
  // Keydown event listener
  document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

document.addEventListener('DOMContentLoaded', function () {
        button.addEventListener('click', function () {
            modal.style.display = 'block';
            document.body.classList.add('modal-open');
        });

        close.addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.classList.add('modal-open');
        });
});









