function hideUserBar() {
  document.querySelector('.sing-wrap').style.display = '';
  document.querySelector('.but-sing-mob').style.display = 'flex';
  document.querySelectorAll('.log-out-wrap').forEach(el => {
    el.style.display = 'none';
  });
}
const noimageLink = document.querySelector('.user-image img').src;
// 'https://firebasestorage.googleapis.com/v0/b/lets-do-it-bookshelf.appspot.com/o/noimage.png?alt=media&token=308aa6e1-f846-460a-9510-1b4e6e04082b';
function showUserBar(user) {
  document.querySelectorAll('.user-text').forEach(el => {
    el.textContent = user.displayName;
  });
  document.querySelectorAll('.user-image img').forEach(el => {
    el.src = user.photoURL ?? noimageLink;
    el.alt = user.displayName;
  });

  document.querySelectorAll('.log-out-wrap').forEach(el => {
    el.style.display = '';
  });
  document.querySelector('.but-sing-mob').style.display = 'none';
  document.querySelector('.sing-wrap').style.display = 'none';
}

export { hideUserBar, showUserBar };
