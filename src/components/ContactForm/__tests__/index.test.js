import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
  // First Test
  it('renders', () => {
    render(<ContactForm />);
  });
  // Second Test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  })
})

describe('links are visible', () => {
  it('inserts text into the home link', () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId('submit')).toHaveTextContent('Submit');
    expect(getByTestId('contact')).toHaveTextContent('Contact Me');
  });
})