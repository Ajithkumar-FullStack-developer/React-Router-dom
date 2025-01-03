import { Route, Routes } from "react-router-dom";
import All from "./pages/All";
import fullStackDevelopment from "./pages/fullStackDevelopment";
import dataScience from "./pages/dataScience";
import cyberSecurity from "./pages/cyberSecurity";
import Career from "./pages/Career";
import NavBar from "./Components/NavBar";
import courseDetails from "./pages/courseDetails"
import './App.css'




function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route Component={All} path="/" />
        <Route Component={fullStackDevelopment} path="/fullStackDevelopment" />
        <Route Component={dataScience} path="/DataScience" />
        <Route Component={cyberSecurity} path="/cyberSecurity" />
        <Route Component={courseDetails} path="/course/:courseId" />
        <Route Component={Career} path="/Career" />
      </Routes>
      
    </>
  );
}

export default App;