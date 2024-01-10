const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mariajosesoles:123@cluster0.p3atj70.mongodb.net/mean?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`BD conectada`);

    } catch (error) {
        console.log(error);
        process.exit(1); //Detiene la app
    }
}

module.exports = conectarDB