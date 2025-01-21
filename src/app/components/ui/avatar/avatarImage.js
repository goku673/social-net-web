import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../lib/utils";
import Image from "next/image";

    const AvatarImage = ({className, src, alt, ...props}) => (
             <Image
               src={src}
               alt={alt}
               height={100}
               width={100}
               className={cn("aspect-square h-full w-full", className)}
               {...props}
             />  
        );
    AvatarImage.displayName = "AvatarImage";

    export default AvatarImage;