const titles = document.querySelectorAll('.title');

titles.forEach(title => {
  title.addEventListener('mouseover', () => {
    const explain = title.nextElementSibling;
    explain.style.display = 'block';
  });

  title.addEventListener('mouseout', () => {
    const explain = title.nextElementSibling;
    explain.style.display = 'none';
  });
});