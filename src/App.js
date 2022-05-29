
import './App.css';
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import NotFound from "./pages/NotFound";
import Product from './pages/Product/Product';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/women' element={<Women />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/men' element={<Men />} />
          <Route path='/kids' element={<Kids />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
