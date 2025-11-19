import React from 'react';

interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = React.memo(({ children }) => {
  return (
    <div className="p-8 transition-opacity duration-300">
      {children}
    </div>
  );
});
