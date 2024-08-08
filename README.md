## Prueba de desempeño

### Arquitectura usada
Para la realización de esta prueba, se utliza la arquitectura ROUTES, CONTROLLERS, SERVICES, REPOSITORIES, MODEL. Con el fin 
de delegar las funciones de manera correcta. Asimismo, el lenguaje supertest requerido es Typescript. 

### Tecnología utilizadas
Este proyecto utiliza tecnologías como:
1. Typescript
2. Mysql
3. Postman 
4. Dependencias para la creación de la prueba 

### Dependencias utilizadas
1. Sequelize: ORM para interactuar con la base de datos utilizando objectos.
2. @Types/sequelize: Dependencia necesaria para trabajar con los tipos de typescript y sequelize

## Estructura del proyecto 
El entry del aplicativo es src/index.ts. Este archivo inicializa el proyecto 
1. __Config:__ 
    - __container.ts:__ Este archivo nos ayuda a registrar cada clase y crear una instancia única
    - __db.ts:__ Este archivo conecta con la base de datos utilizando sequelize

2.  __Controllers:__
    Esta carpeta conecta con los endpoint y el servicio. Maneja las solicitudes y coordinan la interacción con estas dos entidades.
    Capa de presentación

3. __middleware:__
    Intermediario para determinar si un usuario puede continuar según los requimientos o no. Asimismo, nos permite manejar os errores, modificar la respuesta, regisrtrar y continar con otras funciones.

4. __Models:__
    Capa de modelo. Esta carpeta tiene la lógica para crear las tablas y/o modelos de nuestra base de datos, usando propiedades 
    óptimas para cada elemento. Asimismo, determina las relaciones y la estructura para almacenador nuestros datos.

5. __Repositories:__
    Esta carpeta nos ofrece los recursos para interactuar con el servicio. Esos recursos sob obtenidos a base de los modelos.

6. __Routes:__
    Creación, lógica de cada uno de los endpoints. Este sería nuestro frontend

7. __Services:__

8. __Utils:__

