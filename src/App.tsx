import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Article from './pages/Article';
function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
      {/* Header */}
      <Routes>
        <Route path="/" element={<Landing/>} />
          <Route path="/article" element={<Article />} />
          {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
