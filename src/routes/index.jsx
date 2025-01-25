import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from '../Layout'


const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Layout />}>
      </Route>
    </Routes>
  </Router>
);

export default Root;