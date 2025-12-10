'use client';
import React from 'react';
import { HeartIcon } from './icons/heartIcon';
import { MessageCircleIcon } from './icons/messageCircleIcon';
import { MoreHorizontalIcon } from './icons/moreHorizontalIcon';
import { ShareIcon } from './icons/shareIcon';
import { Button } from './common/button';
import { Textarea } from './common/texTarea';
import { CustomImage } from './common/customImage';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from './ui/dialog/dialog';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow mb-6 border border-gray-100">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CustomImage
              src={post.avatar || '/placeholder.svg'}
              alt={`${post.author}'s avatar`}
              className="h-10 w-10 rounded-full object-cover border border-gray-200"
              width={40}
              height={40}
            />
            <div>
              <p className="font-semibold text-sm text-gray-900">
                {post.author}
              </p>
              <p className="text-xs text-gray-500">{post.time}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <MoreHorizontalIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="px-4 pb-2">
        {post.content && (
          <p className="text-sm text-gray-800 mb-3 whitespace-pre-wrap">
            {post.content}
          </p>
        )}

        {post.image && (
          <div className="mt-2 -mx-4 sm:mx-0 sm:rounded-lg overflow-hidden border-t border-b sm:border border-gray-100">
            <CustomImage
              src={post.image}
              alt="Contenido de la publicación"
              className="w-full h-auto object-cover max-h-[500px]"
              width={600}
              height={400}
            />
          </div>
        )}
      </div>
      <div className="px-4 py-2 border-t border-gray-100 flex justify-between items-center">
        {/* Botón Like */}
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2 text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors"
        >
          <HeartIcon className="h-5 w-5" />
          <span>{post.likes}</span>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-colors"
            >
              <MessageCircleIcon className="h-5 w-5" />
              <span>{post.comments}</span>
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Comentarios</DialogTitle>
              <DialogDescription>
                Participa en la conversación.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 flex flex-col gap-4">
              <div className="bg-gray-50 rounded-md p-8 text-center text-gray-500 text-sm">
                No hay comentarios aún. ¡Sé el primero en comentar!
              </div>

              <div className="flex gap-3 items-start mt-2">
                <CustomImage
                  src="https://github.com/shadcn.png"
                  alt="Avatar"
                  className="h-8 w-8 rounded-full"
                  width={32}
                  height={32}
                />
                <div className="flex-1 gap-2 flex flex-col">
                  <Textarea
                    placeholder="Escribe un comentario..."
                    className="min-h-[80px] text-sm"
                  />
                  <Button
                    size="sm"
                    className="self-end bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Comentar
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2 text-gray-500 hover:text-green-500 hover:bg-green-50 transition-colors"
        >
          <ShareIcon className="h-5 w-5" />
          <span className="hidden sm:inline">Compartir</span>
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
