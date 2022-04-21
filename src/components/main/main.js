// import './App.css';
import Shopify from '../Shopify/Shopify';
import Resume from '../Resume/Resume';
import About from '../About/About';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

function Main() {
  return (
    <main className="main">
        This is where the meat and potatoes of information would go, inside of a main. Now from a component!
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/shopify" element={<Shopify />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
    </main>
  )
}

export default Main;
