import React from 'react'
import { render } from '@testing-library/react';
import FormikUserForm from './UserForm';

describe('<UserForm />', () => {
  it('renders without crashing', () => {
    render(<UserForm />)
  })
})