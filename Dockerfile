# ETAP 1: Build the application
FROM node:20-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
# Activar modo standalone para Docker
ENV NEXT_OUTPUT_STANDALONE=true
RUN pnpm build

# ETAP 2: Serve the application
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

#SEGURIDAD PARA NO CORRER COMO ROOT
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


COPY --from=builder /app/public ./public

# 4. Estructura correcta del modo Standalone
# Copiamos la carpeta .next/static a la ubicación correcta
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Copiamos todo lo que generó el modo standalone (incluye server.js y node_modules necesarios)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

USER nextjs

EXPOSE 3000
CMD ["node", "server.js"]