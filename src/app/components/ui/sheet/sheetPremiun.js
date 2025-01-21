import React, { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

const SheetContext = React.createContext()

const useSheet = () => {
  const context = React.useContext(SheetContext)
  if (!context) {
    throw new Error('useSheet must be used within a SheetProvider')
  }
  return context
}

const Sheet = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SheetContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

const SheetTrigger = ({ children }) => {
  const { setIsOpen } = useSheet()
  return (
    <div onClick={() => setIsOpen(true)}>
      {children}
    </div>
  )
}

const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => {
  const { isOpen, setIsOpen } = useSheet()
  const contentRef = useRef(null)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, setIsOpen])

  if (!isOpen) return null

  const sideToPosition = {
    top: "inset-x-0 top-0 border-b",
    bottom: "inset-x-0 bottom-0 border-t",
    left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm bg-white",
    right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
  }

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/80" aria-hidden="true" />
      <div
        ref={contentRef}
        className={cn(
          "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          sideToPosition[side],
          className
        )}
        {...props}
      >
        {children}
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  )
});

SheetContent.displayName = "SheetContent";

const SheetHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)

const SheetFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold text-foreground",
      className
    )}
    {...props}
  />
))
SheetTitle.displayName = "SheetTitle"

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = "SheetDescription"

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

