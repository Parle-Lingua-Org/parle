import React from "react";
import { twMerge } from "tailwind-merge";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge(`w-full max-w-[1240px] px-4 mx-auto ${className}`)}>
      {children}
    </div>
  );
};

export default Layout;
