import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <div className="p-[1px]">

      {/* Nav Bar */}
      <NavBar/>
      {/* Intro */}
      <Home/>
  
      {/* About */}
      <AboutMe/>
      {/* Skills */}
      {/* Portfolio */}
      {/* Companies */}
      {/* Contact */}
      {/* footer */}
    </div>
  );
}

export default App;
