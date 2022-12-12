import Albums from "./components/Albums/main.albums";
import MainLayouts from "./Layouts/main.layouts";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Main class, albums, main layouts & nav layouts is called here. 
const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Routes>
          <Route path="/" element={<h1>HOME MENU</h1>} />
            <Route path="/albums" element={<Albums/>} />
            <Route path="/posts" element={<h1>POSTS</h1>} />
            <Route path="*" element={<h1 className="text-center text-danger">404 NOT FOUND</h1>} />
          </Routes>
        </Router>
      </MainLayouts>
    </>
  );
};

export default App;
