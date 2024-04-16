import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";

export const BookASessionButton = ({ className, ...others }: ButtonProps) => (
  <Button
    className={cn(
      "bg-red1 rounded-[100px] px-7 h-[50px] text-white font-bold text-xl shadow-sm shadow-purple15 scale-fast",
      className
    )}
    {...others}
  >
    Book A Session
  </Button>
);
