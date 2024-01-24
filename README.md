# DemoCopernicus
## Tecnologías utilizadas
![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)
## Ejecución
Para poner en marcha la aplicación, siga estos pasos:
1.	Parar el servicio de mssql local y arrancar el servicio de Docker, si no es posible que de problemas
2.	Ejecutar ```Docker compose up -d``` en la carpeta raíz del proyecto
3.	Moverse al directorio src/customersService (```cd src/customerService```)
4.	Limpiar la base de datos existente con ```dotnet ef database drop```
5.	Actualizar la base de datos con ```dotnet ef database update```
6.	Ejecutar ```dotnet watch``` (para ver los mensajes del servidor) o ```dotnet run```
7.	En otro terminal, ir al directorio Frontend/democopoernicus (```cd frontend/democopernicus```)
8.	Ejecutar ```npm start``` para iniciar la aplicación de react

--------
2024 
