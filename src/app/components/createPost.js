"use client"
import React, { useState } from "react"
import { ImageIcon, Smile, X } from "lucide-react"
import { Button } from "./common/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog/dialog";
import { Textarea } from "./textTarea";
import { Input } from "./common/input"
import Image from "next/image";

const CreatePost = ({ isCreatingPost, setIsCreatingPost, addPost }) => {
  const [newPost, setNewPost] = useState("")
  const [newImage, setNewImage] = useState(null)

  const handlePostSubmit = (e) => {
    e.preventDefault()
    if (newPost.trim() || newImage) {
      const newPostObj = {
        id: Date.now(),
        author: "Carlos Nombre",
        avatar: "https://github.com/shadcn.png",
        content: newPost,
        image: newImage,
        likes: 0,
        comments: 0,
        time: "Ahora",
      }
      addPost(newPostObj)
      setNewPost("")
      setNewImage(null)
      setIsCreatingPost(false)
    }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <Image 
            height={100}
            width={100}
            className="h-10 w-10 rounded-full" 
            src="https://github.com/shadcn.png" 
            alt="User avatar"
            
           />
          <Dialog open={isCreatingPost} onOpenChange={setIsCreatingPost}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left text-gray-500">
                ¿Qué estás pensando?
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Crear publicación</DialogTitle>
              </DialogHeader>
              <form onSubmit={handlePostSubmit}>
                <div className="space-y-4">
                  <Textarea
                    placeholder="¿Qué estás pensando?"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                  />
                  {newImage && (
                    <div className="relative ">
                      <Image 
                        height={100} 
                        width={100}
                        objectFit="cover"
                        alt="Nueva imagen"
                        src={newImage || "/placeholder.svg"} className="rounded-lg"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => setNewImage(null)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload">
                        <Button type="button" variant="ghost" size="icon">
                          <ImageIcon className="h-5 w-5" />
                        </Button>
                      </label>
                      <Button type="button" variant="ghost" size="icon">
                        <Smile className="h-5 w-5" />
                      </Button>
                    </div>
                    <Button type="submit">Publicar</Button>
                  </div>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default CreatePost

