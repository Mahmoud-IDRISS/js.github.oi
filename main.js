var i=0
function changenemttext(){
    var  t =["JAVASCRIPT ","checkpoint JS"]
    if (i==0){
        document.getElementById("txt").innerHTML=t[i]
        i=1
    }else{
        document.getElementById("txt").innerHTML=t[i]
        i=0
    }
}
setInterval(changenemttext,5000)
var k=1
function textItalic(){/*text italic*/
    if (k==1){
        document.getElementById("parg").style.fontStyle='italic'     
        k=-1
    }
    else{
        document.getElementById("parg").style.fontStyle=''
        k=1
    }
 }
    var ok=true 
function textGras(){ /*text en gras */ 
    if (ok==false){ /*si parag en gras en mettre dans etat normal */
        document.getElementById("parg").style.fontWeight=''
        ok=true
    }
     else{ /* sinon en mettre parag en gras */
        document.getElementById("parg").style.fontWeight='bold'
        ok=false
          }  
}  
var l=true
function textSouligne(){ /*text soulignier */ 
    if (l==true){
        document.getElementById("parg").style.textDecoration='underline'
        l=false
    }else {
        document.getElementById("parg").style.textDecoration=''
        l=true
         }
 }          
function styleparagraphe(){ /*font family ou style d'ecriture*/
    var x,choix
    x=document.getElementById("parg")
   choix=document.getElementById("pol").value /*récupere items selected*/ 

   switch (choix){
       case'Times New Roman':
            x.style.fontFamily='Times New Roman'
            break;
        case'Arial':
            x.style.fontFamily='Arial'
            break;   
        case 'Elephant':
            x.style.fontFamily='Elephant'
            break;  
        case 'Times':
            x.style.fontFamily='Times'
            break;     
        case 'serif':
            x.style.fontFamily='serif'
            break; 
        default: x.style.fontFamily = ('')
    
        }

}
function taillePolic(){/**modifier taille (polic) de paragraphe */
var y,pos
y=document.getElementById("parg")
posselection=document.getElementById("tpg").value

switch (posselection){
    case "10":
        y.style.fontSize='x-small'
        break;
    case "12":
         y.style.fontSize='small'
        break;  
    case "14":
        y.style.fontSize='medium'
        break;    
    case "16":
        y.style.fontSize='large'
        break;   
    case "18":
        y.style.fontSize='x-large'
        break; 
    case "20":
        y.style.fontSize='xx-large'
        break;  
    case "20":
        y.style.fontSize='110%'
        break;   
    case "22":
        y.style.fontSize='150%'
        break; 
    default:y.style.fontSize=''    
}
}
function modifiercouleur(){ /*modifier couleur d'ecriture  */
  var w=  document.getElementById("choixcouleur").value
            document.getElementById('parg').style.color=w
  
}
function modifiercolorfont(){/*Modifer couleur de font */
 var   z=  document.getElementById("fontcouleur").value
    document.getElementById('parg').style.backgroundColor=z
}