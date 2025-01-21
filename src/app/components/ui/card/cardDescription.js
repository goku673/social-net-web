import { cn } from "../../lib/utils";

    const CardDescription = ({ className, ...props }) => (
            <p
              className={cn("text-sm text-muted-foreground", className)}
              {...props}
            />
        );

    CardDescription.displayName = "CardDescription";

    export default CardDescription;