document.addEventListener('DOMContentLoaded', () => {
  const postsList = document.getElementById('postsList');

  if (postsList) {
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.forEach(post => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p>Author: ${post.username}</p>`;
          postsList.appendChild(listItem);
      });
  }
});