 
import './App.css';
import Nav from './components/Nav/Nav';
import TopNav from './components/TopNav/TopNav';
import Landing from './components/Landing/Landing';
import Services from './components/Services/Services';

function App() {
  return (
    <div className=" ">
      <TopNav></TopNav>
      <Nav></Nav>
      <Landing></Landing>
      <Services></Services>
     
    </div>
  );
}

export default App;
