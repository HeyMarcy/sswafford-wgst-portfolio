document.addEventListener('mousewheel', (e) => {
  const bottom = (window.innerHeight + window.scrollY >= document.body.offsetHeight);
  const goingDown = (e.deltaY > 0);
  if (bottom && goingDown)
    return e.preventDefault();
});
