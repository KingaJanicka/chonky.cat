const sections = document.querySelectorAll("main > section");
console.dir(sections);
sections.forEach(
  (element, idx) => idx !== 0 && (element.style.display = "none")
);

setInterval(() => {
  const { location } = window;
  const current = location.href.match(/#([^?]+)/);
  sections.forEach(element =>
    element.id === current[1]
      ? (element.style.display = "flex")
      : (element.style.display = "none")
  );
}, 100);
