import { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import Meta from './meta';

type Props = {
  preview: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // check and reset theme
  const getColorScheme = () => {
    const userPrefersDark = (localStorage.colorScheme === "dark");
    const OSPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const prefersDark = userPrefersDark || (!("colorScheme" in localStorage) && OSPrefersDark);

    if (prefersDark) {
      window.document.documentElement.setAttribute("data-prefers-color-scheme", "dark");
      setIsDarkMode(true);
    } else {
      window.document.documentElement.setAttribute("data-prefers-color-scheme", "light");
      setIsDarkMode(false);
    }
  }

  // check theme on component mount
  useEffect(() => {
    getColorScheme();
  }, []);

  // check and reset theme when `darkMode` changes
  useEffect(() => {
    getColorScheme();
  }, [isDarkMode]);

  return (
    <div className="app">
      <Meta />

      <Header />

      <main>
        {children}
      </main>

      <Footer isDarkMode={ isDarkMode } setIsDarkMode={ setIsDarkMode } />
    </div>
  )
}

export default Layout
