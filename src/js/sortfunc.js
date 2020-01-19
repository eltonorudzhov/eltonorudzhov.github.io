import drowList from "./drowlist.js"; // рисует
import makeObject from "./makeobject.js"; // мапит массив
import findProperty from "./findproperty.js"; // ищет радиобаттон
export default class Sortfunc {
  constructor(props, root) {
    this.root=root;
    this.numberElement=root.numberElement;
    this.root.createRoot(['name','secondname', 'age'])
    let form = document.getElementById('form'+this.numberElement);
    // берем параметр сортировки
    this.keyName = findProperty(this.numberElement);
    this.list = [];
    // создаем и сортируем список
    
    this.listBody =  document.getElementById('bodyList'+this.numberElement)
    this.listBody.innerHTML=''
    this.setList(props);
    // обработчик выбора способа сортировки
    form.addEventListener(
      "submit",
      event => {
        this.sortSelect(form);
        event.preventDefault();
      },
      false
    );
  /*  this.listBody.addEventListener('click', ()=> {
      this.listBody.children.scrollTop = 10;
})*/
  /*
    this.listBody.onmousedown = (event)=> {

     // let shiftX = event.clientX - this.listBody.getBoundingClientRect().left;
      let shiftY = event.clientY - this.listBody.getBoundingClientRect().top;
      
      this.listBody.style.position = 'absolute';
      this.listBody.style.zIndex = 1000;
      document.body.append(this.listBody);
    
     // moveAt(event.pageY, this.listBody).bind(this);
     this.listBody.style.top = event.pageY - shiftY + 'px';
      // переносит мяч на координаты (pageX, pageY),
      // дополнительно учитывая изначальный сдвиг относительно указателя мыши
      function moveAt( pageY,listBody) {
        console.log("SSS")
       // this.listBody.style.left = pageX - shiftX + 'px';
        listBody.style.top = pageY - shiftY + 'px';
      }
      
      function onMouseMove(event) {
       // moveAt( event.pageY).bind(this);
       this.listBody.style.top = event.pageY - shiftY + 'px';
      }
    
      // передвигаем мяч при событии mousemove
      document.addEventListener('mousemove', onMouseMove.bind(this));
    
      // отпустить мяч, удалить ненужные обработчики
      this.listBody.onmouseup =()=> {
        document.removeEventListener('mousemove', onMouseMove.bind(this));
        this.listBody.onmouseup = null;
        
        return;
      };
    
    };
    
    this.listBody.ondragstart = ()=> {
      return false;
    };
*/   
  }
  // Выбор способа сортировки
  sortSelect = (form) => {
    let data = new FormData(form);
    for (const entry of data) {
      this.keyName = entry[1];
    }
    this.setList(this.list);
  };
  // создание и сортировка списка, вывод его на экран
  setList(list) {
    this.list = list.sort(this.compareList);
    let mapList = makeObject(this.list, this.keyName);
    this.listBody=drowList(mapList,this.keyName, this.numberElement)
  }
  
  compareList = (a, b) => {
    if (a[this.keyName] > b[this.keyName]) return 1;
    if (a[this.keyName] == b[this.keyName]) return 0;
    if (a[this.keyName] < b[this.keyName]) return -1;
  };



}

