import './App.css';
import NavBar from './Components/Page01/NavBar';
import UserInfo from './Components/Page01/UserInfo';
import Projects from './Components/Page01/Projects';
import Testimonial from './Components/Page01/Testimonial';
import Footer from './Components/Page01/Footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <UserInfo/>
     <Projects/>
     <Testimonial/>
     <Footer/>
    </div>
  );
}

export default App;
