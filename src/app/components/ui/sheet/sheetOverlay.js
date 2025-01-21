import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";

    const SheetOverlay = ({ className, ...props }) => (
            <SheetPrimitive.Overlay
              className={cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className )}
                {...props}
            />
        );
    SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

    export default SheetOverlay;