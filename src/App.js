import './App.css';
import TitleHeader from "./components/titleHeader.js"
import Pinata from "./components/pinata.js"
import Candies from "./components/candyContainer.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TitleHeader />
      <Pinata />
       <Candies />
        </header>
    </div>
  );
}

export default App;

