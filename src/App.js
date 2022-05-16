import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import './App.css';
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import Categories from "./pages/Categories";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Home />
      <Categories />
      <Products />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
