import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import TopNav from './components/TopNav/TopNav';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className=" ">
      <TopNav></TopNav>
      <Landing></Landing>
     <Nav></Nav>
    </div>
  );
}

export default App;
