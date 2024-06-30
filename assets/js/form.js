document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('blogForm');
  const errorMessage = document.getElementById('error-message');

  if (form) {
      form.addEventListener('submit', event => {
          event.preventDefault();

          const username = document.getElementById('username').value;
          const title = document.getElementById('title').value;
          const content = document.getElementById('content').value;

          if (!username || !title || !content) {
              errorMessage.textContent = 'Please complete the form.';
              return;
          }

          const post = { 
            username, 
            title, 
            content,
            timestamp: new Date().toLocaleString()};
            
          const posts = JSON.parse(localStorage.getItem('posts')) || [];
          posts.push(post);
          localStorage.setItem('posts', JSON.stringify(posts));

          window.location.href = 'blog.html';
      });
  }
});