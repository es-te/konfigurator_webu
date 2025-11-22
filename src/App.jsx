import React from 'react';
import { ConfiguratorProvider } from './context/ConfiguratorContext';
import Layout from './components/Layout';
import Wizard from './components/Wizard';

function App() {
  return (
    <ConfiguratorProvider>
      <Layout>
        <Wizard />
      </Layout>
    </ConfiguratorProvider>
  );
}

export default App;
