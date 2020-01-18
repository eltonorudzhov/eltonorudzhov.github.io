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
    drowList(mapList,this.keyName, this.numberElement)
  }
  
  compareList = (a, b) => {
    if (a[this.keyName] > b[this.keyName]) return 1;
    if (a[this.keyName] == b[this.keyName]) return 0;
    if (a[this.keyName] < b[this.keyName]) return -1;
  };
}
