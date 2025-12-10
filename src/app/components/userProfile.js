'use client';
import React from 'react';
import { CalendarIcon } from './icons/calendarIcon';
import { MapPinIcon } from './icons/mapPinIcon';
import { LinkIcon } from './icons/linkIcon';
import { EditIcon } from './icons/editIcon';
import { CameraIcon } from './icons/cameraIcon';
import { Button } from './common/button';
import { CustomImage } from './common/customImage';
import { Text } from './common/text';
import { Link } from './common/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs/tabs';
import { Avatar } from './ui/avatar/avatar';
import AvatarFallback from './ui/avatar/avatarFallback';
import AvatarImage from './ui/avatar/avatarImage';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

const UserProfile = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="relative">
        {/* Portada */}
        <div className="h-48 bg-muted w-full overflow-hidden">
          <CustomImage
            src="https://picsum.photos/1000/300"
            alt="Portada"
            className="w-full h-full object-cover"
            width={1200}
            height={300}
            priority
          />
        </div>

        <Button
          size="sm"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-black border-none"
        >
          <CameraIcon className="mr-2 h-4 w-4" /> Cambiar portada
        </Button>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Avatar className="w-32 h-32 border-4 border-background bg-background">
            <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="freddy" />
            <AvatarFallback>fr</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mt-12 space-y-1">
          <Text variant="large" className="text-3xl font-bold">
            Freddy
          </Text>
          <Text variant="muted">@freddy</Text>
        </div>

        <div className="mt-6 flex justify-center">
          <Button className="mr-4">
            <EditIcon className="mr-2 h-4 w-4" /> Editar perfil
          </Button>
          <Button variant="outline">Mensaje</Button>
        </div>

        <div className="mt-8 flex justify-center space-x-8">
          <div className="text-center">
            <Text className="text-2xl font-bold">250</Text>
            <Text variant="muted">Publicaciones</Text>
          </div>
          <div className="text-center">
            <Text className="text-2xl font-bold">10.5k</Text>
            <Text variant="muted">Seguidores</Text>
          </div>
          <div className="text-center">
            <Text className="text-2xl font-bold">500</Text>
            <Text variant="muted">Siguiendo</Text>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Text className="max-w-2xl mx-auto">
            Desarrollador web apasionado por la tecnología y el diseño. Amante
            de los viajes y la fotografía.
          </Text>
        </div>

        <div className="mt-4 flex justify-center space-x-4 flex-wrap gap-y-2">
          <div className="flex items-center">
            <MapPinIcon className="w-4 h-4 mr-2 text-muted-foreground" />
            <Text variant="muted">Madrid, España</Text>
          </div>
          <div className="flex items-center">
            <LinkIcon className="w-4 h-4 mr-2 text-muted-foreground" />
            <Link href="https://juandoe.com" className="text-sm">
              juandoe.com
            </Link>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-2 text-muted-foreground" />
            <Text variant="muted">Se unió en Enero 2020</Text>
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
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
                      <CustomImage
                        src={`https://picsum.photos/400/300?random=${post}`}
                        alt={`Publicación ${post}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        width={400}
                        height={300}
                      />
                    </div>
                    <CardTitle className="text-lg mb-2">
                      Título de la publicación {post}
                    </CardTitle>
                    <Text variant="muted">
                      Esta es una breve descripción de la publicación {post}.
                      Aquí iría el contenido resumido...
                    </Text>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-4">Sobre Freddy</CardTitle>
                <Text variant="muted" className="mb-6 leading-relaxed">
                  Desarrollador web apasionado por la tecnología y el diseño.
                  Amante de los viajes y la fotografía. Siempre buscando
                  aprender nuevas habilidades y enfrentar desafíos emocionantes
                  en el mundo del desarrollo web.
                </Text>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPinIcon className="w-5 h-5 mr-3 text-muted-foreground" />
                    <Text>Madrid, España</Text>
                  </div>
                  <div className="flex items-center">
                    <LinkIcon className="w-5 h-5 mr-3 text-muted-foreground" />
                    <Link href="https://juandoe.com">juandoe.com</Link>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-3 text-muted-foreground" />
                    <Text>Se unió en Enero 2020</Text>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserProfile;
