import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Page from './Page';

const App: React.FC = () => (
  <div className="App">
    <CssBaseline>
      <Page />
    </CssBaseline>
  </div>
);

export default App;
