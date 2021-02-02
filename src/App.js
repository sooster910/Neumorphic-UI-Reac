import React from 'react';
import Button from './components/Button';
import ProgressCircle from './components/ProgressCircle';

// module.exports={progressCircle, Button}
const App = () => (
  <div style={{ background: '#e4ebf5' }}>
    <Button dark color="pink">
      Hello world
    </Button>
    <ProgressCircle
      type="combo"
      labelColor="#333333"
      unit="%"
      progress={60}
      size={300}
      strokeWidth={33}
      circleOneStroke="transparent"
      circleTwoStroke="#7ea9e1"
      strokeShape="round"
    />
  </div>
);

export default App;
