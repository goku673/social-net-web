import { cn } from "../../lib/utils";

    const CardFooter = ({ className, ...props }) => (
            <div
              className={cn("flex items-center p-6 pt-0", className)}
              {...props}
            />
    );

    CardFooter.displayName = "CardFooter";

    export default CardFooter;