let numbersArr=Array.from(document.querySelectorAll('button.numbersAndDot'));
//console.log(numbersArr)
let operatorsArr=Array.from(document.querySelectorAll("button.operatorSimbol"));
//console.log(operatorsArr)
let detailsOfCalculus=document.querySelector(".detailsOfCalculus");
let detailsContainer=document.querySelector(".detailsContainer");
let resultBox=document.querySelector(".resultBox");
let clearButtonsArr=Array.from(document.querySelectorAll("button.clearBtn"));// CE C ⌫


let equalCount=0;
detailsOfCalculus.textContent=""


document.addEventListener('keydown', operate);

function operate(e){

    if(equalCount!==0){
        resultBox.classList.remove("enlarge");
        detailsContainer.classList.remove("hide");
        detailsOfCalculus.textContent="";
        resultBox.textContent="";
        equalCount=0;
    }
    
    if(detailsOfCalculus.textContent===""){
        if(e.keyCode!==107 &&e.keyCode!==106 &&e.keyCode!==111){//ingresante no es + * /
           
            addNumber(e);
        }
        
    }else{
        if(detailsOfCalculus.textContent=="."){//lenght 1 y es . , 190 110

            if(e.keyCode!==190 &&e.keyCode!==110&&e.keyCode!==107 &&e.keyCode!==109&&e.keyCode!==106 &&e.keyCode!==111){//ingresante no es . + - * /
                addNumber(e);
            }
        }else if(detailsOfCalculus.textContent[0]=="."&&detailsOfCalculus.textContent.length>1){//empieza con . y tiene mas de 1 caracter
            
            if(e.keyCode!==190 &&e.keyCode!==110&&e.keyCode!==107 &&e.keyCode!==109&&e.keyCode!==106 &&e.keyCode!==111){//ingresante no es . + - * /
                addNumber(e);
                console.log("aqui")
            }else{
                console.log("sss")
                addNumber(e);
            }
        }else if(detailsOfCalculus.textContent=="-"){//lenght 1 y es -
            if(e.keyCode!==190 &&e.keyCode!==110&&e.keyCode!==107 &&e.keyCode!==109&&e.keyCode!==106 &&e.keyCode!==111){//ingresante no es . + - * /
                addNumber(e);
            }
        }else if(detailsOfCalculus.textContent[0]=="-"&&detailsOfCalculus.textContent.length===2){//lenght 2 y el primero es - , el segundo es un numero
            addNumber(e);

        }else if(detailsOfCalculus.textContent[0]!=="."&&detailsOfCalculus.textContent[0]!=="-"&&detailsOfCalculus.textContent.length===1){//el primero es un numero
            
            if(e.keyCode!==190 &&e.keyCode!==110&&e.keyCode!==107 &&e.keyCode!==109&&e.keyCode!==106 &&e.keyCode!==111){//ingresante no es . + - * / 
                
                addNumber(e);
                
            }else if(e.keyCode==190 || e.keyCode==110){//el ingresante es .
                
                addNumber(e);
            }else if(e.keyCode==107 ||e.keyCode==109||e.keyCode==106 ||e.keyCode==111 ){
                
                addNumber(e);
                
            }
            
        }
        else{//lengh >1
            
            if(e.keyCode!==190 &&e.keyCode!==110&&e.keyCode!==107 &&e.keyCode!==109&&e.keyCode!==106 &&e.keyCode!==111){//ingresante NO es . + - * / ÷
                if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="+"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="-"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="X"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="÷"){//no termina en . + - * / +
                    
                    addNumber(e);
                }else{
                    addNumber(e);
                }
                
            }else if(e.keyCode===190 ||e.keyCode===110){//el ingresante es .
                if(!detailsOfCalculus.textContent.includes(".")&&!detailsOfCalculus.textContent.includes("+")&&!detailsOfCalculus.textContent.includes("X")&&!detailsOfCalculus.textContent.includes("÷")){//no incluye . + X /
                    if(detailsOfCalculus.textContent.includes("-")&&detailsOfCalculus.textContent[0]=="-"){//incluye - y el primero  es -
                        addNumber(e);
                    }else if(!detailsOfCalculus.textContent.includes("-")){
                        
                        addNumber(e);
                    }

                }else{
                    console.log("aqui")
                    let t=detailsOfCalculus.textContent.split("");
                    let indexArr=[];
                    indexArr.push(detailsOfCalculus.textContent.lastIndexOf("+"));
                    indexArr.push(detailsOfCalculus.textContent.lastIndexOf("-"));
                    indexArr.push(detailsOfCalculus.textContent.lastIndexOf("X"));
                    indexArr.push(detailsOfCalculus.textContent.lastIndexOf("÷"));
                    console.log(indexArr)
                    let idx=Math.max(...indexArr);
                    let sub=detailsOfCalculus.textContent.substring(idx+1,)
                    console.log(sub)
                    if(!sub.includes(".")){
                        addNumber(e);
                    }

                }
            }else if(e.keyCode===107){// ingresante es +
                
                if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="+"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="."){//el ultimo no es + ni .
                    if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="X"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="-"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="÷"){//el ultimo no es X - ÷
                        addNumber(e);
                    }else if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]=="X"||detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]=="÷"){//termina en X /
                        let t=detailsOfCalculus.textContent.split("");
                        t.splice(t.length-1,1,"+");
                        detailsOfCalculus.textContent=t.join("");
                    }else if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]=="-"){//termina en -
                        
                        if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-2]!=="X"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-2]!=="÷"){//penultimo no es X /
                            
                            let t=detailsOfCalculus.textContent.split("");
                            t.splice(t.length-1,1,"+");
                            detailsOfCalculus.textContent=t.join("");
                        }
                    }
                }
               
            }else if(e.keyCode===109||e.keyCode===189){//ingresante es -
                if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="-"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="."){//el ultimo no es - ni .
                    if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="X"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="+"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="÷"){//el ultimo no es X + ÷
                        addNumber(e);
                    }else if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]=="+"){// si termina en +
                        let t=detailsOfCalculus.textContent.split("");
                        t.splice(t.length-1,1,"-");
                        detailsOfCalculus.textContent=t.join("");
                    }else if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]=="X"||detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]=="÷"){//termina en X ÷ 
                        addNumber(e);
                    }
                }
                
            }else if(e.keyCode===106){//el ingresante es X
                if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="X"){//no termina en X
                    if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="-"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="+"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="÷"){//el ultimo no es - + ÷
                        addNumber(e);
                    }else{
                        console.log("aca")
                        if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-2]!=="X"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-2]!=="÷"){
                            let t=detailsOfCalculus.textContent.split("");
                            t.splice(t.length-1,1,"X");
                            detailsOfCalculus.textContent=t.join("");
                        }
                        
                    }
                }
            }else if(e.keyCode===111){//el ingresante es /
                if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="÷"){//no termina en ÷
                    if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="-"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="+"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="X"){//el ultimo no es - + X
                        addNumber(e);
                    }else{
                        console.log("aca")
                        if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-2]!=="X"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-2]!=="÷"){
                            let t=detailsOfCalculus.textContent.split("");
                            t.splice(t.length-1,1,"÷");
                            detailsOfCalculus.textContent=t.join("");
                        }
                    }
                }
            }
        }
    }

    if(e.keyCode===8){//el ingresante es backspace
        {
            let arr=detailsOfCalculus.textContent.split("");
            if(!detailsOfCalculus.textContent.includes("+")&&!detailsOfCalculus.textContent.includes("X")&&!detailsOfCalculus.textContent.includes("÷")){
                if(!detailsOfCalculus.textContent.includes("-")){
                    arr.pop();
                    detailsOfCalculus.textContent=arr.join("");
                    resultBox.textContent="";
                }else if(detailsOfCalculus.textContent[0]==="-"){
                    
                    let b= arr.shift()
                    
                    if(arr.indexOf("-")!==-1){
                        console.log("aca")
                        arr.unshift(b);
                        arr.pop();
                        detailsOfCalculus.textContent=arr.join("");
                                    
                       resultBox.textContent=calculate(detailsOfCalculus.textContent)
    
                    }else{
                       arr.unshift(b); 
                       arr.pop();
                       detailsOfCalculus.textContent=arr.join("");
                       resultBox.textContent="";
                       
                    }
                    
                }
                
                
            }else{
                    arr.pop();
                    detailsOfCalculus.textContent=arr.join("");
                    resultBox.textContent=calculate(detailsOfCalculus.textContent);
            }
            
            
        }
    }


    if(e.keyCode===27){
        
        
            detailsOfCalculus.textContent="";
            resultBox.textContent="";
            
        
    }

    if(e.keyCode===46){
        if(resultBox.classList.contains("enlarge")){
            resultBox.classList.remove("enlarge");
            detailsContainer.classList.remove("hide");
            detailsOfCalculus.textContent="";
            resultBox.textContent="";
        }
        
        let indexArr=[];
        indexArr.push(detailsOfCalculus.textContent.lastIndexOf("+"));
        indexArr.push(detailsOfCalculus.textContent.lastIndexOf("-"));
        indexArr.push(detailsOfCalculus.textContent.lastIndexOf("X"));
        indexArr.push(detailsOfCalculus.textContent.lastIndexOf("÷"));
        console.log(indexArr)

        

        let stopI=Math.max(...indexArr);
        console.log(stopI)
        let arr=detailsOfCalculus.textContent.split("");
        console.log(arr)
        if(arr[stopI]!=="-"){
            if(stopI===-1){
                console.log("aqui")
                arr.splice(0,);           
                detailsOfCalculus.textContent=arr.join("");
                resultBox.textContent=calculate(detailsOfCalculus.textContent);
            }else{
                
                arr.splice(stopI,)
                console.log(arr)
                detailsOfCalculus.textContent=arr.join("");
                resultBox.textContent=calculate(detailsOfCalculus.textContent);
            }
            
        }else if(arr[stopI]==="-" && (arr[stopI-1]==="X" || arr[stopI-1]==="÷")){
            arr.splice(stopI-1,);
            detailsOfCalculus.textContent=arr.join("");
            resultBox.textContent=calculate(detailsOfCalculus.textContent);
        }else{
            
            arr.splice(stopI,);
            
            
            detailsOfCalculus.textContent=arr.join("");
            resultBox.textContent=calculate(detailsOfCalculus.textContent);
        }
        
    }



    if(e.keyCode===13){////el ingresante es enter
             
        let temp=detailsOfCalculus.textContent.split(/[÷X+-]/);
            console.log(temp)
            if(temp.length===1){
               
            }else if(temp.length===2){
                if(temp[1]===""){
                   
                }else{
                   
                    
                    resultBox.classList.add("enlarge");
                    detailsContainer.classList.add("hide");
                    equalCount++;
                }
                
            }else{
                
                console.log(detailsOfCalculus.textContent);
                calculate(detailsOfCalculus.textContent)
                resultBox.textContent=calculate(detailsOfCalculus.textContent);
                resultBox.classList.add("enlarge");
                detailsContainer.classList.add("hide");
                    equalCount++;
            }
    }

    
    resultBox.textContent=calculate(detailsOfCalculus.textContent);
}

