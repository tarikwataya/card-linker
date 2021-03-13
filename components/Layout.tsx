const Layout: React.FC = ({ children }) => {
  return (
    <div className="mt-2 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      {children}
    </div>
  );
};

export default Layout;