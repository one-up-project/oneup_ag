# imagen base 
FROM node:22

# directorio de trabajo
WORKDIR /gateway

# Copia de package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copia demas modulos
COPY . .

# Expone el puerto
EXPOSE 4000

# ejecutar la aplicación
CMD ["node", "server.js"]