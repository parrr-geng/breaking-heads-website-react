import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Aboutus from './pages/Aboutus';

import Coaching from './pages/Coaching';
import Content from './pages/Content';
import Merchandise from './pages/Merchandise';
import Turniere from './pages/Turniere';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<Aboutus />} />

        <Route path="/coaching" element={<Coaching />} />
        <Route path="/content" element={<Content />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/turniere" element={<Turniere />} />
      </Routes>
    </div>
  );
}

export default App;
