import React from "react"
import { Calendar, MapPin, LinkIcon } from "lucide-react"
import { Button } from "./common/button"
import { Tabs, TabsContent, TabsList, TabsTrigger  } from "./ui/tabs/tabs";
import Image from "next/image";


const UserProfile = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow w-full max-w-2xl mx-auto">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col items-center space-y-4">
          <Image
          height={100}
          width={100}
           className="h-24 w-24 rounded-full"
            src="https://i.pravatar.cc/150?img=3" alt="Juan Doe" />
          <div className="text-center">
            <h2 className="text-2xl font-bold">Juan Doe</h2>
            <p className="text-gray-500 dark:text-gray-400">@juandoe</p>
          </div>
          <Button>Seguir</Button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center space-x-4 mb-4">
          <div className="text-center">
            <p className="font-bold">250</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Publicaciones</p>
          </div>
          <div className="text-center">
            <p className="font-bold">10.5k</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Seguidores</p>
          </div>
          <div className="text-center">
            <p className="font-bold">500</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Siguiendo</p>
          </div>
        </div>
        <p className="text-center mb-4">
          Desarrollador web apasionado por la tecnología y el diseño. Amante de los viajes y la fotografía.
        </p>
        <div className="flex flex-col space-y-2 mb-4">
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
        <Tabs defaultValue="posts">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="posts">Publicaciones</TabsTrigger>
            <TabsTrigger value="media">Multimedia</TabsTrigger>
            <TabsTrigger value="likes">Me gusta</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <p className="text-center text-gray-500 dark:text-gray-400 py-4">Publicaciones del usuario</p>
          </TabsContent>
          <TabsContent value="media">
            <p className="text-center text-gray-500 dark:text-gray-400 py-4">Contenido multimedia del usuario</p>
          </TabsContent>
          <TabsContent value="likes">
            <p className="text-center text-gray-500 dark:text-gray-400 py-4">Publicaciones que le gustan al usuario</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default UserProfile

