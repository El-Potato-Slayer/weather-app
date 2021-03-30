export default function removeChildren(parent) {
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}

export function switchTemperature() {
  const button = document.querySelector('.switch');
  const chk = document.querySelector('.switch input');
  // chk.checked = false
  button.addEventListener('click', () => {
    chk.checked = !chk.checked;
    const slide = document.querySelector('.slide');
    if (chk.checked) {
      slide.style.left = '45%';
    } else {
      slide.style.left = '5%';
    }
  });
}