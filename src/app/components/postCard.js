"use client"
import React from "react"
import { Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react"
import { Button } from "./common/button";
import { Dialog, DialogContent, DialogFooter, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog/dialog";
import { Textarea } from "./textTarea";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white  rounded-lg shadow">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              height={100}
              width={100}
              className="h-10 w-10 rounded-full"
              src={post.avatar || "/placeholder.svg"}
              alt={`${post.author}'s avatar`}
            />
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.time}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="px-4 pb-4">
        <p>{post.content}</p>
        {post.image && (
          <Image
          width={100}
          height={100}
            src={post.image || "/placeholder.svg"}
            alt="Imagen de la publicación"
            className="mt-4 rounded-lg w-full"
          />
        )}
      </div>
      <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 flex justify-between">
        <Button variant="ghost" size="sm" className="flex items-center space-x-2">
          <Heart className="h-5 w-5" />
          <span>{post.likes}</span>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>{post.comments}</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Comentarios</DialogTitle>
              <DialogDescription>Aquí puedes ver y añadir comentarios a esta publicación.</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <Textarea placeholder="Añade un comentario..." />
              <Button className="mt-2">Comentar</Button>
            </div>
          </DialogContent>
        </Dialog>
        <Button variant="ghost" size="sm">
          <Share2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default PostCard

