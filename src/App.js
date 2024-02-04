 
import './App.css';
import Nav from './components/Nav/Nav';
import TopNav from './components/TopNav/TopNav';
import Landing from './components/Landing/Landing';
import Services from './components/Services/Services';
import Welcome from './components/Welcome/Welcome';
import Country from './components/Country/Country';
import Why from './components/Why/Why';

function App() {
  return (
    <div className=" ">
      <TopNav></TopNav>
      <Nav></Nav>
      <Landing></Landing>
      <Welcome></Welcome>
      <Services></Services>
      <Country></Country>
      <Why></Why>
     
    </div>
  );
}

export default App;
