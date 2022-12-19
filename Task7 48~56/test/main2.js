// let products=["Iphone","Laptop","PS5","Nintendo Switch"]
// let colors=["Red","Blue","Silver"]
// let models=["2021","2022"]

// for(i=0; i<products.length; i++){
//     console.log("_".repeat(10));
//     console.log(`↓ ${products[i]}`);
//     console.log("_".repeat(10));
//     console.log("Colors:");
//     for (let j = 0; j < colors.length; j++) {
//          console.log(colors[j]);
//     }
//     console.log("-Models-:");
//     for (let m = 0; m < models.length; m++) {
//         console.log(models[m]);
        
//     }
// }

// let products=["Iphone","Laptop","PS5","Nintendo Switch"]
// let colors=["Red","Blue","Silver"]
// let models=["2021","2022"]
// document.write(`<h1>We Have ${products.length} Products <h1/>`)

// for (let i = 0; i < products.length; i++) {
//     document.write(`<hr>`)
//     document.write(`<div> ${products[i]}</div>`)
//     document.write(`<hr>`)
//     document.write(`<p>We Have it in the following Colors:</p>`)

//     for (let j = 0; j < colors.length; j++) {
//         document.write(`<p>${colors[j]}</p>`) 
//     }
    
//     document.write(`<p>We Have it in the following Models:</p>`)

//     for (let k = 0; k < models.length; k++) {
//         document.write(`<p>${models[k]}</p>`) 
//     }
    
// }

let products=["Iphone","Laptop","PS5","Nintendo Switch"]
let colors=["Red","Blue","Silver"]
let models=["2021","2022"]
document.write(`<h2>We Have ${products.length} Products <h2/>`)
for (let i = 0; i < products.length; i++) {
        document.write(`<div>`);
        document.write(`<h3>${products[i]}</h3>`)
        for (let m = 0; m < colors.length; m++) {
            document.write(`<h4>${colors[m]}</h4>`);
        }
        
        for (let k = 0; k < models.length; k++) {
            document.write(`<h4>${models[k]}</h4>`);
        }
        document.write(`<hr>`);
     
        console.log(products[i]);
}
let i=0
