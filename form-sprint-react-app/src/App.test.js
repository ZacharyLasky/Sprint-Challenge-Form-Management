import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
   it('renders without crashing', () => {
     const div = rtl.render(
       <div className="App">FOOD DISPLAYER</div>
     );
   });
})


