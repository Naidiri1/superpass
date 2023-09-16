
import './App.css';

import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main"
import SignUp from "./components/signUp";
import LogIn from "./components/logIn";

function App() {
  return (

      <>
        <NavBar />
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      
      </>
    );
}

export default App;
