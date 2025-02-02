#API Gateway proyecto OneUp

Este componente se implementa utilizando el modulo ApolloServer de Node.js y el lenguaje de consultas GraphQL 

Estructura componente gateway:

├── domains/               # Agrupacion basada en responsabilidades
│   ├── user/
│   │   ├── typeDefs.js    # Definicion de tipos para usuarios y tiendas
│   │   ├── resolvers.js   # Resolvers para usuarios y tiendas
│   │   └── dataSources.js # Conexión con los microservicios (search_ms, auth_ms)
│   ├── content/
│   │   ├── typeDefs.js    # Definicion de tipos para publicaciones
│   │   ├── resolvers.js   # Resolvers para publicaciones
│   │   └── dataSources.js # Conexión con el microservicio
│   ├── payment/
│   │   ├── typeDefs.js    # Definicion de tipos para pagos
│   │   ├── resolvers.js   # Resolvers para pagos
│   │   └── dataSources.js # Conexión con el microservicio
│   └── index.js           # Unificacion de los módulos typeDefs y resolvers para cada agrupacion
├── server.js               # Configuración del servidor Apollo
