import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components";
import NotesList from "./containers/notesList";
import Addnew from "./containers/addList";
import Nav from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" index element={<NotesList />} />
        <Route path="/add-new-note" element={<Addnew />} />
      </Routes>
    </div>
  );
}

export default App;
