import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Rating from "./pages/Rating";
import Review from "./pages/Review";
import Index from "./pages/index";
import Catalog from "./pages/Catalog";
import { Router, Routes, Route } from "react-router-dom";
import Description from "./pages/Description";

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Index/>}/>
        <Route exact path="Catalog" element={<Catalog/>}/>
        <Route exact path="Review" element={<Review/>}/>
        <Route exact path="Rating" element={<Rating/>}/>
        <Route exact path="Contacts" element={<Contacts/>}/>
        <Route exact path="About" element={<About/>}/>
        <Route exact path="*" element={<Description/>}/>
      </Routes>
    </div>
  );
}