import React from 'react';
import Convert from './components/Convert';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import '../src/styles/global.css'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
            <Convert />
        </header>
      </div>
    </QueryClientProvider>
  );
};

export default App;