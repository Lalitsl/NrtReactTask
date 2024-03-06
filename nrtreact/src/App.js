import './App.css';
import './Responsive.css';
import Section1 from './Components/Section1';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Section1 />} />
          <Route path="about" element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
