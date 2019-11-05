const links = document.querySelectorAll('a[href^="#"]');

function scrollLink (event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

links.forEach((link) => {
  link.addEventListener('click', scrollLink);
});

