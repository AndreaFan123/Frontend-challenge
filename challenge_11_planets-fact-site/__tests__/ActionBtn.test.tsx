import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { ActionMobileButton } from '@/app/[lang]/components/ActionMobileButton'; // 更換成實際的路徑

jest.mock('next/navigation', () => ({
  usePathname: () => '/test/mars',
}));

const mockDictionary = {
  overview: '概覽',
  internalStructure: '內部結構',
  surfaceGeology: '表面地質',
};

describe('ActionMobileButton Component', () => {
  it('it should call onActive with the correct index when a button is clicked', () => {
    const mockOnActive = jest.fn();
    const { getByText } = render(
      <ActionMobileButton
        dictionary={mockDictionary}
        activeIndex={0}
        onActive={mockOnActive}
      />,
    );

    fireEvent.click(getByText(mockDictionary.surfaceGeology));

    expect(mockOnActive).toHaveBeenCalledTimes(1);
    expect(mockOnActive).toHaveBeenCalledWith(2);
  });
});
