import './App.scss'
import Header from '../components/header/Header';
import Profile from '../components/profile/Profile';
import Projects from '../components/projects/Projects';
import Resume from '../components/resume/Resume';
import Contact from '../components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
