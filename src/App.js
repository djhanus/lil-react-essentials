

import './App.css';
import imgLogo from './batleth.jpg';
import imgFeature from './Kahless.jpg';

// Header component: Displays the restaurant's name, logo, and contact information
function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
      <img
        src={imgLogo}
        alt="batleth"
        height={75}
      />
      <p style={{ fontSize: "small", fontStyle: "italic" }}>Location: 1 Warrior's Way, First City, Qo'noS</p>
      <p style={{ fontSize: "small", fontStyle: "italic" }}>Contact: +47 123 456 789</p>
    </header>
    );
}

// Main component: Displays the restaurant's about section, menu, and featured image
function Main(props) {
  return (
    <section style={{ maxWidth: "1080px", margin: "0 auto" }}>
      <h2>About Us</h2>
      <img
        src={imgFeature}
        alt="Kahless the Unforgettable"
        width={500}
      />
      <p>Our founder, Kahless the Unforgettable, created the first bat'leth and united the Klingon people. We honor his memory by serving the finest Klingon cuisine in the galaxy.</p>
      <p>Our restaurant is family-owned and operated, and we take great pride in our warrior spirit and our commitment to honor and tradition.</p>
      <h2>Our Menu</h2>
      <p>Qapla'! Welcome to the Klingon Restaraunt, where we serve the finest {props.adjective} Klingon cuisine in the galaxy.</p>
      <p>Welcome to Qo'noS's finest dining establishment, where honor meets flavor. Our chefs prepare traditional Klingon delicacies that will ignite your warrior spirit and satisfy your hunger for glory.</p>
      <p>Our {props.adjective} dishes include:</p>
      <ul style={{ textAlign: "center", listStyleType: "none", padding: 0 }}>
      {props.dishes.map((gagh) => (
      <li key={gagh.id} style={{ textAlign: "center", fontSize: "larger", fontStyle: "italic", fontWeight: "bold" }}>{gagh.title}</li>))}
      </ul>
    </section>
    );
}

// Footer component: Displays the current year
function Footer(props) {
  return (
    <section>
      <p>@ {props.year}</p>
    </section>
    );
}

// Array of dishes: Maps dish names to objects with id and title properties
const dishes = [
  "Red Worms",
  "Silver Worms",
  "Spicy Worms",
  "Poison Worms"
];

const allGaghDishes = dishes.map((gagh, i) => ({ id: i, title: gagh }));

// App component: Combines Header, Main, and Footer components into the main application
function App() {
  return (
    <div className="App">
      <Header name="Gak'tok, Son of Kahless, Keeper of the Sacred Bat'leth" />
      <Main adjective="delicious" dishes={allGaghDishes}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
    );
}

export default App;