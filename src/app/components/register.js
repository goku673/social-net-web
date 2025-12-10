'use client';

import { useRegisterForm } from '../hooks/useRegisterForm';
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
import { Text } from './common/text';
import { Link } from './common/link';
import { Icons } from './icons/icons';

export default function RegisterPage() {
  const { formik, loading } = useRegisterForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">
            Únete a SocialNet
          </CardTitle>
          <CardDescription>Crea tu cuenta y conecta con amigos</CardDescription>
        </CardHeader>

        <CardContent>
          <Form onSubmit={formik.handleSubmit}>
            <FormField
              label="Nombre Completo"
              error={formik.touched.nombre && formik.errors.nombre}
              required
            >
              <Input
                placeholder="Juan Pérez"
                disabled={loading}
                className={
                  formik.touched.nombre && formik.errors.nombre
                    ? 'border-destructive'
                    : ''
                }
                {...formik.getFieldProps('nombre')}
              />
            </FormField>

            <FormField
              label="Correo Electrónico"
              error={formik.touched.email && formik.errors.email}
              required
            >
              <Input
                type="email"
                placeholder="juan@ejemplo.com"
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

            <FormField
              label="Confirmar Contraseña"
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              required
            >
              <Input
                type="password"
                placeholder="••••••"
                disabled={loading}
                className={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? 'border-destructive'
                    : ''
                }
                {...formik.getFieldProps('confirmPassword')}
              />
            </FormField>

            <FormField
              label="Foto de Perfil (Opcional)"
              error={formik.touched.imagen && formik.errors.imagen}
            >
              <Input
                name="imagen"
                type="file"
                disabled={loading}
                onChange={(event) => {
                  formik.setFieldValue('imagen', event.currentTarget.files[0]);
                }}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
              />
            </FormField>

            <Button type="submit" className="w-full mt-2" disabled={loading}>
              {loading ? (
                <>
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  Registrando...
                </>
              ) : (
                'Registrarse'
              )}
            </Button>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                O regístrate con
              </span>
            </div>
          </div>
          <Button variant="outline" className="w-full" disabled={loading}>
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>

          <div className="text-center">
            <Text variant="muted" className="inline mr-1">
              ¿Ya tienes una cuenta?
            </Text>
            <Link href="/" className="font-medium">
              Inicia sesión
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
