// let myFriends = [
//   "Ahmed",
//   "Sayed",
//   "Ali",
//   ["Shady", "Amr", ["Mohammed", "Gamal"]],
// ];

// let [, , , [a, , [, b]]] = myFriends;
// console.log(a);
// console.log(b);

// let book = "Video";
// let video = "Book";
// // let vault = book;
// // book = video;
// // video = vault;
// // console.log(vault);
// [book, video] = [video, book];
// console.log(book);
// console.log(video);

let chosen = 3;
let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
// const [
//   {
//     title: t,
//     age: a,
//     available: v,
//     skills: [html, css],
//   },
// ] = myFriends;
// console.log(t);
// console.log(a);
// console.log(v);
// console.log(html);
// console.log(css);

if (chosen == 1) {
  const [
    {
      title: t,
      age: a,
      available: v,
      skills: [skill1, skill2],
    },
  ] = myFriends;
  console.log(t);
  console.log(a);
  console.log(v);
  console.log(skill1);
  console.log(skill2);
} else if (chosen == 2) {
  const [
    {},
    {
      title: t,
      age: a,
      available: v,
      skills: [skill1, skill2],
    },
  ] = myFriends;
  console.log(t);
  console.log(a);
  console.log(v);
  console.log(skill1);
  console.log(skill2);
} else if (chosen === 3) {
  const [
    {},
    {},
    {
      title: t,
      age: a,
      available: v,
      skills: [skill1, skill2],
    },
  ] = myFriends;
  console.log(t);
  console.log(a);
  console.log(v);
  console.log(skill1);
  console.log(skill2);
}

// let myTest = [
//   {
//     title: "Osama",
//     age: 39,
//     available: true,
//     skills: ["HTML", "CSS"],
//   },
// ];
// const [{ title: t, age: a, available: v }] = myTest;
// console.log(t);
// console.log(a);
// console.log(v);
