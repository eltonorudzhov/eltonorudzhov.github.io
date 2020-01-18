export default function makeObject(list, keyName) {
  let newList = new Map();
  switch (keyName) {
    case "name":
    case "secondname":
      for (let elem of list) {
        newList.has(elem[keyName][0])
          ? newList.get(elem[keyName][0]).push(elem)
          : newList.set(elem[keyName][0], new Array(elem));
      }
      break;
    case "age":
      let headerAge = 10;
      for (let elem of list) {
        while (headerAge < elem[keyName]) headerAge += 10;
        newList.has(headerAge)
          ? newList.get(headerAge).push(elem)
          : newList.set(headerAge, new Array(elem));
      }
      break;
    default:
      break;
  }
  return newList;
}
