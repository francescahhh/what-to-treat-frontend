import './App.css';
import { useEffect, useState } from'react';
import TitleHeader from "./components/titleHeader.js"
import Pinata from "./components/pinata.js"
import Candies from "./components/candyContainer.js"
import SubmissionForm from './components/submissionBox.js';

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
    .then(response => response.json())
    .then(data => {
      setData(data)
      console.log(data)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
      <TitleHeader />
      <Pinata />
       <Candies />
       <SubmissionForm />
        </header>
    </div>
  );
}

export default App;

