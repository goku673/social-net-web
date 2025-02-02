"use client"
import React, { useState } from "react"
import NavBar from "../navBar"
import Sidebar from "../sidebar"
import Feed from "../feed"
import RightSidebar from "../rightBar"
import BottomNavigation from "../buttonNavigation"
import UserProfile from "../userProfile"

const SocialNetwork = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Carlos Nombre",
      avatar: "https://i.pravatar.cc/150?img=1",
      content: "¡Acabo de lanzar mi nuevo proyecto! 🚀",
      image: "https://picsum.photos/seed/1/600/400",
      likes: 15,
      comments: 5,
      time: "2h",
    },
    {
      id: 2,
      author: "María García",
      avatar: "https://i.pravatar.cc/150?img=2",
      content: "Hermoso día para una caminata en la naturaleza 🌳",
      image: "https://picsum.photos/seed/2/600/400",
      likes: 23,
      comments: 7,
      time: "4h",
    },
    {
      id: 3,
      author: "Juan Pérez",
      avatar: "https://i.pravatar.cc/150?img=3",
      content: "Nuevo artículo sobre IA en mi blog. ¡Échale un vistazo!",
      likes: 42,
      comments: 12,
      time: "6h",
    },
  ])

  const [isCreatingPost, setIsCreatingPost] = useState(false)
  const [activeView, setActiveView] = useState("feed")

  const addPost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  return (
    <div className="min-h-screen bg-gray-100 ">
      <NavBar />
      <main className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div className="hidden lg:block lg:w-1/4">
            <Sidebar setActiveView={setActiveView} />
          </div>
          <div className="w-full lg:w-1/2">
            {activeView === "feed" && (
              <Feed
                posts={posts}
                isCreatingPost={isCreatingPost}
                setIsCreatingPost={setIsCreatingPost}
                addPost={addPost}
              />
            )}
            
            {activeView === "profile" && <UserProfile />}
          </div>
          <div className="hidden lg:block lg:w-1/4">
            <RightSidebar />
          </div>
        </div>
      </main>
      <BottomNavigation setIsCreatingPost={setIsCreatingPost} setActiveView={setActiveView} />
    </div>
  )
}

export default SocialNetwork;
