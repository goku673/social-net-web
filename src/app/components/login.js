'use client';

import { useLoginForm } from '../hooks/useLoginForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Form } from './form/form';
import { FormField } from './form/formField';
import { Input } from './common/input';
import { Button } from './common/button';
import { Checkbox } from './common/checkBox';
import { Label } from './common/label';
import { ErrorMessage } from './common/errorMessage';
import { Link } from './common/link';

export default function LoginPage() {
  const { formik, loading, generalError } = useLoginForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Iniciar Sesión</CardTitle>
          <CardDescription>Ingresa tus datos para continuar</CardDescription>
        </CardHeader>

        <CardContent>
          <ErrorMessage
            show={!!generalError}
            message={generalError}
            className="mb-4 text-center block"
          />

          <Form onSubmit={formik.handleSubmit}>
            <FormField
              label="Email"
              error={formik.touched.email && formik.errors.email}
              required
            >
              <Input
                id="email"
                type="email"
                placeholder="correo@ejemplo.com"
                disabled={loading}
                className={
                  formik.touched.email && formik.errors.email
                    ? 'border-destructive'
                    : ''
                }
                {...formik.getFieldProps('email')}
              />
            </FormField>

            <FormField
              label="Contraseña"
              error={formik.touched.password && formik.errors.password}
              required
            >
              <Input
                id="password"
                type="password"
                placeholder="••••••"
                disabled={loading}
                className={
                  formik.touched.password && formik.errors.password
                    ? 'border-destructive'
                    : ''
                }
                {...formik.getFieldProps('password')}
              />
            </FormField>

            <div className="flex items-center gap-2 mt-2">
              <Checkbox
                id="rememberMe"
                // 1. Usamos getFieldProps para traer name, onChange y onBlur
                {...formik.getFieldProps('rememberMe')}
                checked={formik.values.rememberMe}
                disabled={loading}
              />
              <Label
                htmlFor="rememberMe"
                className="cursor-pointer font-normal"
              >
                Recuérdame en este dispositivo
              </Label>
            </div>
            <Button type="submit" className="w-full mt-4" disabled={loading}>
              {loading ? 'Verificando...' : 'Entrar'}
            </Button>

            <div className="flex justify-between mt-4">
              <Link href="/forgot-password" className="text-sm">
                ¿Olvidaste tu contraseña?
              </Link>
              <Link href="/signUp" className="text-sm">
                ¿No tienes una cuenta? Regístrate
              </Link>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
