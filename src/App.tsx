/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import FretBoard from './components/FretBoard';

function App() {
  return (
    <div css={{
      background: '#0c0b0d',
      height: '100vh',
      width: '100vw',
      padding: 20,
      overflow: 'hidden'
    }}>
      <FretBoard/>
    </div>
  );
}

export default App;
