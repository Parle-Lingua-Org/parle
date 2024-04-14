import React from "react";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full max-w-[1240px] px-4 mx-auto ${className} `}>
      {children}
    </div>
  );
};

export default Layout;
