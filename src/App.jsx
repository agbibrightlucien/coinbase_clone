import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/footer';
import Explore from "./pages/Explore";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import AddCrypto from "./pages/AddCrypto";

function NotFound() {
  return <h1>404 — Page not found</h1>;
}

function App() {
  return (
    <>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-crypto" element={<AddCrypto />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />  
    </>
  )
}

export default App;