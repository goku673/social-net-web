import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const useRegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Esquema de validación mejorado
  const validationSchema = Yup.object({
    nombre: Yup.string()
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .max(50, 'El nombre no puede exceder 50 caracteres')
      .matches(
        /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        'El nombre solo puede contener letras y espacios'
      )
      .required('El nombre es obligatorio'),
    email: Yup.string()
      .email('Por favor ingresa un email válido')
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'El formato del email no es válido'
      )
      .required('El email es requerido'),
    password: Yup.string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'La contraseña debe contener al menos una mayúscula, una minúscula y un número'
      )
      .required('La contraseña es requerida'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('Debes confirmar tu contraseña'),
    imagen: Yup.mixed()
      .nullable()
      .test(
        'fileSize',
        'La imagen es demasiado grande. Máximo 5MB',
        (value) => {
          if (!value) return true; // Es opcional
          return value.size <= 5 * 1024 * 1024; // 5MB
        }
      )
      .test(
        'fileType',
        'Solo se permiten imágenes (JPG, PNG, GIF)',
        (value) => {
          if (!value) return true; // Es opcional
          return ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(
            value.type
          );
        }
      ),
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
