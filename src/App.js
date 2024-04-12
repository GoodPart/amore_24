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
          <Route path="/" element={<Basic title="기본" />} />
          <Route path="/rull_name" element={<Name title="이름규칙" />} />
          <Route path="/style" element={<StyleGuide title="스타일" />} />
          <Route path="/component" exact element={<Component title="컴포넌트" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
