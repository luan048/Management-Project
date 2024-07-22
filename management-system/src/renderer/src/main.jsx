import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import App from './App.jsx'
import Registerpage from '../registerSalePage/registerPage.jsx'
import Listrequests from '../listRequestsPage/listRequests.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={< App/>} />
        <Route path='/registerPage' element={<Registerpage />} />
        <Route path='/listRequests' element={<Listrequests />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
