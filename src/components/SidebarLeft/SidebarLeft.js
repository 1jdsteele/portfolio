import './SidebarLeft.css';
import {Link} from 'react-router-dom';
import SidebarRight from '../SidebarRight/SidebarRight';
function SidebarLeft() {
  return (
    <aside className="sidebar">
        <nav>
          <ul>
            <h3>Pages</h3>
            <Link to="/personalprojects">
              <li>Personal Projects</li>
            </Link>
            <Link to="/shopify">
            <li>Shopify Pages</li>
            </Link>
            <Link to="/">
              <li>About Me</li>
            </Link>
            <Link to="/resume">
              <li>Resume</li>
            </Link>
            <Link to="brandstatement">
            <li>Brand Statement</li>
            </Link>
          </ul>
        </nav> 
        <SidebarRight />
      </aside>
  )
}

export default SidebarLeft;
