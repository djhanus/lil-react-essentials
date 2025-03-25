import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Welcome to project lift off!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Project Lift Off</h1>
        <h2>Subheading Example</h2>
        <p>This is a paragraph with some additional text to demonstrate basic markup.</p>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
        <ol>
          <li>Ordered item one</li>
          <li>Ordered item two</li>
          <li>Ordered item three</li>
        </ol>
        <blockquote>
          "This is a blockquote example to showcase styled text."
        </blockquote>
      </header>
    </div>
  );
}

export default App;
