import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components";
import NotesList from "./containers/notesList";
import Addnew from "./containers/addList";
import Nav from "./components/header/header";
import NewsCard from "./components/newsCard/newsCard";
import Nyheter from "./pages/nyheter/nyheter";
import LandingPage from "./pages/landing/landingPage";
import { Partners } from "./pages/partners/partners";
import Kontakt from "./pages/kontakt/kontakt";
import Footer from "./components/footer/footer";
import Media from "./pages/media/media";

function App() {
  return (
    <div className="App">
      <Nav />
      <Footer />
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/nyheter" index element={<Nyheter />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </div>
  );
}

export default App;
