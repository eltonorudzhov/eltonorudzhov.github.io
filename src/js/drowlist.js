// Вывод списка на экран
export default function drowList(list,keyName, numberElement) {
  // Очистка поля
  let listBody = document.getElementById('bodyList'+numberElement)
  listBody.innerHTML = "";
  for (let elem of list.keys()) {
    // Вывод ключа
    let liKey = document.createElement("li");
    let keyStr = "<strong>" + elem + "</strong>"
    liKey.innerHTML = keyStr;
    listBody.append(liKey);
    liKey.classList.add("sticky");
    // Вывод значений по ключу
    list.get(elem).forEach(element => {
      let liElement = document.createElement("li");
      let str = "";
      for (let changeKey in element) {
        if (changeKey == keyName) str += "<strong>" + element[changeKey] + "</strong>";
        else str += element[changeKey];
        str += " ";
      }
      liElement.innerHTML = str;
      listBody.append(liElement);
    });
  }
}
