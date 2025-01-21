import * as SheetPrimitive from "@radix-ui/react-dialog";

    const SheetDescription = ({className, ...props} ) => (
            <SheetPrimitive.Description
              className={cn("text-sm text-muted-forenground", className)}
              {...props}  
            />
        );

    export default SheetDescription;    