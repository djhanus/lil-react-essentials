
import './App.css';


function Header(props) {
  console.log(props)
  return (
    <header>
      <h1>{props.name} Kazooie</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>Gruntilda's Dungeon is {props.adjective}, a haven for weary adventurers. Nestled between the Whispering Woods and the Mystic Marsh, it offers tales of heroism, hearty meals, and the finest mead in the realm.</p>
      <ul>
        {props.gagh.map((gogs) => (
          <li>{gogs}</li>
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

const gagh = [
  "Red Worms",
  "Silver Worms",
  "Spicy Worms"
];

// gagh.map((gogs) => console.log(gogs));

function App() {
  return (
    <div className="App">
      <Header name="Proterius" />
      <Main adjective="delicious" gagh={gagh}/>
      <Footerios yearrr={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
