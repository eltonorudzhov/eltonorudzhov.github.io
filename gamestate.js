import {clean} from './clean.js'
export function upd_tabl(win){
    clean()
    if (win==1)
    document.getElementById('first').innerHTML= +first.textContent+1;
    else
    document.getElementById('second').innerHTML= +second.textContent+1;
}