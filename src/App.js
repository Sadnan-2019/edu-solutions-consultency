import "./App.css";
import Nav from "./components/Nav/Nav";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Uk from "./components/Country/UK/Uk.js";
import About from "./components/About/About.js";
import Australia from "./components/Country/Australia/Australia.js";
import USA from "./components/USA/USA.js";
import Canada from "./components/Country/Canada/Canada.js";
import ContactNav from "./components/Contact/ContactNav.js";
import Dubai from "./components/Country/Dubai/Dubai.js";
import Ireland from "./components/Country/Ireland/Ireland.js";
import Cyprus from "./components/Country/Cyprus/Cyprus.js";
import { ToastContainer } from "react-toastify";
import FourZeroFour from "./components/FourZeroFour/FourZeroFour.js";

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
        <Route path="/about" element={<About />}></Route>
        <Route path="/australia" element={<Australia />}></Route>
        <Route path="/usa" element={<USA />}></Route>
        <Route path="/canada" element={<Canada />}></Route>
        <Route path="/dubai" element={<Dubai />}></Route>
        <Route path="/ireland" element={<Ireland />}></Route>
        <Route path="/cyprus" element={<Cyprus />}></Route>
        <Route path="/contact" element={<ContactNav />}></Route>
        <Route path="/*" element={<FourZeroFour />} /> 
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
