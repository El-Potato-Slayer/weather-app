export default function removeChildren(parent) {
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}