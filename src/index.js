import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Component to set meta tags for mobile navigation bar
const MetaTagsProvider = ({ children }) => {
  useEffect(() => {
    // Set meta tags for white mobile navigation bar
    const addMetaTags = () => {
      const head = document.head;
      
      // Remove existing meta tags if they exist
      const existingThemeColor = document.querySelector('meta[name="theme-color"]');
      const existingApple = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
      const existingMS = document.querySelector('meta[name="msapplication-navbutton-color"]');
      
      if (existingThemeColor) existingThemeColor.remove();
      if (existingApple) existingApple.remove();
      if (existingMS) existingMS.remove();
      
      // Theme color for Android Chrome - makes navigation bar white
      const themeColorMeta = document.createElement('meta');
      themeColorMeta.name = 'theme-color';
      themeColorMeta.content = '#ffffff';
      head.appendChild(themeColorMeta);
      
      // For iOS Safari - white status bar with dark text
      const appleMeta = document.createElement('meta');
      appleMeta.name = 'apple-mobile-web-app-status-bar-style';
      appleMeta.content = 'default';
      head.appendChild(appleMeta);
      
      // For Windows Phone - white navigation bar
      const msMeta = document.createElement('meta');
      msMeta.name = 'msapplication-navbutton-color';
      msMeta.content = '#ffffff';
      head.appendChild(msMeta);
    };

    addMetaTags();
  }, []);

  return children;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MetaTagsProvider>
    <App />
  </MetaTagsProvider>
);

reportWebVitals();
