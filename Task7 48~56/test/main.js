// let myFriends=["Mounir","Noga","Mama","Baba","Fofo",1,2,3,4,5]

// for (let i=0; i < myFriends.length; i++){
//     if(typeof myFriends[i]=="string"){
//         console.log(myFriends[i]);
//     }
// }
// console.log("******************");
// let names=[]
// for(i=0; i<myFriends.length; i++){
//     if(typeof myFriends[i]=="string"){
//         names.push(myFriends[i])
//     }
// }
// console.log(names);





// let products=["Iphone","Laptop","PS5","Nintendo Switch"]
// let colors=["Red","Blue","Silver"]
// let models=["2021","2022"]

// for(i=0; i<products.length; i++){
//     console.log("-".repeat(10));
//     console.log(products[i]);
//     console.log("-".repeat(10));
//     console.log("Colors:");
//     for(j=0; j<colors.length; j++){
//         console.log(colors[j]);
//     }
//     console.log("Models:");
//     for(let k=0; k<models.length; k++){
//         console.log(models[k]);
//     }
//  }


let myFriends1=["Mounir","Noga","Mama","Baba","Fofo",1,2,3,4,5];
let sweet=["so Sweet","Super Sweet"]
let number=5;
document.write(`<h1>My Family Members are ${number}</h1>`)
for (let i=0; i < number; i++){
    document.write(`<div><h1>${i + 1}-  ${myFriends1[i]}</h1></div>`)
    document.write(`<h2 style="color: red">Sweet measurement</h2>`)
    for(let j=0; j<sweet.length; j++){
        document.write(`<h1 style="color: blue">${sweet[j]}</h1>`)
    }
    document.write(`<p>${sweet.join(" | ")}</p>`)
    
}


for(m=0; m<=20; m++){
    console.log(m*(m+1)/2); // mawgmo3 el gam3 mn 0 l7d 20 
}