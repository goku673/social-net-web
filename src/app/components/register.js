'use client';
import React, { useState } from 'react';
import { Button } from './common/button';
import { Input } from './common/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from './ui/card/cardpremiun';
import { Icons } from './icons/icons';
import Link from 'next/link';
import { inputFieldsRegister } from './utils/formUtils';
import { useRegisterMutation } from '@/redux/auth/auth';
import { useRouter } from 'next/navigation';

const Register = () => {
  const navigation = useRouter();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    imagen: null,
  });

  const [register, { isLoading: registerLoading }] = useRegisterMutation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === 'file' ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    e.preventDefault();
    //console.log(formData);
    const response = await register(data);
    localStorage.setItem('user', JSON.stringify(response.data));
    //navigation.push("/");
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg border border-gray-100">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-gray-800">
          Únete a SocialNet
        </CardTitle>
        <p className="text-sm text-center text-gray-500">
          Crea tu cuenta y conecta con amigos
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {inputFieldsRegister.map((field) => (
            <div key={field.label} className="space-y-2">
              <label htmlFor={field.label}>{field.label}</label>
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
            disabled={registerLoading}
          >
            {registerLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {registerLoading ? 'Registrando...' : 'Registrarse'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              O regístrate con
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="w-full">
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <p className="text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta?{' '}
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            Inicia sesión
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Register;
