import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import AllYourFiles from './Components/AllYourFiles/AllYourFiles';
import Quotes from './Components/Quotes/Quotes';
import Features from './Components/Features/Features';
import StayProductive from './Components/StayProductive/StayProductive';

function App() {
  return (
    <div className="App">
      <Header />
      <AllYourFiles />
      <Features />
      <StayProductive />
      <Quotes/>
    </div>
  );
}

export default App;
