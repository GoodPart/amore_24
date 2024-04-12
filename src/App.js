import { BrowserRouter, Routes, Route } from "react-router-dom";
import Component from "./pages/component";
import { StyleGuide } from "./pages/style";
import { Name } from "./pages/name";
import Gnb from "./navigate";
import "./assets/style/common.scss"
import { Basic } from "./pages/basic";

function App() {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Gnb />
        <Routes>
          <Route path="/" element={<Basic />} />
          <Route path="/rull_name" element={<Name />} />
          <Route path="/style" element={<StyleGuide />} />
          <Route path="/component" exact element={<Component />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
