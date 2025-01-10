const button = document.getElementById('Explore');

button.addEventListener('mousedown', () => {
  button.style.backgroundColor = '#fad044'; 
});

button.addEventListener('mouseup', () => {
  button.style.backgroundColor = '#fcc81d';
});

button.addEventListener('mouseenter', ()=>{
    button.style.backgroundColor='#fad044'
});

button.addEventListener('mouseleave', () => {
  button.style.backgroundColor = '#fcc81d'; 
});

