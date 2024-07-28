import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//___________________________________________

function App() {
  return (
    <div className="container header">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header footer">
      <h1 style={style}>Fast React Piza Co.</h1>
    </header>
  );
}

function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (<p>We're still working on our menu. Please come back later ☺</p>)}


      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="/pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="/pizzas/funghi.jpg"
      /> */}

    </main>
  );
}


function Pizza(props) {
  console.log(props);

  if (props.pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.name} />

      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}


function Footer() {
  const hour = new Date().getHours()
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("we're currently open!"); else alert("Sorry we're closed");

  // if (!isOpen) return (<p>CLOSED</p>);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>)
      }
    </footer >
  );

  // return React.createElement('footer', null, "We're currently open!")
}

function Order(props) {
  return <div className="order">
    <p>
      We're open until {props.closeHour}:00. Come visit us or order online.
    </p>
    <button className="btn">Order</button>
  </div>
}


//-------- REACT v18 ------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/* 
en react hay dos reglas importantes cuando escribimos componentes como funciones:
    1.- el nombre de la funcion tiene que empezar con una letra mayuscula.
    2.- la funcion tiene que devolver alguna marca, por lo general en forma de JSX.
NOTA: no se puede devolver null.
    - un componente solo puede devolver exactamente un elemento y no dos elementos, esto puede arrojarnos un error. Al menos que encerremos dichos elementos dentro de un div.
    
    
    - no podemos usar las clases porque es una palabra reservada en JS, por ello usaremos "className"
*/

/* 
renderizar una lista (rendering lists): es cuando tenemos array y queremos crear un componente por cada elemento del array
*/

