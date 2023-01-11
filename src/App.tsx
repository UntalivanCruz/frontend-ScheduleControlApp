import React, { FC } from 'react';
import { RouterPage } from './router/RouterPage';
import { BrowserRouter } from 'react-router-dom';


const App: FC = () => (
  <BrowserRouter>
    <RouterPage />
  </BrowserRouter>
);

export default App;