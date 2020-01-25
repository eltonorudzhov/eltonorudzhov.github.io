import SortFunc from './src/js/classes/sortfunc.js'
import CreateRoot from './src/js/classes/createroot.js'
import people from './src/js/lists/people.js'
import fruits from './src/js/lists/fruits.js'

let root = new CreateRoot('mainBodyList')
let list1 = new SortFunc(people, root )
let list2 = new SortFunc(fruits, root )
