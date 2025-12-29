import { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import Meta from './meta';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
}

const Layout = ({ preview, children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // check and reset theme
  const getColorScheme = () => {
    if (typeof window === 'undefined') return false;
    
    const userPrefersDark = (localStorage.colorScheme === "dark");
    const OSPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const prefersDark = userPrefersDark || (!("colorScheme" in localStorage) && OSPrefersDark);

    if (prefersDark) {
      window.document.documentElement.setAttribute("data-prefers-color-scheme", "dark");
    } else {
      window.document.documentElement.setAttribute("data-prefers-color-scheme", "light");
    }
    
    return prefersDark;
  }

  // check theme on component mount
  useEffect(() => {
    setMounted(true);
    const prefersDark = getColorScheme();
    setIsDarkMode(prefersDark);
  }, []);

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
