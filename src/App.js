 
import './App.css';
import Nav from './components/Nav/Nav';
import TopNav from './components/TopNav/TopNav';
import Landing from './components/Landing/Landing';
import Services from './components/Services/Services';
import Welcome from './components/Welcome/Welcome';
import Country from './components/Country/Country';
import Why from './components/Why/Why';
import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq';
import Review from './components/Review/Review';
// import LandingNew from './components/Landing/LandingNew';

function App() {
  return (
    <div className=" ">
      <TopNav></TopNav>
      <Nav></Nav>
      <Landing></Landing>
{/* <LandingNew></LandingNew> */}

      <Welcome></Welcome>
      <Services></Services>
      <Country></Country>
      <Why></Why>
      <Review></Review>
      <Faq></Faq>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
