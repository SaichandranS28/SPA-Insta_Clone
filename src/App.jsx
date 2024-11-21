import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Requests from "./pages/Requests";
import UserDetails from "./pages/UserDetails";

function App(){
  return(
    <>
      <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/requests/:username" element={<UserDetails />}/>
      <Route path="*" element={<Error />} />
    </Routes>

    </>
  )
}

export default App;