
const button = document.querySelector('#opemModalButton')
const close = document.querySelector(".close")
const modal = document.querySelector("#modal")

const audioEle = new Audio('audio/error.mp3')

function openModal(){
  modal.style.display = 'block';
  document.body.classList.add('modal-open')
  document.addEventListener('keydown', modalkeyDownListener)
}

function closeModal(){
  modal.style.display = 'none';
  document.body.classList.remove('modal-open')
}




function modalkeyDownListener(event){
  if(event.key === "Escape"){
    closeModal()
  }else{
    audioEle.play()
  }
}


button.addEventListener('click', openModal)
close.addEventListener('click', closeModal)
