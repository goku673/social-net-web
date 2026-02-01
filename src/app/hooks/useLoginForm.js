import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const useLoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Por favor ingresa un email válido')
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'El formato del email no es válido'
      )
      .required('El email es requerido'),
    password: Yup.string().required('La contraseña es requerida'),
    rememberMe: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setGeneralError('');

      setTimeout(() => {
        const mockUser = {
          name: values.email.split('@')[0],
          email: values.email,
        };
        console.log('Login exitoso:', values);
        setLoading(false);
        router.push('/socialNet');
      }, 1500);
    },
  });

  return {
    formik,
    loading,
    generalError,
  };
};
