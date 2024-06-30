document.addEventListener('DOMContentLoaded', () => {
  const toggleModeButton = document.getElementById('toggleMode');
  const backButton = document.getElementById('backButton');

  if (toggleModeButton) {
      toggleModeButton.addEventListener('click', () => {
          document.body.classList.toggle('dark-mode');
      });
  }

  if (backButton) {
      backButton.addEventListener('click', () => {
          window.location.href = 'index.html';
      });
  }
});