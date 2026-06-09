import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Beliefs from './pages/Beliefs';
import Ministries from './pages/Ministries';
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Give from './pages/Give';
import Contact from './pages/Contact';
import PrayerRequest from './pages/PrayerRequest';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/beliefs" element={<Beliefs />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prayer-request" element={<PrayerRequest />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
