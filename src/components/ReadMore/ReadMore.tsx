"use client";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";

const ReadMore = ({ children }: { children: ReactNode }) => {
  const [see, setSee] = useState(false);
  return (
    <>
      {see ? children : <></>}
      <div>
        <button
          className="text-blue-500 focus:outline-none"
          onClick={() => setSee((see) => !see)}
        >
          {!see ? "Read More" : "Hide"}
        </button>
      </div>
    </>
  );
};

export const ReadMoreClamp = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [see, setSee] = useState(false);

  return (
    <div>
      <p
        className={cn(
          `transition duration-300 ${!see ? "line-clamp-5" : ""}`,
          className
        )}
      >
        {children}
      </p>
      <div>
        <button
          className="text-blue-500 focus:outline-none mt-4"
          onClick={() => setSee((see) => !see)}
        >
          {!see ? "Read More" : "Hide"}
        </button>
      </div>
    </div>
  );
};

export default ReadMore;
