// Create a test to test <Heading/> component button click event

import { render, screen, fireEvent } from '@testing-library/react';
import { Heading } from '@/app/components/Heading';

describe('Heading', () => {
  it('should call onActivate when button is clicked', () => {
    const onActivate = jest.fn();
    render(<Heading onActivate={onActivate} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onActivate).toHaveBeenCalled();
  });
});
