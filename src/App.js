import './App.css';
import { useState } from'react';
import TitleHeader from "./components/titleHeader.js"
import Pinata from "./components/pinata.js"
import Candies from "./components/candyContainer.js"
import SubmissionForm from './components/submissionBox';

function App() {
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

