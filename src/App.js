import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import Price from './pages/Price';
import About from './pages/About';

function App() {
  console.log(window.location)

  let Component

  switch(window.location.pathname){
    case '/':
      Component = <Home/>
      break
      case "/price":
        Component = <Price/>
        break
        case "/about":
          Component = <About/>
          break
  }
  return <>

<Navbar/>
<div className='container'> {Component} </div>
  </>
}

export default App;