function addNumber(e){
    if(e.keyCode==48 ||e.keyCode==96 ){
        //0
        detailsOfCalculus.textContent+=e.key;
    }else if(e.keyCode==49 ||e.keyCode==97){//1
        detailsOfCalculus.textContent+=e.key;
    }
    else if(e.keyCode==50 ||e.keyCode==98){//2
        detailsOfCalculus.textContent+=e.key;
    }
    else if(e.keyCode==51 ||e.keyCode==99){//3
        detailsOfCalculus.textContent+=e.key;
    }
    else if(e.keyCode==52 ||e.keyCode==100){//4
        detailsOfCalculus.textContent+=e.key;
    }
    else if(e.keyCode==53 ||e.keyCode==101){//5
        detailsOfCalculus.textContent+=e.key;
    }
    else if(e.keyCode==54 ||e.keyCode==102){//6
        detailsOfCalculus.textContent+=e.key;
    }
    else if(e.keyCode==55 ||e.keyCode==103){//7
        detailsOfCalculus.textContent+=e.key;
    }
    else if(e.keyCode==56 ||e.keyCode==104){//8
        detailsOfCalculus.textContent+=e.key;
    }
    else if(e.keyCode==57 ||e.keyCode==105){//9
        detailsOfCalculus.textContent+=e.key;
    }
    else if(e.keyCode==190 ||e.keyCode==110){// .
        detailsOfCalculus.textContent+=e.key;
    }else if(e.keyCode==107 ||e.keyCode==187){// +
        detailsOfCalculus.textContent+=e.key;
    }else if(e.keyCode==109 ||e.keyCode==189){// -
        detailsOfCalculus.textContent+=e.key;
    }else if(e.keyCode==106){// * , X
        detailsOfCalculus.textContent+="X";
    }else if(e.keyCode==111){// /  , ÷
        detailsOfCalculus.textContent+="÷";
    }
}



