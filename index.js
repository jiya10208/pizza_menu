import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "capsicum, onion, olive oil and rosemary",
    price: 6,
    photoname: "focaccia.jpg",
    soldout: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "tomato and mozarella",
    price: 10,
    photoname: "margherita.jpg",
    soldout: false,
  },
  {
    name: "Pizza spinach",
    ingredients: "tomato, spinach, ricotta and mozarella",
    price: 12,
    photoname: "spinaci.jpg",
    soldout: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "tomato, Pepperoni and mozarella",
    price: 15,
    photoname: "salamino.jpg",
    soldout: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "tomato, ham, aragula and burrata cheese",
    price: 18,
    photoname: "prosciutto.jpg",
    soldout: false,
  },
  {
    name: "funghi",
    ingredients: "capsicum, onion, olive oil and rosemary",
    photoname: "funghi.jpg",
    price: 14,
    soldout: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />

      {/* <Pizza /> */}
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1 className="header">Fast React Pizza Co.</h1>
    </header>
  );
}
function Pizza({ pizzaobj }) {
  // console.log(props);
  // if (props.pizzaobj.soldout) return null;
  return (
    <li className={`pizza ${pizzaobj.soldout ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoname} alt={pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients} </p>
        <span>
          {pizzaobj.soldout !== false ? "Sold Out" : pizzaobj.price + 3}
        </span>
      </div>
    </li>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numpizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numpizzas > 0 ? (
        <>
          {/* this will not create any element and now we dont create any child. 
          u can also write React.fragment*/}
          <p>
            Authentic Italian cuisine. {numpizzas} creative dishes to choose
            from. All from our stone over, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
              // {key is something that is unique}
            ))}
            ;
          </ul>
        </>
      ) : (
        <p> We're working on our menu, please come again later</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="tomato, spinach, ricotta and mozarella"
        photoname="spinaci.jpg"
        price={12}

      />
      <Pizza
        name="Focaccia"
        ingredients="capsicum, onion, olive oil and rosemary"
        photoname="focaccia.jpg"
        price={15}
      />
      <Pizza
        name="funghi"
        ingredients="capsicum, onion, olive oil and rosemary"
        photoname="funghi.jpg"
        price={14}
      /> */}
    </main>
  );
}
function Order({ closehour, openhour }) {
  return (
    <div className="order">
      <p>We're open until {closehour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}
function Footer() {
  // return React.createElement("footer", null, "we're currently open.")
  const hour = new Date().getHours();
  console.log(hour);
  const openhour = 2;
  const closehour = 22;
  const isopen = hour >= openhour && hour <= closehour;

  return (
    <footer className="footer">
      {isopen && <Order closehour={closehour} openhour={openhour} />}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React.render(<App />);
