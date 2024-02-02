 
import './App.css';
import Nav from './components/Nav/Nav';
import TopNav from './components/TopNav/TopNav';
import Landing from './components/Landing/Landing';
import Services from './components/Services/Services';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className=" ">
      <TopNav></TopNav>
      <Nav></Nav>
      <Landing></Landing>
      <Welcome></Welcome>
      <Services></Services>
     
    </div>
  );
}

export default App;
