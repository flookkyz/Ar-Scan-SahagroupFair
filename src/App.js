import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Checkpoint from "./pages/Checkpoint";
import Suscess from "./pages/Suscess";
import Finish from "./pages/Finish";
import Event1 from "./components/event1";
import Event2 from "./components/event2";
import Event3 from "./components/event3";
import Event4 from "./components/event4";
import Event5 from "./components/event5";
import Event6 from "./components/event6";
import Event7 from "./components/event7";
import Event8 from "./components/event8";
import Event9 from "./components/event9";
import Event10 from "./components/event10";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/checkpoint" element={<Checkpoint />} />
          <Route path="/home" element={<Home />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/suscess/:nameevent" element={<Suscess />} />
          <Route path="/event1" element={<Event1 />} />
          <Route path="/event2" element={<Event2 />} />
          <Route path="/event3" element={<Event3 />} />
          <Route path="/event4" element={<Event4 />} />
          <Route path="/event5" element={<Event5 />} />
          <Route path="/event6" element={<Event6 />} />
          <Route path="/event7" element={<Event7 />} />
          <Route path="/event8" element={<Event9 />} />
          <Route path="/event9" element={<Event10 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
