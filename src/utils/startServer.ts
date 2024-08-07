import { Express } from "express"
import sequelize from "../config/db";

const startServer = async(app: Express,PORT: number): Promise<void> =>{ // Función para inciiar el servidor
    try{ // Manejador de errores

        await sequelize.authenticate(); // Intentar conectar, prueba la conexión
        console.log("Connection correctly...");
        await sequelize.sync(); // Sincronizar todos los modelos definidos a la base de datos
        app.listen(PORT, ()=>console.log(`Server running on the port ${PORT}`)); // app.listen Inicia y muestra donde se inicializa el servidor

    }catch(error){ // Posibles errores 
        console.log({message: "Error with the function startServer", error: error});
    }
}

export default startServer;