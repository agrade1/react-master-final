import { useAtom } from 'jotai';
import styled from 'styled-components';
import { themeAtom } from '../atoms/themeAtom';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bgColor};
  border: none;
  cursor: pointer;
  font-family: "Share Tech Mono", monospace;
  font-size: 0.9rem;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
