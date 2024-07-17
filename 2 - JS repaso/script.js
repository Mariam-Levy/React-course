const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}



// ----------- DESTRUCTURACION - DESTRUCTURING ---------------

const book = getBook(3);

// ---- sin desestructuracion: -----
// const title = book.title;
// const author = book.author;


// Quokka: permite ejecutar codigo de JS dentro del codigo de VS


/* destucturing  es muy util cuando necesitamos basicamente obtener algunos datos de un object o de una array */

//__________________
//OBJECT DESTRUCTURING : crea las nuevas variables pero de una sola vez, es mejor practica.

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

console.log(title, author, pages, genres);


//DESTRUCTURING de ARRAYS: a diferencia de la destructuracion de objetos que se basa en los nombres de las propiedades, en la destructuracion de arrays se basa en orden de los elementos del array

//sin destructuring:
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// console.log(primaryGenre, secondaryGenre);

//aplicando destructuracion de arrays:
/* const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre); */





// ----------- REST / SPREAD OPERATOR ---------------

//REST OPERATOR: nos ayuda a obtener el resto de los generos que no sean ni el primero ni el segundo en un array, basicamente es un array con el resto de los otros generos. Y siempre va al final.
const [pGenre, sGenre, ...otherGenres] = genres;
console.log(pGenre, sGenre, otherGenres);


// SPERAD OPERATOR:
/* puede ser usada tanto en array como en objetos */

//con arrays: se puede añadir una nueva propiedad al array, ya sea al inicio o al final
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);


//con objetos: nos permite añadir nuevas propiedades y tambien actualizar las existentes
const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19", // adicionando una nueva propiedad
  pages: 1210 //sobreescribiendo una ya existente propiedad
};
updatedBook;






// ----------- TEMPLATE LITERALS ---------------
//nos permite crear strings que contienen algunas variables de JS, o cualquier expresion de JS ``
const sumary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${publicationDate.split("-")[0]}`;
sumary;





// ----------- OPERADOR TERNARIO / TERNARIES INSTEAD ---------------
/* consta de 3 partes:
  1.- condicion
  2.- resultado de la operacion en caso que sea verdadera
  3.- y la ultima parte en caso de que sea falsa.
  */
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`the book has ${pagesRange} pages`);






// ----------- ARROW FUNCTION ---------------
//forma convencional:
/* function getYear(str) {
  return str.split("-")[0];
}
console.log(getYear(publicationDate)); */


//arrow function
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));







// ----------- SHORT-CIRCUITING AND LOGICAL OPERATORS: &&, ||, ?? ---------------
/*
en JS algunos operadores como AND y OR, tienen una caracteristica llamada "SHORT-CIRCUITING", esto significa que en determinadas condiciones el operador devolvera inmediatamente el primer valor y ni siquiera mirara el segundo.
*/

// && operator: entra en "SHORT-CIRCUITING" cuando el primer valor es falso
console.log(false && "some sting");
console.log(hasMovieAdaptation && "this book has a movie");


// falsy: 0, "", null, undefined:
console.log("jonas" && "some string");
console.log(0 && "some string");


//truthy:
console.log(true || "some string");
console.log(false || "some string");


console.log(book.translations.spanish);


//en caso que no haya traduccion:
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED"
spanishTranslation;






// ----------- OPTIONAL CHAINING ---------------
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));








/*
Los tres metodos funcionales de array en JS son: map, filter y reduce.
estos metodos no mutan el array original, sino que devuelven un nuevo array basado en el original.
*/


// ----------- ARRAY MAP METHOD / continua en "script2"










