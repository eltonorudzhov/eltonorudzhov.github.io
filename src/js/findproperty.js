// Ищет выбранное свойство из радио 
export default function findProperty(numberElement) {
  for (let elem of document.getElementById('form'+numberElement).children) {
    if (elem.checked) {    
      return elem.value;
    }
  }
}
