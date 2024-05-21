import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Header from './Components/Header';
import Coins from './Components/Coins';
import Home from './Components/Home';
import Exchanges from './Components/Exchanges';
import CoinDetails from './Components/CoinDetails';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element=<Home></Home>></Route>
        <Route path='/coins' element=<Coins></Coins>></Route>
        <Route path='/exchanges' element=<Exchanges></Exchanges>></Route>
        <Route path='/coin/:id' element=<CoinDetails></CoinDetails>></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