clearButtonsArr.forEach(btn=>btn.addEventListener("click",function(){
    if(btn.textContent==="C"){
        
        detailsOfCalculus.textContent="";
        resultBox.textContent="";
        
    }else if(btn.textContent==="CE"){
        if(resultBox.classList.contains("enlarge")){
            resultBox.classList.remove("enlarge");
            detailsContainer.classList.remove("hide");
            detailsOfCalculus.textContent="";
            resultBox.textContent="";
        }
        
        let indexArr=[];
        indexArr.push(detailsOfCalculus.textContent.lastIndexOf("+"));
        indexArr.push(detailsOfCalculus.textContent.lastIndexOf("-"));
        indexArr.push(detailsOfCalculus.textContent.lastIndexOf("X"));
        indexArr.push(detailsOfCalculus.textContent.lastIndexOf("÷"));
        console.log(indexArr)

        

        let stopI=Math.max(...indexArr);
        console.log(stopI)
        let arr=detailsOfCalculus.textContent.split("");
        console.log(arr)
        if(arr[stopI]!=="-"){
            if(stopI===-1){
                console.log("aqui")
                arr.splice(0,);           
                detailsOfCalculus.textContent=arr.join("");
                resultBox.textContent=calculate(detailsOfCalculus.textContent);
            }else{
                
                arr.splice(stopI,)
                console.log(arr)
                detailsOfCalculus.textContent=arr.join("");
                resultBox.textContent=calculate(detailsOfCalculus.textContent);
            }
            
        }else if(arr[stopI]==="-" && (arr[stopI-1]==="X" || arr[stopI-1]==="÷")){
            arr.splice(stopI-1,);
            detailsOfCalculus.textContent=arr.join("");
            resultBox.textContent=calculate(detailsOfCalculus.textContent);
        }else{
            
            arr.splice(stopI,);
            
            
            detailsOfCalculus.textContent=arr.join("");
            resultBox.textContent=calculate(detailsOfCalculus.textContent);
        }
        
    }else if(btn.textContent==="⌫"){
        let arr=detailsOfCalculus.textContent.split("");
        if(!detailsOfCalculus.textContent.includes("+")&&!detailsOfCalculus.textContent.includes("X")&&!detailsOfCalculus.textContent.includes("÷")){
            if(!detailsOfCalculus.textContent.includes("-")){
                arr.pop();
                detailsOfCalculus.textContent=arr.join("");
                resultBox.textContent="";
            }else if(detailsOfCalculus.textContent[0]==="-"){
                
                let b= arr.shift()
                
                if(arr.indexOf("-")!==-1){
                    console.log("aca")
                    arr.unshift(b);
                    arr.pop();
                    detailsOfCalculus.textContent=arr.join("");
                                
                   resultBox.textContent=calculate(detailsOfCalculus.textContent)

                }else{
                   arr.unshift(b); 
                   arr.pop();
                   detailsOfCalculus.textContent=arr.join("");
                   resultBox.textContent="";
                   
                }
                
            }
            
            
        }else{
                arr.pop();
                detailsOfCalculus.textContent=arr.join("");
                resultBox.textContent=calculate(detailsOfCalculus.textContent);
        }
        
        
    }

}))

