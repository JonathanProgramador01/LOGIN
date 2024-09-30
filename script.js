document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Remover la clase 'active' de todos los botones
      buttons.forEach(btn => btn.classList.remove('active'));
      
      // Añadir la clase 'active' al botón presionado
      this.classList.add('active');
    });
  });
});
