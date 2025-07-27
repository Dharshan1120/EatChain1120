import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-muted dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary dark:text-secondary">StreetSupply</h1>
        </div>
      </header>
      <main className="py-6 px-4 max-w-7xl mx-auto">{children}</main>
      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        © 2025 StreetSupply · Empowering local food businesses
      </footer>
    </div>
  );
}
