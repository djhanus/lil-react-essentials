
import './App.css';


function Header(props) {
  // console.log(props)
  return (
    <header>
      <h1>{props.name} Kazooie</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>Welcome to Qo'noS's finest dining establishment, where honor meets flavor. Our chefs prepare traditional Klingon delicacies that will ignite your warrior spirit and satisfy your hunger for glory.</p>
      <p>Our {props.adjective} dishes include:</p>
      <ul style={{ textAlign: "left" }}>
      {props.dishes.map((gagh) => (
        <li key={gagh.id}>{gagh.title}</li>
      ))}
      </ul>
    </section>
  );
}

function Footerios(props) {
  return (
    <section>
      <p>@ {props.yearrr}</p>
    </section>
    );
}

const dishes = [
  "Red Worms",
  "Silver Worms",
  "Spicy Worms",
  "Poison Worms"
];

const allGaghDishes = dishes.map((gagh, i) => ({ id: i, title: gagh }));
console.log(allGaghDishes);

function App() {
  return (
    <div className="App">
      <Header name="Gak'tok, Son of Kahless, Keeper of the Sacred Bat'leth" />
      {/* return objects instead of array of strings */}
      <Main adjective="delicious" dishes={allGaghDishes}/>
      <Footerios yearrr={new Date().getFullYear()}/>
    </div>
    );
}

export default App;
