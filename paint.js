import {upd_tabl} from './gamestate.js'
import Win from './checkwin.js'
import Inf from './inf.js'
export function paint(i,j){
    let id = ""+i+j;
    let el = document.getElementById(id);
     if ((Inf.value[i][j]==-1)){
        Inf.count +=1; 
         if (Inf.flag==0){
            el.innerHTML="x" ;
            
            Inf.value[i][j]=1;
            Inf.flag+=1;
             if (Win.checkWin()){
                 alert ("WIN X"); 
                 upd_tabl(1)
                 return;
             }   
         }
         else{
             el.innerHTML="0" ;
             Inf.value[i][j]=0;
             Inf.flag-=1;
             if (Win.checkWin()){
                 alert ("WIN 0"); 
                 upd_tabl(2)
                 return;
             }
         }
         if (Inf.count==9){
         alert ("NOBODY WIN OR EVERYONE WIN. FIGHT");
         clean();
         return;
         }
 
     }      
 }