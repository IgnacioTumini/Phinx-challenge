# Batalla de Pokemones🕹️

## Descripción

Esta es una aplicación web de batallas de pokemones que permite seleccionar un pokemon para hacerlo combatir contra otro totalmente aleatorio.

## Tecnologías Utilizadas

### Backend

- **NestJS**: Framework de Node.js para construir aplicaciones del lado del servidor.
- **TypeORM**: ORM (Object-Relational Mapping) para manejar las interacciones con la base de datos.
- **SQLite**: Base de datos ligera y fácil de configurar.
- **Morgan**: Middleware de registro de solicitudes HTTP.
- **Cors**: Middleware para permitir solicitudes entre diferentes dominios.
- **dotenv**: Para manejar variables de entorno.

### Frontend

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida para proyectos de frontend.
- **Material-UI (MUI)**: Biblioteca de componentes de interfaz de usuario basada en Material Design.
- **Emotion**: Librería para escribir estilos CSS con JavaScript.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.

## Instalación y Configuración

### Requisitos Previos

- Node.js
- npm

### Clonar el Repositorio

```bash
git clone https://github.com/tuusuario/tu-repositorio.git

```

### Backend

1. Navegar al directorio del backend e instalar dependencias:

   ```bash
   cd back
   npm install
   ```

2. Configurar las variables de entorno en un archivo `.env` en el directorio back:

   ```bash
   PORT=3000
   DATA_BASE=database.sqlite
   TYPE_DATA_BASE=sqlite
   ```

3. Ejecutar la aplicación:
   ```bash
    npm run start:dev
   ```

### Frontend

1. Navegar al directorio del front e instalar dependencias:

   ```bash
    cd front
    npm install
   ```

2. Ejecutar la aplicación:
   ```bash
    npm run dev
   ```
