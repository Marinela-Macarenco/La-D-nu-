const scrollDownLink = document.querySelector('.scroll-down-link');

scrollDownLink.addEventListener('click', (event) => {
  event.preventDefault();

  scroll({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});
