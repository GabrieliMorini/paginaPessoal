// Aqui você pode adicionar animações ou interatividade, como eventos de scroll, animação ao carregar a página, etc.

// Exemplo: Animação simples ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.querySelector('.profile-pic');
    profilePic.classList.add('animate');
  });
  
  // Exemplo de rolagem suave para seções
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });