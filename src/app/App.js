import './App.scss'
import { useState } from 'react';
import Menu from '../components/menu/Menu';
import Header from '../components/header/Header';
import Profile from '../components/profile/Profile';
import Projects from '../components/projects/Projects';
import Resume from '../components/resume/Resume';
import Contact from '../components/contact/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="App">

      <Menu menuOpen={menuOpen} onClickMenu={toggleMenu} />
      <Header onClickMenu={toggleMenu} />
      <Profile />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
