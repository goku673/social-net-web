import { cn } from "../../lib/utils";

    const Card = ({ className, ...props }) => (
            <div
              className={cn("rounded-lg border bg-card text-card-forengroun shadown-sm",className)}
              {...props}
            />
        );

    Card.displayName = "Card";
    
    export default Card;