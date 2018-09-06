const panels = document.querySelector('.panels');
let selected;

panels.addEventListener("click", search);

function search(event) {
  let target = event.target;
  while (target != panels) {
    if (target.classList.contains("panel")) {
      // we've found our element
      highlight(target);
      return;
    }
    target = target.parentNode;
  }
};

function highlight(node) {
  if (selected) {
    selected.classList.remove('open-active');
  }
  selected = node;
  selected.classList.add('open-active');
}
