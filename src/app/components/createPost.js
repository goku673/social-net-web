'use client';
import React, { useState } from 'react';
import { ImageIcon } from './icons/imageIcon';
import { SmileIcon } from './icons/smile.Icon';
import { XIcon } from './icons/xIcon';
import { Button } from './common/button';
import { Input } from './common/input';
import { Textarea } from './common/texTarea';
import { CustomImage } from './common/customImage';
import { Form } from './form/form';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog/dialog';

const CreatePost = ({ isCreatingPost, setIsCreatingPost, addPost }) => {
  const [newPost, setNewPost] = useState('');
  const [newImage, setNewImage] = useState(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() || newImage) {
      const newPostObj = {
        id: Date.now(),
        author: 'Carlos Nombre',
        avatar: 'https://github.com/shadcn.png',
        content: newPost,
        image: newImage,
        likes: 0,
        comments: 0,
        time: 'Ahora',
      };

      if (addPost) addPost(newPostObj);

      setNewPost('');
      setNewImage(null);
      if (setIsCreatingPost) setIsCreatingPost(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex space-x-4">
        <CustomImage
          src="https://github.com/shadcn.png"
          alt="Avatar"
          className="h-10 w-10 rounded-full object-cover"
          width={40}
          height={40}
        />

        <div className="flex-1">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-gray-500 font-normal hover:bg-gray-50"
              >
                ¿Qué estás pensando?
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Crear publicación</DialogTitle>
              </DialogHeader>

              <Form onSubmit={handlePostSubmit} className="mt-4">
                <Textarea
                  placeholder="¿Qué estás pensando?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="min-h-[100px] resize-none border-gray-200 focus:border-blue-500"
                />
                {newImage && (
                  <div className="relative mt-2 bg-gray-100 rounded-md overflow-hidden flex justify-center">
                    <CustomImage
                      src={newImage}
                      alt="Preview"
                      width={500}
                      height={300}
                      className="w-full max-h-60 object-contain"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8 rounded-full shadow-md"
                      onClick={() => setNewImage(null)}
                    >
                      <XIcon className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <div className="flex space-x-2">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload">
                      <div className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 w-10 hover:bg-gray-100 cursor-pointer text-blue-500 transition-colors">
                        <ImageIcon className="h-5 w-5" />
                      </div>
                    </label>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="text-yellow-500"
                    >
                      <SmileIcon className="h-5 w-5" />
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    disabled={!newPost.trim() && !newImage}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Publicar
                  </Button>
                </div>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
