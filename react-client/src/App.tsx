import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Events from './pages/Event/events';
import About from './pages/about';
import Contact from './pages/contact';
import Layout from './Components/Layout/layout';
import Register from './pages/Account/register';
import Login from './pages/Account/login';


const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
