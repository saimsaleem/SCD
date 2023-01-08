import { render, screen } from '@testing-library/react';
import App from './App';
import Add from './Components/AddTransport';
import Display from './Components/DisplayTransport';
import Menu from './Components/TransportMenu';


test('Testing App.js', () => {
  render(<App />);
  const linkElement = screen.getByTestId("AppTest");
  expect(linkElement).toBeInTheDocument();
});

test('Testing Transport Menu', () => {
  render(<Menu />);
  const linkElement = screen.getByTestId("MenuT");
  expect(linkElement).toBeInTheDocument();
});

test('Testing Display Transport', () => {
  render(<Display />);
  const linkElement = screen.getByTestId("DisplayT");
  expect(linkElement).toBeInTheDocument();
});

test('Testing Add Transport', () => {
  render(<Add />);
  const linkElement = screen.getByTestId("AddT");
  expect(linkElement).toBeInTheDocument();
});
