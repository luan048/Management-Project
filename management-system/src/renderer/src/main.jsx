import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Listrequests from '../listRequestsPage/listRequests.jsx'
import Registerpage from '../registerSalePage/registerPage.jsx';

const Main = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registerPage" element={<Registerpage />} />
      <Route path='/listPage' element={<Listrequests />} />
    </Routes>
  </Router>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Main />);

