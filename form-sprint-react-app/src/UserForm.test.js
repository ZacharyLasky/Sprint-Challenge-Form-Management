import React from 'react'
import { render } from '@testing-library/react';
import FormikUserForm from './UserForm';

describe('<UserForm />', () => {
  it('renders without crashing', () => {
    render(<UserForm />)
  })
  it('gets clicked', () => {
    let clicked = jest.fn();
    const { getByText } = render(<FormikUserForm register={click} />);
    const submitButtom = getByText(/Register/i);
    fireEvent.click(submitButton);
    expect(click).toBeCalled
  })
})

