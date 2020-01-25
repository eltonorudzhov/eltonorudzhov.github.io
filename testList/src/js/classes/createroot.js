export default class CreateRoot{
    constructor(id){
        // Создается таблица, чтобы несколько списков могли быть упорядочены по столбцам
        this.numberElement = 0;
        let rowElement = document.createElement("row");
        document.getElementById(id).appendChild(rowElement);
        this.trSelect = document.createElement('tr')
        this.trSelect.id = "trSelect"
        this.trDiv = document.createElement('tr')
        this.trDiv.id = "trDiv"
        // добавляем в один столбец 2 строки - первая отвечающая за выбор  сортировки, вторая за список
        rowElement.appendChild(this.trSelect);
        rowElement.appendChild(this.trDiv);
    }
    // функция, отвечающая за построение разметки для списка и формы
    createRoot(keys){
        let td = document.createElement('td');
        td.id='tdSelect'+this.numberElement
        this.trSelect.appendChild(td)
        let form = this.createForm(keys)
        td.appendChild(form);
        this.createDiv()
        this.numberElement+=1
    }
    createForm(keys){
        let form = document.createElement('form')
        form.id = 'form'+this.numberElement
        this.createInputs(keys,form)
        this.createButton(form)
        return form
    }
    createInputs(keys, form){
        for (let i=0; i<keys.length; i++){
            let input = document.createElement('input');
            let label = document.createElement('label');
            input.type = 'radio'
            input.name = 'select'+this.numberElement;
            input.value=keys[i]
            if (i==0){
                input.checked=true
            }
            let labelText= keys[i].charAt(0).toUpperCase() + keys[i].substr(1);
            label.innerHTML += labelText
            form.appendChild(input);
            form.appendChild(label);
        }
    }
    createButton(form){
        let button = document.createElement('button')
        button.type='submit'
        button.innerHTML = "OK"
        form.appendChild(button);
    }
    createDiv(){
        let td = document.createElement('td');
        td.id='tdDiv'+this.numberElement
        this.trDiv.appendChild(td)
        let div = document.createElement('div')
        div.id = 'bodyList'+this.numberElement
        td.appendChild(div)
    }

}

 