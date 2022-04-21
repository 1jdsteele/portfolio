import './App.css';
import Header from './components/Header/Header.js'
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SidebarLeft />
      <SidebarRight />
    </div>
  );
}

export default App;
