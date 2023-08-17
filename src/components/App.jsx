import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Shop from 'pages/Shop/Shop';
import Projects from 'pages/Projects/Projects';
import News from 'pages/News/News';

import { SharedLayout } from './SharedLayout';
export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </div>
  );
}
