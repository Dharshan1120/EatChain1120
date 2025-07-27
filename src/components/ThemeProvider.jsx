import { useState, useEffect } from 'react';

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <button
        aria-label="Toggle dark mode"
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>
      {children}
    </div>
  );
}
