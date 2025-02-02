# API Gateway - Proyecto OneUp

## Descripción General

Este componente se implementa utilizando el módulo **ApolloServer** de Node.js y el lenguaje de consultas **GraphQL**.

## Estructura del Componente Gateway

```
├── domains/               # Agrupación basada en responsabilidades
│   ├── user/
│   │   ├── typeDefs.js    # Definición de tipos para usuarios y tiendas
│   │   ├── resolvers.js   # Resolvers para usuarios y tiendas
│   │   └── dataSources.js # Conexión con los microservicios (search_ms, auth_ms)
│   ├── content/
│   │   ├── typeDefs.js    # Definición de tipos para publicaciones
│   │   ├── resolvers.js   # Resolvers para publicaciones
│   │   └── dataSources.js # Conexión con el microservicio
│   ├── payment/
│   │   ├── typeDefs.js    # Definición de tipos para pagos
│   │   ├── resolvers.js   # Resolvers para pagos
│   │   └── dataSources.js # Conexión con el microservicio
│   └── index.js           # Unificación de los módulos typeDefs y resolvers para cada agrupación
├── server.js               # Configuración del servidor Apollo
```

## Docker: Obtención de la Imagen

1. Crear la imagen de contenedor a partir del `Dockerfile` establecido.
2. Obtener la imagen desde Docker Hub:
   ```
   docker pull d0kc3rgriverab/oneup_ag:v1
   ```

