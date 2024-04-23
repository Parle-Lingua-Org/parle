import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";

export const BookASessionButton = ({ className, ...props }: ButtonProps) => (
  <Button
    className={cn(
      "shadow-xl bg-secondary text-white py-4 px-9 rounded-full shadow-purple15 scale-fast",
      className
    )}
    {...props}
  >
    Book A Session
  </Button>
);
