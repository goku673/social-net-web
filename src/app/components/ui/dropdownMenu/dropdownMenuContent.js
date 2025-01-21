import { cn } from "../../lib/utils";
import { useState, useRef, useEffect } from "react";
const DropdownMenuContent = ({ children, className, align = "end", ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false)
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [])
  
    return (
      <>
        <div
          className={cn(
            "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
            align === "end" ? "right-0" : "left-0",
            isOpen ? "animate-in fade-in-0" : "animate-out fade-out-0",
            className
          )}
          ref={dropdownRef}
          {...props}
        >
          {children}
        </div>
        <style jsx>{`
          .animate-in {
            animation: fadeIn 0.2s ease-out;
          }
          .animate-out {
            animation: fadeOut 0.2s ease-in;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
        `}</style>
      </>
    )
  }

  export default DropdownMenuContent;

  // refactorizar 

  