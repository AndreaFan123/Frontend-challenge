import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '@/app/[lang]/components/Navbar';
import LangSwitcher from '@/app/[lang]/components/LangSwitcher';

describe('Navbar', () => {
  const dictionary = {
    mercury: 'Mercury',
    venus: 'Venus',
    earth: 'Earth',
    mars: 'Mars',
    jupiter: 'Jupiter',
    saturn: 'Saturn',
    uranus: 'Uranus',
    neptune: 'Neptune',
  };

  it('renders navbar links correctly', () => {
    render(<Navbar dictionary={dictionary} />);
    expect(screen.getByText('Mercury')).toBeInTheDocument();
  });

  it('redirect to mercury page', () => {
    render(<Navbar dictionary={dictionary} />);
    expect(screen.getByText('Mercury')).toHaveAttribute('href', '/mercury');
  });

  it('render LanguageSwitcher component', () => {
    render(<LangSwitcher />);
  });

  it('shows mobile menu button on small screens', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    render(<Navbar dictionary={dictionary} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
