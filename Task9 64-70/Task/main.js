// Task1 ****************************8
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    return `${zName.slice(0, 5) + " " + zName[6].slice(0, 1).toUpperCase()} .`;
  }
  function ageWithMessage(zAge) {
    return `${zAge} `;

    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    return `${zCountry}`;
  }
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern(zName)} ${ageWithMessage(
      zAge
    )} , You live in ${countryTwoLetters(zCountry).slice(0, 2).toUpperCase()} `;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
console.log(getDetails("Meno adel", "27 Is The Age", "Egypt"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
// Task2 **********************************************************************************

itsMe = ()=> `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function
urlCreate=(protocol, web, tld) =>`${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
// Task3 **********************************************************************************
// function checker(zName) {
//     return function (status) {
//       return function (salary) {
//         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//       };
//     };
//   }
  checker=(zName)=>(status)=>(salary)=>status==="Available"? `${zName}, My Salary Is ${salary}` : `Iam Not Available`;
  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
// Task4 **********************************************************************************

    // function specialMix(...data) {
    //     let result=0
    //     for (let i = 0; i < data.length; i++) {
    //             if(typeof data[i]==="string")  {
    //                 continue

    //             }else if(typeof data[i] ===NaN){
    //                 parseInt(data[i]);
    //                 result+=data[i]
                
    //             }else if(typeof data[i]==="number"){
    //                 result+=data[i]
    //             }
    //             console.log(result);
    //     }
    //   }
  function specialMix(...data) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
      if (parseInt(data[i])) result += parseInt(data[i]);
    }
    if (result === 0) return "All is strings";
    return result;
  }


  console.log(specialMix("30Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings