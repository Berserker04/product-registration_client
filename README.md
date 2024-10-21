# Ejecutar en desarrollo

1. Tener pnpm instalado
```
npm i -g pnpm
```

2. Versión de NodeJs usada
```
v20.12.2
```

4. Levantar el servidor

[Documentación de la api](https://github.com/Berserker04/product-registration_api)

5. Clonar el repositorio

6. Ejecutar
```
pnpm install
```

7. Clonar el archivo ```.env.template``` y renombrar la copia a ```.env```

8. Ejecutar la aplicación en dev:
```
pnpm dev
```

9. Prueba ingresando al registro de productos
```
http://localhost:3000/products
```

# Inicio rapido con docker

1. Tener Docker instalado
- [Docker install](https://docs.docker.com/desktop/install/windows-install/)

2. Levantar el servidor

[Documentación de la api](https://github.com/Berserker04/product-registration_api)

3. Clonar el repositorio

4. Clonar el archivo ```.env.template``` y renombrar la copia a ```
.env```

5. Ejecuta el docker-compose
```
docker-compose -f docker-compose.prod.yaml up -d --build
```

6. Prueba ingresando al registro de productos
```
http://localhost:3000/products
```

## Stack usado
* NextJs
* Nest
* Postgres

# Production Build
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

# Despliegue
Desplegar imagen en plataformas como:

[Render](https://render.com/)

[Digital Ocean](https://www.digitalocean.com/)

# Link del portal en produción
Puedes probar con la web ya desplegada:

https://optimaltech-web.onrender.com/

# Mockup

![alt text](/src/assets/images/mockup.png)

# Vista en produción

![alt text](/src/assets/images/image.png)

## Si prefieres ejecutar el proyecto completo revisa el orquestador

[Orquestador](https://github.com/Berserker04/product-registration_docker)
