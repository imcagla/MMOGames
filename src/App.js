import './App.css';
import Navbar from "./components/base/Navbar"
import Footer from "./components/base/Footer"
import {Routes, Route} from "react-router-dom"
import routes from './routes';


function App() {
  document.body.style.backgroundColor  = "#343a40"

  return (
    <div className='bg-dark'>
      <Navbar />
      <Routes>
        {
          routes.map((item, index) => <Route key={index} path={item.pathname} element={<item.element />} />)
        }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
