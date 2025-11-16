
import { useState, useEffect } from 'react';

// This custom event will be dispatched when we navigate programmatically.
const popStateEvent = new Event('popstate');

/**
 * A simple navigate function to be used for programmatic SPA navigation.
 * It pushes a new state to the history and dispatches an event for hooks to listen to.
 * @param href The URL to navigate to.
 */
export const navigate = (href: string) => {
  window.history.pushState({}, '', href);
  window.dispatchEvent(popStateEvent); // Dispatch our event so listeners update.
};

/**
 * A hook that returns the current window pathname and updates automatically
 * on browser back/forward button clicks or programmatic navigation.
 */
export const usePathname = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setPathname(window.location.pathname);
    };

    // Listen for the browser's back/forward buttons and our custom navigation event
    window.addEventListener('popstate', onLocationChange);

    // We return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return pathname;
};
