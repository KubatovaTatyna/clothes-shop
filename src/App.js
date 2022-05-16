import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import './App.css';
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
