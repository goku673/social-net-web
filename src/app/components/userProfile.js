"use client"
import React from "react"
import { Calendar, MapPin, LinkIcon, Edit2, Camera } from "lucide-react"
import { Button } from "./common/button"
import { Tabs, TabsContent, TabsList, TabsTrigger  } from "./ui/tabs/tabs";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar/avatar";
import { Card, CardContent } from "./ui/card/cardpremiun";



const UserProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative">
        <div className="h-48 bg-gray-300">
          <Image 
          src="https://picsum.photos/1000/300" 
          alt="Portada" 
          className="w-full h-full object-cover" 
          width={100}
          height={100} />
        </div>
        <Button size="sm" className="absolute top-2 right-2">
          <Camera className="mr-2 h-4 w-4" /> Cambiar portada
        </Button>
        <Avatar className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 border-4 border-white">
          <AvatarImage src="https://i.pravatar.cc/150?img=3" alt={"freddy"} />
          <AvatarFallback>{"freddy".toLowerCase()}</AvatarFallback>
        </Avatar>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mt-8">
          <h1 className="text-3xl font-bold">{"freddy"}</h1>
          <p className="text-gray-600">@{"freddy".toLowerCase()}</p>
        </div>

        <div className="mt-6 flex justify-center">
          <Button className="mr-4">
            <Edit2 className="mr-2 h-4 w-4" /> Editar perfil
          </Button>
          <Button variant="outline">Mensaje</Button>
        </div>

        <div className="mt-8 flex justify-center space-x-8">
          <div className="text-center">
            <p className="text-2xl font-bold">250</p>
            <p className="text-gray-600">Publicaciones</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">10.5k</p>
            <p className="text-gray-600">Seguidores</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">500</p>
            <p className="text-gray-600">Siguiendo</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700 max-w-2xl mx-auto">
            Desarrollador web apasionado por la tecnología y el diseño. Amante de los viajes y la fotografía.
          </p>
        </div>

        <div className="mt-4 flex justify-center space-x-4 text-gray-600">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Madrid, España</span>
          </div>
          <div className="flex items-center">
            <LinkIcon className="w-4 h-4 mr-2" />
            <a href="https://juandoe.com" className="text-blue-500 hover:underline">
              juandoe.com
            </a>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Se unió en Enero 2020</span>
          </div>
        </div>

        <Tabs defaultValue="posts" className="mt-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="posts">Publicaciones</TabsTrigger>
            <TabsTrigger value="about">Sobre mí</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[1, 2, 3, 4].map((post) => (
                <Card key={post}>
                  <CardContent className="p-4">
                    <Image
                      src={`https://picsum.photos/400/300?random=${post}`}
                      alt={`Publicación ${post}`}
                      className="w-full h-48 object-cover rounded-md mb-4"
                      width={100}
                      height={100}
                    />
                    <h3 className="font-semibold text-lg mb-2">Título de la publicación {post}</h3>
                    <p className="text-gray-600">
                      Esta es una breve descripción de la publicación {post}. Aquí iría el contenido resumido...
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="about">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Sobre freddy</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollador web apasionado por la tecnología y el diseño. Amante de los viajes y la fotografía.
                  Siempre buscando aprender nuevas habilidades y enfrentar desafíos emocionantes en el mundo del
                  desarrollo web.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                    <span>Madrid, España</span>
                  </div>
                  <div className="flex items-center">
                    <LinkIcon className="w-5 h-5 mr-2 text-gray-500" />
                    <a href="https://juandoe.com" className="text-blue-500 hover:underline">
                      juandoe.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                    <span>Se unió en Enero 2020</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default UserProfile

