import './Main.css';
import Shopify from '../Shopify/Shopify';
import Resume from '../Resume/Resume';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Brand from '../Brand/Brand';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

function Main() {
  return (
    <main className="main">
          <Routes>
            <Route path="/personalprojects" element={<Projects />} />
            <Route path="/" element={<About />} />
            <Route path="/shopify" element={<Shopify />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/brandstatement" element={<Brand />} />
          </Routes>
    </main>
  )
}

export default Main;
