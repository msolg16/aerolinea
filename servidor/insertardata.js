const mongoose = require('mongoose');
const Avion = require('./models/Avion')

// Conexión a la base de datos
mongoose.connect("mongodb+srv://mariajosesoles:123@cluster0.p3atj70.mongodb.net/mean?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

const insertardata = async () => {
  try {
    // Insertar tres aviones
    const avion1 = await avion.create({
      codigo:'BOEING-747'
    });

    const avion2 = await avion.create({
      codigo:'BOEING-748'
    });

    const avion3 = await avion.create({
      codigo:'BOEING-749'
    });

    await avion1.save();
    await avion2.save();
    await avion3.save();

    console.log('Datos insertados correctamente.');

  } catch (error) {
    console.error('Error al insertar datos:', error);
  } finally {
    // Cerrar la conexión después de completar las operaciones
    mongoose.disconnect();
  }
};

// Ejecutar la función
insertardata();
