import logo from './logo.svg';
import './App.css';

import PartOne from './components/PartOne';
import Part2 from './components/Tutorial/Part2';
import Header from './components/Header';
import Event from './components/Event';









function App() {
  return (
    <div className="App">
      <Header/>

 <PartOne/>
 <Part2 name="dilrukshi">ishara</Part2>
 <Part2 name="peiris"><h1>name</h1></Part2>
 <Part2 name="Bamina"><button>find me</button></Part2>
 <Event/>

 

    </div>
   
  );
}

export default App;
