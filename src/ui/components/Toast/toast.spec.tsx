import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { Toast } from './Toast';

describe('Toast Component', () => {
  it('renders with the correct message', () => {
    const message = 'This is a toast message';
    const { getByText } = render(<Toast type='success' body={message} />);
    expect(getByText(message)).toBeInTheDocument();
  });

  it('applies the correct class fosr success type', () => {
    const message = 'Success message';
    const { getByTestId } = render(<Toast type='success' body={message} />);
    const toast = getByTestId('toast');
    expect(toast).toHaveClass('bg-green-500');
  });

  it('applies the correct class for error type', () => {
    const message = 'Error message';
    const { getByTestId } = render(<Toast type='error' body={message} />);
    const toast = getByTestId('toast');
    expect(toast).toHaveClass('bg-red-500');
  });

  it('has the correct animation class', () => {
    const message = 'Animated message';
    const { getByTestId } = render(<Toast type='success' body={message} />);
    const toast = getByTestId('toast');
    expect(toast).toHaveClass('animate-fadeIn');
  });

  it('is positioned correctly', () => {
    const message = 'Position test message';
    const { getByTestId } = render(<Toast type='success' body={message} />);
    const toast = getByTestId('toast');
    expect(toast).toHaveClass('absolute bottom-5 right-5');
  });
});
