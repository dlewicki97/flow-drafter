export default function setStickyContentOpacityEvent() {
  let board = document.querySelector('.board');

  let opacityNodes = [
    ...board.querySelectorAll('.table .table-heading:first-child'),
    ...board.querySelectorAll('.table .table-cell:first-child'),
  ];

  board.addEventListener('scroll', () => {
    let classListMethod = 'remove';
    if (board.scrollLeft > 0) classListMethod = 'add';

    opacityNodes.forEach((node) => node.classList[classListMethod]('opacity'));
  });
}
