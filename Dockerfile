# Fase 1: Instalar dependencias
FROM node:20.12.2-alpine AS deps
RUN apk add --no-cache libc6-compat
RUN mkdir -p /usr/src/next-ssr
WORKDIR /usr/src/next-ssr
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Fase 2: Construir la aplicación con caché de dependencias
FROM node:20.12.2-alpine as builder
WORKDIR /usr/src/next-ssr
RUN npm install -g pnpm
COPY --from=deps /usr/src/next-ssr/node_modules ./node_modules
COPY . .
RUN pnpm build

# Fase 3: Ejecución del servidor Node.js con Next.js (SSR)
FROM node:20.12.2-alpine as production
WORKDIR /usr/src/next-ssr
RUN npm install -g pnpm
COPY --from=builder /usr/src/next-ssr ./
EXPOSE 3000
CMD ["pnpm", "start"]
