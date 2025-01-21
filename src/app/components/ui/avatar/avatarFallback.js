import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../lib/utils";

const AvatarFallback = ({ className, ...props}) => {
         <div
           className={cn("flex h-full items-center justify-center rounded-full bg-muted", className)}
           {...props}
         />
}
AvatarFallback.displayName = "AvatarFallback";

export default AvatarFallback;