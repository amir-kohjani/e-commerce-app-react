import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom"

import Footer from './components/Footer';
import Header from './components/Header/Header';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage/ProductPage';
import CategoryPage from './pages/CategoryPage';
import TestPage from './pages/TestPage';
import OrderPage from './pages/OrderProduct/OrderPage';
import LoginOrRegisteryPage from './pages/LoginAndRegistery/LoginOrRegisteryPage';
function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>

        <Route path='/' exact element={<Home />} />
        <Route path='/category/:categoryName' exact element={<CategoryPage />} />
        <Route path='/product/:id' exact element={<ProductPage   />} />
        <Route path='/order' exact element={<OrderPage />} />
        <Route path='/login' exact element={<LoginOrRegisteryPage />} />

        <Route path='*' exact element={<TestPage />} />
        {/* //this is for error 404 */}
        </Routes>
        <Footer />
      </Router>
    </>
  );

}

export default App;
