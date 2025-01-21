import { cn } from "../../lib/utils";
    const CardTitle = ({ className, ...props }) => (
        <h3
          className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
          {...props}
        />
    );
    
    CardTitle.displayName = "CardTitle";
    
    export default CardTitle;