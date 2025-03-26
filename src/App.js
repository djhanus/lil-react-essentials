
import './App.css';


function Header() {
  return (
    <header>
      <h1>Banjo Kazooie</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>Gruntilda's Lair, Spiral Mountain, Click Clock Wood, Bubblegloop Swamp, Treasure Trove Cove.</p>
    </section>
    );
}

function Footerios() {
  return (
    <section>
      <p>@ This is the footer</p>
    </section>
    );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footerios />
    </div>
  );
}

export default App;
