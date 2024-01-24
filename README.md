#DemoCopernicus

## Ejecución
Para poner en marcha la aplicación, siga estos pasos:
1.	Parar el servicio de mssql local y arrancar el servicio de Docker, si no es posible que de problemas
2.	Ejecutar Docker compose up -d en la carpeta raíz del proyecto
3.	Moverse al directorio src/customersService (cd src/customerService)
4.	Limpiar la base de datos existente con dotnet ef database drop
5.	Actualizar la base de datos con dotnet ef database update
6.	Ejecutar dotnet watch (para ver los mensajes del servidor) o dotnet run 
7.	En otro terminal, ir al directorio Frontend/democopoernicus (cd frontend/democopernicus)
8.	Ejecutar npm start para iniciar la aplicación de react

