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
import MessengerCustomerChat from "react-messenger-customer-chat";
 
function App() {
   

  return (
    <div   className=" ">
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
        <Route path="/dubai" element={<Dubai/>}></Route>
        <Route path="/ireland" element={<Ireland/>}></Route>
        <Route path="/contact" element={<ContactNav />}></Route>
      </Routes>
      <Footer></Footer>
      <MessengerCustomerChat pageId="100358625178013" appId="2775069162650147" />
    </div>
  );
}

export default App;
