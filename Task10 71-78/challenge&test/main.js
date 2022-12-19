// let myNumbs=[2,4,6,8,10]
// let tryingMap=myNumbs.map(function(numbers){
//     console.log(`${numbers}`);
//     return numbers + numbers
// })
// console.log(tryingMap);

// function addition(num){
//     return num+num
// }

// let test=myNumbs.map(addition)
// console.log(test);
// let swappingCases="elZERo"
// let result=[];
// for (let i = 0; i < swappingCases.length; i++) {
//     if(swappingCases[i]===swappingCases[i].toLowerCase()){
//         result+=swappingCases[i].toUpperCase()
       

//     }else{
//         result+= swappingCases[i].toLowerCase()

//     }
// }

// let swappingCases2="elZERo"
// let result2=[]
// let testswapping=swappingCases2.split("").map(function(number){
//     if(number==number.toLowerCase()){
//         result2+= number.toUpperCase()
//     }else{
//         result2+=  number.toLowerCase()
//     }
// }) 
// console.log();

// let invertedNumbers=[1,-10,-20,15,100,-30]
// let convert=invertedNumbers.map(function(numb){
//     return numb===-numb?-numb*-numb:-numb
// })
// console.log(convert);

// let ignoreNumbers="elz123eOOOOOOr4o"
// let ign=ignoreNumbers.split("").map(function(ele){
//     return isNaN(parseInt(ele))?ele:""
// }).join("")
// console.log(ign);


// let numbers=[11,20,2,5,17,10];
// let evenNumbers=numbers.filter(function(numb){
//    return numb%2==0 ;
// });
// console.log(evenNumbers);

// let sentence="I Love Foood Code Too Playing Much"
// With Map Solution
// let sen=sentence.split(" ").map(function(lett){
//     return lett.length <= 4 ? console.log(lett) : " "
     

// }).join("")
// console.log(sen);
// With Filter  Solution

// let senfilter=sentence.split(" ").filter(function(element){
//     return element.length<=4
// }).join(" ")
// console.log(senfilter);


// let mix="A13BS2ZK";
// let calc=mix.split("").filter(function(number){
    
//     // return !isNaN(parseInt(number))*   
//     return !isNaN(parseInt(number))
// }).map(function(number){
//    return number*number
// }).join("")
// console.log(calc);


// let biggestWord=["Meno1","MenOOOoooOO2","Menoo3","Menoooo4",'Menooo5']
// let check=biggestWord.reduce(function(acc,current,index){
//     console.log(`Acc ${acc}`);
//     console.log(`current ${current}`);
//     console.log(`index ${index}`);
//     return acc.length > current.length ? acc : current    
// })
// let biggestnumb=[10,26,24,14,70,19]
// let checknum=biggestnumb.reduce(function(acc,current,index){
//     console.log(`Acc ${acc}`);
//     console.log(`current ${current}`);
//     console.log(`index ${index}`);
//     console.log("@@@@@@@@@@@@");
//     return acc > current ? acc : current    
// })
// console.log(checknum);
// **********************************MAP PRACTICE***********************************************
// let swap="elZERo"
// let swapsolve=swap.split("").map(function(ele){
//     return ele===ele.toLowerCase()?ele.toUpperCase():ele.toLowerCase()
// }).join("")
// console.log(swapsolve);

// let negNumbers=[1,-10,-20,15,100,-200]
// let postNumbers=negNumbers.map(function(ele){
//     return -ele;
// })
// console.log(postNumbers);

// // let ignore="Elz123er4o"
// // let zero=ignore.split("").map(function(ele){
// //     return isNaN(ele)? ele :null 
// // }).join("")
// // console.log(zero);
// let ignore="Elz123er4o"
// let zero=ignore.split("").map((ele)=>isNaN(ele)? ele :null).join("")
// console.log(zero);

// **********************************Filter PRACTICE***********************************************


// let friends=["Ahmed","Samah","Sayed","Asmaa","Amgad","Israa"]

// let similarNames=friends.filter(function(ele){
//     return ele.startsWith("A")? ele : ""
// })  
// console.log(similarNames);


// let numberss=[11,20,2,5,17,10]
// let biggerNum=numberss.filter(function(ele){
//     return  ele % 2===0? ele : ""
// })
// console.log(biggerNum);

// let sentence="I Love Foood Code Too Playing Much"
// let newSen=sentence.split(" ").filter(function(ele){
//     return ele.length <= 4 ? ele : ""
// }).join(" ")
// console.log(newSen);
// **********************************Map&Filter Practce***********************************************

let mix="A13BS2ZK";
let newMix=mix.split("").filter(function(ele){
    return !isNaN(ele)
}).map(function (ele){
    return ele*ele
}).join("")

console.log(newMix);
// **********************************Reducer PRACTICE***********************************************

let biggestWord=["Meno1","MenOOOoooOO2","Menoo3","Menoooo4",'Menooo5']
let bigResult=biggestWord.reduce(function(acc,current){
    return acc.length > current.length? acc : current
})
console.log(bigResult);
// How To Make Join Manual
let removeChar=["E","@","@","L","Z","@","@","E","R","@","O"]
let newChar=removeChar.filter(function(ele){
        return ele==="@"? "": ele  
    }).reduce(function(acc,current){
        return `${acc}${current}`
    })
console.log(newChar);
// **********************************Challenge***********************************************


let myString="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z"
let newArr2=myString.split("").filter(function(ele){
    return isNaN(ele)
}).map(function(ele){
    return ele===","?"":ele
}).reduce(function (acc,current){
    return acc+current
}).slice(true,-isNaN(myString)).replaceAll("_"," ")
console.log(newArr2);
// let newArr=myString.split("").filter(function(ele){
//     return isNaN(ele)
// }).map(function(ele1){
//     return ele1 === "," ? "" : ele1
// }).filter(function(ele){
//     return ele==="_"? "":ele  
// }).join("").slice(true)
// console.log(newArr);


