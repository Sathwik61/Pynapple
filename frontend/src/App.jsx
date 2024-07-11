import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Landing from "./Landing";
import SignupPage from "./SignupPage";
import Home from "./Home";
import Forgot from "./Forgot";
import Links from "./Components/Links";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/home/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
