import './App.css';
import AddVideo from './components/addVideo';
import Home from './components/home';
import Navbar from './components/navbar'
import PageNotFound from './components/pageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<AddVideo />} path='/add-video' />
          <Route element={<PageNotFound />} path='*' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
