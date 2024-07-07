import './App.scss'
import Header from '../components/header/Header';
import Profile from '../components/profile/Profile';
import Projects from '../components/projects/Projects'

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
