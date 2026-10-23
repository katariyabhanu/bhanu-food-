import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navber from './components/Navber';
import AllProduct from './components/AllProduct';
import AllCartpage from './components/AllCartpage';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navber />
      <Routes>
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/cartpage" element={<AllCartpage />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;