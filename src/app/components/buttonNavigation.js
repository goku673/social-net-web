import React from "react"
import { Bell, Home, ImageIcon, Search, User } from "lucide-react"
import { Button } from "./common/button"

const BottomNavigation = ({ setIsCreatingPost, setActiveView }) => {
  return (
    <nav className="bg-white  shadow-md fixed bottom-0 left-0 right-0 z-10 lg:hidden">
      <div className="max-w-lg mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Button variant="ghost" size="icon" onClick={() => setActiveView("feed")}>
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setActiveView("feed")}>
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsCreatingPost(true)}>
            <ImageIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setActiveView("profile")}>
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default BottomNavigation;