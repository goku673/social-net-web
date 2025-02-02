
"use client"
import { Bell, MessageCircle, Search, Menu } from "lucide-react";
import { Avatar } from "./ui/avatar/avatar";
import AvatarFallback from "./ui/avatar/avatarFallback";
import AvatarImage from "./ui/avatar/avatarImage";
import { Button } from "./common/button";
import { Input } from "./common/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuSubContent, DropdownMenuTrigger, DropdownMenuItem } from "./ui/dropdownMenu/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription,SheetHeader, SheetFooter } from "./ui/sheet/sheetPremiun";
import Sidebar from "./sidebar";
import { useRouter } from "next/navigation";

    const NavBar = () => {
       
        const navigate = useRouter();
        const user = JSON.parse(localStorage.getItem("user"));
        return (
            <nav className="bg-white  shadow-md top-0 z-10">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                  <div>
                    <Sheet>
                      <SheetTrigger>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="mr-2 lg:hidden">
                        <Menu className="h-5 w-5" />
                      </Button>
                      </SheetTrigger>
                      <SheetContent side="left">
                        <SheetHeader className="bg-white">
                          <SheetTitle>
                            Menú
                          </SheetTitle>
                          <SheetDescription>
                            Navega por las diferentes seciones de SocialNet
                          </SheetDescription>
                        </SheetHeader>
                        <div className="mt-4 ">
                          <Sidebar/>
                        </div>
                      </SheetContent>
                    </Sheet>
                    <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      SocialNet
                    </h1>
                  </div>
                  <div className="hidden md:flex items center space-x-4">
                    <div className="relative">
                       <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                       <Input  type="text" placeholder="Buscar..." className="pl-10 w-64" />                  
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                    >
                     <Bell className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </Button>
                  </div>
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                       <Avatar className="cursor-pointer">
                          <AvatarImage src="https://github.com/shadcn.png" alt="Hola" />
                          <AvatarFallback>CN</AvatarFallback>
                       </Avatar>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent align="end">
                       <DropdownMenuItem onSelect={() => navigate.push(`/socialNet/${user?.userID}`)} >
                         Perfil
                       </DropdownMenuItem>
                       <DropdownMenuItem>
                         Configuración
                       </DropdownMenuItem>
                       <DropdownMenuItem>
                         Cerrar Sesión
                       </DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </nav>
        )
    }

    export default NavBar;