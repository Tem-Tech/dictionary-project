import Header from "./header";
import DictionarySearch from "./dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <DictionarySearch />
      </main>
    </div>
  );
}

export default App;
