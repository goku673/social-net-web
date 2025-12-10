import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const useRegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Esquema de validación
  const validationSchema = Yup.object({
    nombre: Yup.string()
      .min(2, 'El nombre es muy corto')
      .required('El nombre es obligatorio'),
    email: Yup.string()
      .email('Email inválido')
      .required('El email es requerido'),
    password: Yup.string()
      .min(6, 'Mínimo 6 caracteres')
      .required('La contraseña es requerida'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('Debes confirmar tu contraseña'),
    imagen: Yup.mixed().nullable(),
  });

  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      password: '',
      confirmPassword: '',
      imagen: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);

      // Simulación de Backend
      setTimeout(() => {
        console.log('Usuario registrado:', values);
        setLoading(false);
        router.push('/'); // Redirigir al login
      }, 2000);
    },
  });

  return {
    formik,
    loading,
  };
};