numbersArr.forEach(btn=>btn.addEventListener("click",function(){
    if(equalCount!==0){
        resultBox.classList.remove("enlarge");
        detailsContainer.classList.remove("hide");
        detailsOfCalculus.textContent="";
        resultBox.textContent="";
        equalCount=0;
    }

   
    if(btn.textContent!=="."){
        if(detailsOfCalculus.textContent[0]!=="0"){
            detailsOfCalculus.textContent+=btn.textContent;
        }else{
            
            let tempArr=detailsOfCalculus.textContent.split("");
            
            if(!tempArr[1]){
                tempArr[0]=btn.textContent;
                detailsOfCalculus.textContent=tempArr[0];
                
            }else{
                detailsOfCalculus.textContent+=btn.textContent;
            }
            
        }
        
    }else{//se selecciona el boton del "."
        if(!detailsOfCalculus.textContent.includes(".")){//si detalle no  tiene un "."
            detailsOfCalculus.textContent+=btn.textContent;
        }else{//detalle si tiene un "."
            if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="."){//si no termina en "."
                 let temp=detailsOfCalculus.textContent.split(/[÷X+-]/);
                //console.log(temp)
                let lastN=temp[temp.length-1]
                let splitN=lastN.split("");
                if(!splitN.includes(".")){
                    detailsOfCalculus.textContent+=btn.textContent;
                }else{
                    console.log("nada")
                }
               
            }else{//si detalles no termina en "."
              //  let temp=detailsOfCalculus.textContent.split(/[÷X+-]/);
                
            }
        }
    }
    console.log(detailsOfCalculus.textContent);
    if(detailsOfCalculus.textContent.includes("÷")||detailsOfCalculus.textContent.includes("X")||detailsOfCalculus.textContent.includes("+")||detailsOfCalculus.textContent.includes("-")){
        //console.log(true)
        calculate(detailsOfCalculus.textContent)
        console.log(calculate(detailsOfCalculus.textContent))
        resultBox.textContent=calculate(detailsOfCalculus.textContent);
    }
}));


