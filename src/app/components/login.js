"use client"
import React, { useState } from "react"
import { Button } from "./common/button";
import { Icons } from "./icons/icons";
import { Card, CardContent, CardDescription,CardFooter,CardHeader,CardTitle } from "./ui/card/cardpremiun";
import Link from "next/link";
import { Input } from "./common/input";
import { inputFieldsLogin } from "./utils/formUtils";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/redux/auth/auth";
const Login = () => {
        const navigation = useRouter();
        const [login, { loading : loadingLogin }] = useLoginMutation();

        const [formData, setFormData] = useState({
            name: "",
            password: "",
        })

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          
        const response =  await login(formData);
        const user = {
              email : response.data?.email,
              fechaRegistro : response.data?.fechaRegistro,
              imagenURL : response.data?.imagenURL,
              imagenURLPortada : response.data?.imagenURLPortada,
              nombre : response.data?.nombre,
              userID : response.data?.userID,
        }
        localStorage.setItem("user",JSON.stringify(user));
        navigation.push("/socialNet");
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
                  <div key={field.label} className="space-y-2">
                    <label  htmlFor={field.label}>{field.label}</label>
                    <Input
                      key={field.label}
                      id={field.label}
                      type={field.type}
                      name={field.label}
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
                  disabled={loadingLogin}
                >
                  {loadingLogin && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                  {loadingLogin ? "Iniciando sesión..." : "Iniciar Sesión"}
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
              </div>
              <p className="text-center text-sm text-gray-600">
                ¿No tienes una cuenta?{" "}
                <Link href="/signUp" className="text-blue-600 hover:underline font-medium">
                  Registrate
                </Link>
              </p>
            </CardFooter>
          </Card>
        )
      }
      
      export default Login;

