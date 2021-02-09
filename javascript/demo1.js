let book = {
  title: "Professional JavaScript",
  authors: ["Nicholas C. Zakas", "Matt Frisbie"],
  edition: 4,
  year: 2017,
  releaseDate:new Date(2017,11,1)
  // toJSON:function(){
  //   return this.title
  // }
};
// let jsonText = JSON.stringify(book, ["title", "edition"]);
let jsonText = JSON.stringify(book);
let bookCopy=JSON.parse(jsonText,(key,value)=>key=='releaseDate'?new Date(value):value)
console.log(bookCopy.releaseDate.getFullYear());
// let jsonText = JSON.stringify(book, (key, value) => {
//   switch (key) {
//     case "authors":
//       return value.join(",");
//     case "year":
//       return 5000;
//     case "edition":
//       return undefined;
//     default:
//       return value;
//   }
// });
// console.log(jsonText);
