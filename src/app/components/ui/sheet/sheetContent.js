import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../lib/utils";
import { sheetVariants } from "./sheetVariants";
import { SheetPortal } from "../../utils/sheetUtils";
import SheetOverlay from "./sheetOverlay";
import { X } from "lucide-react";

    const SheetContent = ({side = "rigth", className, children, ...props}) => (
            <SheetPortal>
              <SheetOverlay/>
              <SheetPrimitive.Content
                className={cn(sheetVariants({side}),className)}
                {...props}
              >
                {children}
                <SheetPrimitive.Close
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
                >
                  <X className="h-4 w-4"/>
                  <span 
                    className="sr-only"
                  >Close
                  </span>
                </SheetPrimitive.Close>
              </SheetPrimitive.Content>  
            </SheetPortal>
        );
    
    export default SheetContent; 
