import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import { StyleGuide } from "./pages/style";
import { Name } from "./pages/name";
import Gnb from "./navigate";
import "./assets/style/common.scss"

function App() {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Gnb />
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/style" element={<StyleGuide />} />
          <Route path="/rull_name" element={<Name />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
