// обработка события мыши
export default function mouseEvent(listBody) {
  let isDown = false;
  let startY;
  let scrollTop;

  listBody.addEventListener("mousedown", e => {
    isDown = true;
    startY = e.pageY - listBody.offsetTop;
    scrollTop = listBody.scrollTop;
  });

  listBody.addEventListener("mouseleave", () => {
    isDown = false;
  });
  listBody.addEventListener("mouseup", () => {
    isDown = false;
  });
  listBody.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - listBody.offsetTop;
    const walk = (y - startY) * 3; 
    listBody.scrollTop = scrollTop - walk;
  });
}
