import { FiSun } from 'react-icons/fi';
import { IoMoonSharp } from 'react-icons/io5';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  if (theme === 'dark') {
    return (
      <FiSun
        role='button'
        onClick={() => setTheme('light')}
        style={{ color: '#fff' }}
      />
    );
  } else {
    return (
      <IoMoonSharp
        role='button'
        onClick={() => setTheme('dark')}
        style={{ color: '#5f5f5f' }}
      />
    );
  }
};
export default ThemeToggle;
