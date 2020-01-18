export default class CreateRoot{
    constructor(id){
        this.numberElement = 0;
        let rowElement = document.createElement("row");
        document.getElementById(id).appendChild(rowElement);
        this.trSelect = document.createElement('tr')
        this.trSelect.id = "trSelect"
        this.trDiv = document.createElement('tr')
        this.trDiv.id = "trDiv"
        rowElement.appendChild(this.trSelect);
        rowElement.appendChild(this.trDiv);
    }

    createRoot(keys){
        let td = document.createElement('td');
        td.id='td'+this.numberElement
        this.trSelect.appendChild(td)
        let form = this.createForm()
        td.appendChild(form);
        this.createInputs(keys,form)
        this.createButton(form)
        this.createDiv(form)
        this.numberElement+=1
    }
    createForm(){
        let form = document.createElement('form')
        form.id = 'form'+this.numberElement
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
    createDiv(form){
        let div = document.createElement('div')
        div.id = 'bodyList'+this.numberElement
        form.appendChild(div)
    }

}

 