operatorsArr.forEach(btn=>btn.addEventListener("click",function(){
    if(equalCount!==0){
        resultBox.classList.remove("enlarge");
        detailsContainer.classList.remove("hide");
        detailsOfCalculus.textContent=resultBox.textContent;
        resultBox.textContent="";
        equalCount=0;
    }


    if(btn.textContent==="="){
        let temp=detailsOfCalculus.textContent.split(/[÷X+-]/);
        console.log(temp)
        if(temp.length===1){
            console.log("no hacer nada")
        }else if(temp.length===2){
            if(temp[1]===""){
                console.log("tampoco hacer nada")
            }else{
                console.log("agrandar el resultado")
                console.log(detailsOfCalculus.textContent);
                resultBox.classList.add("enlarge");
                detailsContainer.classList.add("hide");
                equalCount++;
            }
            
        }else{
            
            console.log(detailsOfCalculus.textContent);
            calculate(detailsOfCalculus.textContent)
            resultBox.textContent=calculate(detailsOfCalculus.textContent);
            resultBox.classList.add("enlarge");
            detailsContainer.classList.add("hide");
                equalCount++;
        }
    }else{
        
        if(btn.textContent==="+"||btn.textContent==="X"||btn.textContent==="÷"){//operador + - /
            if(detailsOfCalculus.textContent===""){//detalle vacio
                console.log("no hacer nada")
            }else{//detalles no vacio
                if(!detailsOfCalculus.textContent.includes("÷")&&!detailsOfCalculus.textContent.includes("X")&&!detailsOfCalculus.textContent.includes("+")&&!detailsOfCalculus.textContent.includes("-")){//detalle solo numeros
                    detailsOfCalculus.textContent+=btn.textContent;
                }else{//detalle si incluye + - X -
                  //  console.log(detailsOfCalculus.textContent)
                    
                    if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]===btn.textContent){//ultimo character de detalles igual al operador seleccionado
                        console.log("nada")//no se hace nada
                    }else{//ultimo character no es igual al operador seleccionado
                      //  console.log(btn.textContent)
                        let tempArr=detailsOfCalculus.textContent.split(""); 
                        //console.log(tempArr)

                        if(detailsOfCalculus.textContent.length===1){//resultado solo 1 character
                    
                            if(detailsOfCalculus.textContent==="-"){//character es menos "-"
                                detailsOfCalculus.textContent="";                               
                                
                            }
                        }
                             
                        else if(tempArr[tempArr.length-1]==="÷"||tempArr[tempArr.length-1]==="+"||tempArr[tempArr.length-1]==="X"){//detalles termina en + * /
                            tempArr[tempArr.length-1]=btn.textContent;                        
                            detailsOfCalculus.textContent=tempArr.join("");
                        }    
                        else{
                            if(tempArr[tempArr.length-1]==="-"){
                                tempArr[tempArr.length-1]=btn.textContent;                        
                                detailsOfCalculus.textContent=tempArr.join("");
                            }else{
                                detailsOfCalculus.textContent+=btn.textContent;
                            }
                            
                        }              
                        
                    }
                }
                                            
                                
            }
            
        }else{
            
            //cuando user presiona el boton del signo menos "-""
            if(detailsOfCalculus.textContent===""){//resultado vacio
                detailsOfCalculus.textContent+=btn.textContent;
            }else{//resultado no esta vacio
                if(detailsOfCalculus.textContent.length===1){//resultado solo 1 character
                    
                    if(detailsOfCalculus.textContent==="-"){//character es menos "-"
                        console.log("nada")
                        
                    }else {
                        detailsOfCalculus.textContent+=btn.textContent;
                    }
                }else{//resultado mas de 1 character
                    if(!detailsOfCalculus.textContent.includes("÷")&&!detailsOfCalculus.textContent.includes("X")&&!detailsOfCalculus.textContent.includes("+")&&!detailsOfCalculus.textContent.includes("-")){//detalles solo incluye numeros
                        detailsOfCalculus.textContent+=btn.textContent;
                    }
                    else if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="+"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="X"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="÷"&&detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]!=="-"){//detalles si incluye un operador + - * ÷
                        detailsOfCalculus.textContent+=btn.textContent;
                    }else{
                        if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]==="+"){//si el ultimo character es "+"
                            
                            let tempArr=detailsOfCalculus.textContent.split("");
                                                     
                            tempArr[tempArr.length-1]=btn.textContent;
                            detailsOfCalculus.textContent=tempArr.join("");
                        }else if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]==="X" || detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]==="÷" ){//el ultimo es "X" o "÷"
                            detailsOfCalculus.textContent+=btn.textContent;
                        }else if(detailsOfCalculus.textContent[detailsOfCalculus.textContent.length-1]==="-"){
                            console.log("nada")
                        }
                    }
                }
            }

        }
        

    }
}));


