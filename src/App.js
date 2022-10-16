import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components";
import NotesList from "./containers/notesList";
import Addnew from "./containers/addList";
import Nav from "./components/header/header";
import NewsCard from "./components/newsCard/newsCard";
import Nyheter from "./pages/nyheter/nyheter";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" index element={<Nyheter />} />
        <Route path="/nyheter" index element={<NotesList />} />
        <Route path="/blogg" element={<NewsCard />} />
        <Route path="/add-new-note" element={<Addnew />} />
      </Routes>
    </div>
  );
}

export default App;
