import React from 'react'
import { render } from '@testing-library/react';
import Card from './Card';

describe('<Card />', () => {
  it('renders without crashing', () => {
    render(<Card />);
  });
  it('takes in props and displays them', () => {
    const display = render(<Display />)
    display.getByText(/USER:z/);
  })
})