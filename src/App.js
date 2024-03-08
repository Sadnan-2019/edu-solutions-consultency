import "./App.css";
import Nav from "./components/Nav/Nav";
import TopNav from "./components/TopNav/TopNav";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Welcome from "./components/Welcome/Welcome";
import Country from "./components/Country/Country";
import Why from "./components/Why/Why";
import Footer from "./components/Footer/Footer";
import Faq from "./components/Faq/Faq";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Uk from "./components/Country/UK/Uk.js";
// import Uk from './components/Country/Uk';

// import LandingNew from './components/Landing/LandingNew';

function App() {
  return (
    <div className=" ">
      <TopNav></TopNav>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        {/* <Route path="/services" element={<Home />}></Route> */}
        <Route path="/uk" element={<Uk />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
