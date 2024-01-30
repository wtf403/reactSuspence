const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="loader w-[256px] h-[97px] flex items-center justify-center">
      {children}
    </div>
  );
};

export default Base;
