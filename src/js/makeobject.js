export default function makeObject(list, keyName) {
  let newList = new Map();
  let typeKey = typeof keyName;
  switch (typeKey) {
    case "number":
      for (let elem of list) {
        newList.has(elem[keyName][0])
          ? newList.get(elem[keyName][0]).push(elem)
          : newList.set(elem[keyName][0], new Array(elem));
      }
      break;
    case "string":
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
