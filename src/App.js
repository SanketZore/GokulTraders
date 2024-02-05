import "./App.css";
import Navbar from "./Component/Navbar.js";
import FrontPage from "./Component/FrontPage.js";
import Company from "./Component/Company.js";
import ContactUs from "./Component/ContactUs.js";
import AboutUs from "./Component/AboutUs.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" initial element={<FrontPage />}></Route>
          <Route path="/company/:id" element={<Company/>}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
        </Routes>
      </BrowserRouter>
      <br /><br /><br />
    </div>
  );
}

export default App;
