import React, { useState } from "react"
import { Button } from "./common/button";
import { Icons } from "./icons/icons";
import { Card, CardContent, CardDescription,CardFooter,CardHeader,CardTitle } from "./ui/card/cardpremiun";

import { Input } from "./common/input";
import { inputFieldsLogin } from "./utils/formUtils";
    const Login = () => {
        const [formData, setFormData] = useState({
            email: "",
            password: ""
        })

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        const [isLoading, setIsLoading] = useState(false);
        const handleSubmit = async (e) => {
          e.preventDefault()
          setIsLoading(true)
          // Simular una petición de registro
          await new Promise((resolve) => setTimeout(resolve, 2000))
          console.log("Datos de registro:", formData)
          setIsLoading(false)
        }

        return (
          <Card className="w-full max-w-md mx-auto bg-white shadow-lg border border-gray-100">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-gray-800">Iniciar Sesión en SocialNet</CardTitle>
              <p className="text-sm text-center text-gray-500">Ingresa tus credenciales para conectarte</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {inputFieldsLogin.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label htmlFor={field.name}>{field.label}</label>
                    <Input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                ))}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                  disabled={isLoading}
                >
                  {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                  {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">O inicia sesión con</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="w-full">
                  <Icons.google className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <Icons.facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
              </div>
              <p className="text-center text-sm text-gray-600">
                ¿No tienes una cuenta?{" "}
                <a href="#" className="text-blue-600 hover:underline font-medium">
                  Regístrate
                </a>
              </p>
            </CardFooter>
          </Card>
        )
      }
      
      export default Login;

