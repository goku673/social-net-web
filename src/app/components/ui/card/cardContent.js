import { cn } from "../../lib/utils";

    const CardContent = ({ className, ...props }) => (
            <div 
               className={cn("p-6 pt-0", className)} {...props} 
            />
        );

    CardContent.displayName = "CardContent";

    export default CardContent;