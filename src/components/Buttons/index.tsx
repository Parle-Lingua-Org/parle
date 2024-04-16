import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";

export const BookASessionButton = ({ className, ...props }: ButtonProps) => (
  <Button
    className={cn(
      "shadow-xl bg-secondary text-white py-2.5 px-8 rounded-full shadow-purple15 scale-fast",
      className
    )}
    {...props}
  >
    Book A Session
  </Button>
);
