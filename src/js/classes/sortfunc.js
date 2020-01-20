import drowList from "../drowlist.js"; 
import makeObject from "../makeobject.js"; 
import findProperty from "../findproperty.js"; 
import mouseEvent from '../mouseevent.js'
export default class SortFunc {
  constructor(props, root) {
    this.root = root;
    // сохраняем номер списка
    this.numberElement = root.numberElement;
    // выписываем ключи в отдельный массив
    let propsKeys = [];
    for (let keys in props[0]) {
      propsKeys.push(keys);
    }
    this.root.createRoot(propsKeys);
    let form = document.getElementById("form" + this.numberElement);
    // берем параметр сортировки
    this.keyName = findProperty(this.numberElement);
    this.list = [];
    // создаем и сортируем список
    this.listBody = document.getElementById("bodyList" + this.numberElement);
    this.listBody.innerHTML = "";
    this.setList(props);
    // событие обработки касания мыши
    mouseEvent(this.listBody)
    // обработчик выбора способа сортировки
    form.addEventListener(
      "submit",
      event => {
        this.sortSelect(form);
        event.preventDefault();
      },
      false
    );
  }
  // Выбор способа сортировки
  sortSelect = form => {
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
    this.listBody = drowList(mapList, this.keyName, this.numberElement);
  }

  compareList = (a, b) => {
    if (a[this.keyName] > b[this.keyName]) return 1;
    if (a[this.keyName] == b[this.keyName]) return 0;
    if (a[this.keyName] < b[this.keyName]) return -1;
  };
}
