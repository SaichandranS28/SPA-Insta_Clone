import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Requests from "./pages/Requests";
import UserDetails from "./pages/UserDetails";
import Post from "./pages/Post";
import Feed from "./components/Feed";

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
      <Route path="/posts/:id" element={<Post />} />
      <Route path="*" element={<Error />} />
    </Routes>

    </>
  )
}

export default App;