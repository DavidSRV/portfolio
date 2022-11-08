import "./style/style.scss";
import { Routes, Route } from 'react-router-dom'
import MainPage from "./pages/main/MainPage";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/portfolio" element={<MainPage />} />
    </Routes>
    </div>
  );
}

export default App;
