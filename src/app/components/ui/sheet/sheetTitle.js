import * as SheetPrimitive from "@radix-ui/react-dialog";

    const SheetTitle = ({className, ...props}) => (
            <SheetPrimitive.Title
              className={cn("text-lg font-semibold text-forenground", className)}
              {...props}
            />
        );

    export default SheetTitle;
