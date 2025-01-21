import { Bell, Home, MessageCircle, Search, User } from "lucide-react";
import { Button } from "./common/button";
import Card from "./ui/card/card";
import CardContent from "./ui/card/cardContent";

const sidebarFields = [
    { label : "Inicio", icon : <Home className="mr-2 h-4 w-4"/> },
    { label : "Explorar", icon : <Search className="mr-2 h-4 w-4"/> },
    { label : "Notificaiones", icon : <Bell className="mr-2 h-4 w-4"/> },
    { label : "Mensajes", icon : <MessageCircle className="mr-2 h-4 w-4"/> },
    { label : "Perfil", icon : <User className="mr-2 h-4 w-4"/> },


]

    const Sidebar = () => ( 
            <Card className="bg-white">
               <CardContent>
                  {sidebarFields.map((field) => (
                    <div key={field.label}>
                       <Button 
                          variant="ghost" 
                          className="w-full justify-start" 
                          size="lg"
                        >
                        {field.icon}
                        {field.label}
                       </Button>
                    </div>
                  ))}
               </CardContent>
            </Card>
        );

    export default Sidebar;    
