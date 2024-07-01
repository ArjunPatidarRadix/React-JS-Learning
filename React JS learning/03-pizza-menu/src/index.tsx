import React, { CSSProperties } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProfileCard from "./ProfileCard";

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

function App() {
  return <ProfileCard />;
}

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

function Header() {
  const style: CSSProperties = {};
  return (
    <header className="header">
      <h1 style={style}>Fast react Pizza co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      <ul className="pizzas">
        {pizzas.map((pizzaData, index) => {
          return (
            <Pizza
              key={index}
              name={pizzaData.name}
              ingredient={pizzaData.ingredients}
              photoName={pizzaData.photoName}
              price={pizzaData.price}
              soldOut={pizzaData.soldOut}
            />
          );
        })}
      </ul>
    </main>
  );
}

interface IPizzaProps {
  name: string;
  ingredient: string;
  photoName: string;
  price: number;
  soldOut: boolean;
}
function Pizza({ name, ingredient, photoName, price, soldOut }: IPizzaProps) {
  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt="Pizza" />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()},{" "}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }: { closeHour: number }) {
  return (
    <div className="order">
      <p>
        We're currently open until {closeHour}:00. Come visit us and order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
