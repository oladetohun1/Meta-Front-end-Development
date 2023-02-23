// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3'
import Nav from './components/Nav';
import Promo from './components/Promo';
function App() {
  return (
    <div className="App">
      <Nav color = 'blue'/>
      <Intro2/>
      <Intro1/>
      <Intro3/>
      <Promo/>
      <Footer/>
    </div>
  );
}

export default App;
