# Use a lightweight Node.js base image optimized for ARM
FROM node:18-bullseye-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copia los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código (excluido lo que está en .dockerignore)
COPY . .

# Install SQLite
RUN apk add --no-cache sqlite

# Compila el código TypeScript
RUN npm run build

# Define el comando para ejecutar la aplicación
CMD ["npm", "run", "start"]
