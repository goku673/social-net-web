import { cn } from "../../lib/utils";
    const DropdownMenuTrigger = ( { className, children, ...props}) => (
            <div
            className={cn("inline-flex", className)}
            {...props}
            >
            {children}
            </div>
       );
    
    DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

    export default DropdownMenuTrigger;   