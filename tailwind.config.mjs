/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Colores principales
        primary: {
          50: '#EFF6FF',  // Muy claro (fondos)
          100: '#DBEAFE', // Claro (hover/estados)
          200: '#BFDBFE', // Borde claro
          300: '#93C5FD', // Secundario claro
          400: '#60A5FA', // Secundario
          500: '#3B82F6', // Principal
          600: '#2563EB', // Principal oscuro
          700: '#1D4ED8', // Hover
          800: '#1E40AF', // Activo
          900: '#1E3A8A', // Texto
        },
        
        // Colores neutrales
        neutral: {
          50: '#F9FAFB',   // Fondo de página
          100: '#F3F4F6',  // Fondos secundarios
          200: '#E5E7EB',  // Bordes
          300: '#D1D5DB',  // Líneas divisorias
          400: '#9CA3AF',  // Texto secundario
          500: '#6B7280',  // Texto normal
          600: '#4B5563',  // Texto importante
          700: '#374151',  // Texto destacado
          800: '#1F2937',  // Texto principal
          900: '#111827',  // Texto fuerte
        },
        
        // Colores de estado
        success: {
          light: '#D1FAE5',
          DEFAULT: '#10B981',
          dark: '#059669',
        },
        warning: {
          light: '#FEF3C7',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        error: {
          light: '#FEE2E2',
          DEFAULT: '#EF4444',
          dark: '#DC2626',
        },
        
        // Colores de redes sociales
        social: {
          facebook: '#1877F2',
          twitter: '#1DA1F2',
          instagram: '#E1306C',
          linkedin: '#0A66C2',
          youtube: '#FF0000',
          whatsapp: '#25D366',
        },
        
        // Variables para modo claro/oscuro
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
      },
      
      // Configuración de sombras
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
      
      // Configuración de bordes
      borderRadius: {
        'none': '0px',
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};