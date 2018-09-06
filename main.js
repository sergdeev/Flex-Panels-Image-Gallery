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

//second option
// const panels = document.querySelectorAll('.panel');
//
// panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// panels.forEach(panel => panel.addEventListener('transitioned', toggleActive));
//
//
// function toggleOpen() {
//   this.classList.toggle('open');
// }
//
// function toggleActive(e) {
//   if(e.propertyName.includes('flex')){
//     this.classList.toggle('open-active');
//   }
// }
