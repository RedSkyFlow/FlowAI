// This is a mock hook to replace `next/navigation`'s `usePathname`.
// In a real SPA with routing, you would use `useLocation` from `react-router-dom`.
// We set a static path here to demonstrate the active link styling.
export const usePathname = () => '/products/intelligent-wifi';