function calculate(str){
    let indexArr=[];
    indexArr.push(str.lastIndexOf("+"));
    indexArr.push(str.lastIndexOf("-"));
    indexArr.push(str.lastIndexOf("X"));
    indexArr.push(str.lastIndexOf("÷"));
    let stopI=Math.max(...indexArr);
    console.log(stopI)
    let arr=str.split("");
    console.log(arr)
    let newArr=[];
    let temp=[];
    let num="";
    for(let i=0;i<arr.length;i++){
        if(i<=stopI){
            if(arr[i]=="+"||arr[i]=="-"||arr[i]=="X"||arr[i]=="÷"){
                if(arr[i]==="-"&&i===0){
                    temp.push(arr[i]);
                }else if(arr[i]==="-" && (arr[i-1]==="X"||arr[i-1]==="÷")){
                    temp.push(arr[i]);
                }
                else{
                    num=temp.join("");
                    newArr.push(num);
                    newArr.push(arr[i]);
                    temp=[];
                    num="";
                }
                   
                
                
            }else{
                temp.push(arr[i]);
            }
        }else{
            temp.push(arr[i]);
            num=temp.join("");
            if(i===arr.length-1){
                newArr.push(num);
            }
            
        }
       
    }
    
    console.log(newArr)
    let count=0;
    newArr.forEach(element => {
        let tempo=[];
        tempo=element.split("")
       
        if(tempo.includes(".")){
            count++;
        }
    });
    let numberTypeArr=[];
    if(count===0){
        newArr.forEach(e=>{
            if(e==="-"||e==="+"||e==="X"||e==="÷"){
                numberTypeArr.push(e);  
            }else{
                
                numberTypeArr.push(parseInt(e));
            }
        })

                 



        console.log(numberTypeArr)

        console.log(numberTypeArr.length)
        while(numberTypeArr.length>1){
            if(numberTypeArr.includes("÷")){
                console.log(numberTypeArr.indexOf("÷"))
                if(numberTypeArr.includes("X")){
                    if(numberTypeArr.indexOf("÷")<numberTypeArr.indexOf("X")){

                        numberTypeArr.splice(numberTypeArr.indexOf("÷")-1,3,numberTypeArr[numberTypeArr.indexOf("÷")-1]/numberTypeArr[numberTypeArr.indexOf("÷")+1]);
                    }else{
                        numberTypeArr.splice(numberTypeArr.indexOf("X")-1,3,numberTypeArr[numberTypeArr.indexOf("X")-1]*numberTypeArr[numberTypeArr.indexOf("X")+1]);
                    }
                }else{
                    numberTypeArr.splice(numberTypeArr.indexOf("÷")-1,3,numberTypeArr[numberTypeArr.indexOf("÷")-1]/numberTypeArr[numberTypeArr.indexOf("÷")+1]);
                }
            }else if(numberTypeArr.includes("X")){
                
                if(numberTypeArr.includes("÷")){
                    if(numberTypeArr.indexOf("÷")<numberTypeArr.indexOf("X")){
                        numberTypeArr.splice(numberTypeArr.indexOf("÷")-1,3,numberTypeArr[numberTypeArr.indexOf("÷")-1]/numberTypeArr[numberTypeArr.indexOf("÷")+1]);
                    }else{
                        numberTypeArr.splice(numberTypeArr.indexOf("X")-1,3,numberTypeArr[numberTypeArr.indexOf("X")-1]*numberTypeArr[numberTypeArr.indexOf("X")+1]);
                    }
                }else{
                    numberTypeArr.splice(numberTypeArr.indexOf("X")-1,3,numberTypeArr[numberTypeArr.indexOf("X")-1]*numberTypeArr[numberTypeArr.indexOf("X")+1]);
                }
            }else if(numberTypeArr.includes("+")){
                if(numberTypeArr.includes("-")){
                    if(numberTypeArr.indexOf("+")<numberTypeArr.indexOf("-")){
                        numberTypeArr.splice(numberTypeArr.indexOf("+")-1,3,numberTypeArr[numberTypeArr.indexOf("+")-1]+numberTypeArr[numberTypeArr.indexOf("+")+1]);
                    }else{
                        numberTypeArr.splice(numberTypeArr.indexOf("-")-1,3,numberTypeArr[numberTypeArr.indexOf("-")-1]-numberTypeArr[numberTypeArr.indexOf("-")+1]);
                    }
                }else{
                    numberTypeArr.splice(numberTypeArr.indexOf("+")-1,3,numberTypeArr[numberTypeArr.indexOf("+")-1]+numberTypeArr[numberTypeArr.indexOf("+")+1]);
                }
            }else if(numberTypeArr.includes("-")){
                if(numberTypeArr.includes("+")){
                    if(numberTypeArr.indexOf("+")<numberTypeArr.indexOf("-")){
                        numberTypeArr.splice(numberTypeArr.indexOf("+")-1,3,numberTypeArr[numberTypeArr.indexOf("+")-1]+numberTypeArr[numberTypeArr.indexOf("+")+1]);
                    }else{
                        numberTypeArr.splice(numberTypeArr.indexOf("-")-1,3,numberTypeArr[numberTypeArr.indexOf("-")-1]-numberTypeArr[numberTypeArr.indexOf("-")+1]);
                    }
                }else{
                    numberTypeArr.splice(numberTypeArr.indexOf("-")-1,3,numberTypeArr[numberTypeArr.indexOf("-")-1]-numberTypeArr[numberTypeArr.indexOf("-")+1]);
                }
            }
        
        }

        console.log(numberTypeArr)
        console.log(numberTypeArr[0])

        if(isNaN(numberTypeArr[0])){
            console.log("continuar")
            return "";
        }


        if(!numberTypeArr[0].toString().includes(".")){
            if(numberTypeArr[0].toString().length>10){
                return numberTypeArr[0].toPrecision(10);

            }else{
                return numberTypeArr[0];
            }
            
        }else{
               let t=numberTypeArr[0].toPrecision(10);
               console.log(t)
               console.log(t.match(/0+$/))
               if(t.match(/0+$/)){
                    let a=t.split(/0+$/)
                    return a[0]
               }
               else{
                return numberTypeArr[0].toPrecision(10);
               }            
            

        }
    }else{
        newArr.forEach(e=>{
            if(e==="-"||e==="+"||e==="X"||e==="÷"){
                numberTypeArr.push(e);  
            }else{
                
                numberTypeArr.push(parseFloat(e));
            }
        })

        console.log(numberTypeArr)
        while(numberTypeArr.length>1){
            if(numberTypeArr.includes("÷")){
                console.log(numberTypeArr.indexOf("÷"))
                if(numberTypeArr.includes("X")){
                    if(numberTypeArr.indexOf("÷")<numberTypeArr.indexOf("X")){
                        numberTypeArr.splice(numberTypeArr.indexOf("÷")-1,3,numberTypeArr[numberTypeArr.indexOf("÷")-1]/numberTypeArr[numberTypeArr.indexOf("÷")+1]);
                    }else{
                        numberTypeArr.splice(numberTypeArr.indexOf("X")-1,3,numberTypeArr[numberTypeArr.indexOf("X")-1]*numberTypeArr[numberTypeArr.indexOf("X")+1]);
                    }
                }else{
                    numberTypeArr.splice(numberTypeArr.indexOf("÷")-1,3,numberTypeArr[numberTypeArr.indexOf("÷")-1]/numberTypeArr[numberTypeArr.indexOf("÷")+1]);
                }
            }else if(numberTypeArr.includes("X")){
                
                if(numberTypeArr.includes("÷")){
                    if(numberTypeArr.indexOf("÷")<numberTypeArr.indexOf("X")){
                        numberTypeArr.splice(numberTypeArr.indexOf("÷")-1,3,numberTypeArr[numberTypeArr.indexOf("÷")-1]/numberTypeArr[numberTypeArr.indexOf("÷")+1]);
                    }else{
                        numberTypeArr.splice(numberTypeArr.indexOf("X")-1,3,numberTypeArr[numberTypeArr.indexOf("X")-1]*numberTypeArr[numberTypeArr.indexOf("X")+1]);
                    }
                }else{
                    numberTypeArr.splice(numberTypeArr.indexOf("X")-1,3,numberTypeArr[numberTypeArr.indexOf("X")-1]*numberTypeArr[numberTypeArr.indexOf("X")+1]);
                }
            }else if(numberTypeArr.includes("+")){
                if(numberTypeArr.includes("-")){
                    if(numberTypeArr.indexOf("+")<numberTypeArr.indexOf("-")){
                        numberTypeArr.splice(numberTypeArr.indexOf("+")-1,3,numberTypeArr[numberTypeArr.indexOf("+")-1]+numberTypeArr[numberTypeArr.indexOf("+")+1]);
                    }else{
                        numberTypeArr.splice(numberTypeArr.indexOf("-")-1,3,numberTypeArr[numberTypeArr.indexOf("-")-1]-numberTypeArr[numberTypeArr.indexOf("-")+1]);
                    }
                }else{
                    numberTypeArr.splice(numberTypeArr.indexOf("+")-1,3,numberTypeArr[numberTypeArr.indexOf("+")-1]+numberTypeArr[numberTypeArr.indexOf("+")+1]);
                }
            }else if(numberTypeArr.includes("-")){
                if(numberTypeArr.includes("+")){
                    if(numberTypeArr.indexOf("+")<numberTypeArr.indexOf("-")){
                        numberTypeArr.splice(numberTypeArr.indexOf("+")-1,3,numberTypeArr[numberTypeArr.indexOf("+")-1]+numberTypeArr[numberTypeArr.indexOf("+")+1]);
                    }else{
                        numberTypeArr.splice(numberTypeArr.indexOf("-")-1,3,numberTypeArr[numberTypeArr.indexOf("-")-1]-numberTypeArr[numberTypeArr.indexOf("-")+1]);
                    }
                }else{
                    numberTypeArr.splice(numberTypeArr.indexOf("-")-1,3,numberTypeArr[numberTypeArr.indexOf("-")-1]-numberTypeArr[numberTypeArr.indexOf("-")+1]);
                }
            }
        
        }
        console.log(numberTypeArr)
        if(isNaN(numberTypeArr[0])){
            console.log("continuar")
            return "";
        }
        if(!numberTypeArr[0].toString().includes(".")){
            if(numberTypeArr[0].toString().length>10){
                
                return numberTypeArr[0].toPrecision(10);

            }else{
                return numberTypeArr[0];
            }
            
        }else{
            
               let t=numberTypeArr[0].toPrecision(10);
               console.log(t)
               console.log(t.match(/0+$/))
               
               if(t.match(/0+$/)){
                    let a=t.split(/0+$/)
                    return a[0]
               } else{
                   console.log("chaha")
                   return t;
               }           
            

        }
       
        
        

    




    
    }

    




}