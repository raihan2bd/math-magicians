import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/UI/Layout';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import CalculatorPage from './pages/CalculatorPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </Layout>
    );
  }
}

export default App;
