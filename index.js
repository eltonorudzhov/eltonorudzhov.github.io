import {paint} from './paint.js'
class S{
  start(){
    alert("DD")
    document.querySelector('table').onclick = (event) => {
    let cell = event.target;
    if (cell.tagName.toLowerCase() != 'td')
      return;
    let i = cell.parentNode.rowIndex;
    let j = cell.cellIndex;
    paint(i,j);
    console.log(i, j);
    }
  }
}
export default new S();



